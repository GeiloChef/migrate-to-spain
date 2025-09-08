<template>
  <div class="hidden lg:block fixed left-6 z-40" style="position: fixed !important; left: 1.5rem !important; top: 200px !important;">
    <div class="bg-white/95 backdrop-blur-sm border border-yellow-200 rounded-lg shadow-lg p-3 max-w-64">
      <!-- Header -->
      <div class="flex items-center gap-2 mb-3 pb-2 border-b border-yellow-100">
        <Icon name="heroicons:list-bullet" class="w-4 h-4 text-yellow-600" />
        <h4 class="font-medium text-gray-800 !text-xs">
          {{ $t('ui.tableOfContents.title') }}
        </h4>
      </div>

      <!-- Navigation Links -->
      <nav class="space-y-0.5 max-h-80 overflow-y-auto">
        <div v-if="headings.length === 0" class="text-xs text-gray-500 px-2 py-1">
          {{ $t('ui.tableOfContents.noHeadings') }}
        </div>
        <button
          v-for="(heading, index) in headings"
          :key="index"
          @click="scrollToHeading(heading.id)"
          :class="[
            'block w-full text-left px-2 py-1.5 rounded text-xs transition-all duration-200 cursor-pointer',
            activeHeading === heading.id
              ? 'bg-yellow-100 text-yellow-800'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
          ]"
        >
          <span 
            class="block truncate" 
            :class="getHeadingIndent(heading.level)"
          >
            {{ heading.text }}
          </span>
        </button>
      </nav>

      <!-- Progress Indicator -->
      <div class="mt-3 pt-2 border-t border-yellow-100">
        <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>{{ Math.round(readingProgress) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1">
          <div 
            class="bg-yellow-400 h-1 rounded-full transition-all duration-300"
            :style="{ width: `${readingProgress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const headings = ref([])
const activeHeading = ref('')
const readingProgress = ref(0)

// Determine indentation based on heading level (simple tag-based)
const getHeadingIndent = (level) => {
  switch (level) {
    case 1: return '' // h1 - no indent
    case 2: return '' // h2 - no indent  
    case 3: return '' // h3 - no indent (main sections)
    case 4: return 'ml-4' // h4 - medium indent (sub-sections)
    case 5: return 'ml-5' // h5 - large indent
    case 6: return 'ml-6' // h6 - extra large indent
    default: return ''
  }
}

// Generate unique IDs for headings and extract them
const generateHeadingIds = () => {
  // Get all headings on the page
  const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  
  headingElements.forEach((element, index) => {
    // Skip headings that are in hero sections, navigation, header, or table of contents
    const isInHero = element.closest('.absolute.inset-0, .absolute.flex.items-end, [class*="hero"], .bg-gradient-to-t')
    const isInNavigation = element.closest('nav, .navigation, header')
    const isInTimelineHeader = element.closest('header, .timeline-header, .border-b.border-spain-yellow\\/30') // TimelineHeader container with escaped slash
    const isInTableOfContents = element.closest('[class*="table-of-contents"], .table-of-contents, .toc, .fixed.left-6')
    
    if (isInHero || isInNavigation || isInTimelineHeader || isInTableOfContents) {
      return // Skip this heading
    }
    
    // Generate a unique ID if it doesn't exist
    if (!element.id) {
      const text = element.textContent?.trim() || `heading-${index}`
      let id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 50)
      
      // Ensure ID is not empty and unique
      if (!id) id = `heading-${index}`
      
      let counter = 1
      let originalId = id
      while (document.getElementById(id)) {
        id = `${originalId}-${counter}`
        counter++
      }
      
      element.id = id
    }
    
    // Add to headings array
    const headingData = {
      id: element.id,
      text: element.textContent?.trim() || '',
      level: parseInt(element.tagName.charAt(1))
    }
    
    
    headings.value.push(headingData)
  })
}

// Scroll to heading with smooth behavior
const scrollToHeading = (headingId) => {
  // Try multiple ways to find the element
  let element = document.getElementById(headingId)
  
  if (!element) {
    // Try to find by text content as fallback
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const targetHeading = Array.from(headings).find(h => {
      const text = h.textContent?.trim().toLowerCase()
      const targetText = headingId.replace(/-/g, ' ').toLowerCase()
      return text === targetText
    })
    
    if (targetHeading) {
      element = targetHeading
    }
  }
  
  if (element) {
    // Get the element's position relative to the document
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementPosition = rect.top + scrollTop - 120
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
    
    // Update active heading immediately for better UX
    activeHeading.value = headingId
  } else {
    // Fallback: scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// Track which heading is currently in view
const updateActiveHeading = () => {
  const scrollPosition = window.scrollY + 150 // Offset for better UX
  
  for (let i = headings.value.length - 1; i >= 0; i--) {
    const element = document.getElementById(headings.value[i].id)
    if (element && element.offsetTop <= scrollPosition) {
      activeHeading.value = headings.value[i].id
      break
    }
  }
}

// Calculate reading progress
const updateReadingProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = (scrollTop / docHeight) * 100
  readingProgress.value = Math.min(100, Math.max(0, progress))
}

// Handle scroll events
const handleScroll = () => {
  updateActiveHeading()
  updateReadingProgress()
}

// Initialize on mount
onMounted(() => {
  // Wait for content to be rendered
  nextTick(() => {
    generateHeadingIds()
    updateActiveHeading()
    updateReadingProgress()
    
    // Debug: Check if headings were found
    console.log('TableOfContents: Found', headings.value.length, 'headings')
    if (headings.value.length === 0) {
      console.log('TableOfContents: No headings found - checking DOM...')
      const allHeadings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      console.log('TableOfContents: Total headings in DOM:', allHeadings.length)
    }
    
    window.addEventListener('scroll', handleScroll)
  })
})

// Clean up on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
