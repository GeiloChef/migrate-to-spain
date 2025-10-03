<template>
  <div class="border-b border-spain-yellow/30 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
    <div class="max-w-4xl mx-auto px-4 py-4 md:px-6 md:py-6">
      <div class="flex items-center justify-between">
        <!-- Left side: Navigation and Title -->
        <div class="flex items-center gap-3 md:gap-6 min-w-0 flex-1">
          <!-- Hamburger Menu Button -->
          <div class="flex-shrink-0">
            <SidebarMenu />
          </div>
          
          <!-- Title -->
          <div class="min-w-0 flex-1">
            <h1 class="!text-lg md:!text-2xl font-bold text-gray-900 hidden md:block truncate">
              {{ $t('header.title') }}
            </h1>
            <h1 class="!text-base md:!text-xl font-bold text-gray-900 block md:hidden truncate">
              {{ $t('header.mobileTitle') }}
            </h1>
            <p class="text-gray-600 text-xs md:text-sm hidden md:block truncate">{{ $t('header.subtitle') }}</p>
            <p class="text-gray-600 text-xs md:text-sm block md:hidden truncate">{{ $t('header.mobileSubtitle') }}</p>
          </div>
        </div>

        <!-- Right side: Language Switcher -->
        <div class="flex-shrink-0 ml-2">
          <LanguageSwitcher />
        </div>
      </div>
      
      <!-- Mobile Reading Progress Bar -->
      <div class="block lg:hidden mt-3 pt-3 border-t border-gray-200">
        <div class="flex items-center justify-between text-xs text-gray-600 mb-1">
          <span>{{ $t('ui.readingProgress.title') }}</span>
          <span class="transition-all duration-300 ease-out">{{ Math.round(readingProgress) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-1">
          <div 
            class="bg-spain-red h-1 rounded-full transition-all duration-500 ease-out"
            :style="{ width: `${readingProgress}%` }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const readingProgress = ref(0)

// Calculate reading progress
const updateReadingProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = (scrollTop / docHeight) * 100
  readingProgress.value = Math.min(100, Math.max(0, progress))
}

// Handle scroll events
const handleScroll = () => {
  updateReadingProgress()
}

// Initialize on mount
onMounted(() => {
  updateReadingProgress()
  window.addEventListener('scroll', handleScroll)
})

// Clean up on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
