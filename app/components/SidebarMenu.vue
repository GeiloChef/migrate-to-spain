<template>
  <div>
    <!-- Hamburger Button -->
    <button
      @click="toggleSidebar"
      class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl hover:bg-spain-yellow/20 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer touch-manipulation"
      :aria-label="t('ui.sidebar.toggleMenu')"
    >
      <Icon name="heroicons:bars-3" class="w-4 h-4 md:w-5 md:h-5 text-spain-navy hover:text-spain-navy/70 transition-colors" />
    </button>

    <!-- Sidebar Overlay and Drawer -->
    <Teleport to="body">
      <!-- Overlay -->
      <Transition
        enter-active-class="transition-opacity duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          @click="closeSidebar"
        ></div>
      </Transition>

      <!-- Drawer -->
      <Transition
        enter-active-class="transition-transform duration-200 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="isOpen"
          class="fixed top-0 left-0 h-screen w-[85%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[25%] bg-gradient-to-br from-spain-cream via-white to-spain-cream shadow-2xl z-50 flex flex-col border-r border-spain-yellow/30"
        >
          <!-- Sidebar Header - Fixed Top -->
          <div class="flex-shrink-0 p-4 md:p-6 border-b border-spain-yellow/30 bg-gradient-to-r from-spain-yellow/20 to-spain-yellow/10">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 md:gap-3">
                <h2 class="!text-lg md:!text-xl font-bold text-spain-navy">
                  Menü
                </h2>
              </div>
              <button
                @click="closeSidebar"
                class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl hover:bg-spain-yellow/20 transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer touch-manipulation"
                :aria-label="t('ui.sidebar.closeMenu')"
              >
                <Icon name="heroicons:x-mark" class="w-4 h-4 md:w-5 md:h-5 text-spain-navy hover:text-spain-navy/70 transition-colors" />
              </button>
            </div>
          </div>

          <!-- Navigation Content - Scrollable Middle -->
          <div class="flex-1 overflow-y-auto p-3 md:p-4 space-y-1 md:space-y-2">
            <!-- Home -->
            <NuxtLink
              to="/"
              @click="closeSidebar"
              class="flex items-center p-2.5 md:p-3 rounded-xl hover:bg-gradient-to-r hover:from-spain-yellow/20 hover:to-spain-yellow/10 transition-all duration-300 group hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-spain-yellow/40 touch-manipulation"
              :class="{ 'bg-gradient-to-r from-spain-yellow/20 to-spain-yellow/10 text-spain-navy font-semibold shadow-md border-spain-yellow/50': $route.path === '/' }"
            >
              <span class="!text-sm font-semibold text-spain-navy group-hover:text-spain-navy transition-colors">{{ t('ui.sidebar.home') }}</span>
            </NuxtLink>

            <!-- Meine Geschichte - Collapsible Section -->
            <div class="space-y-1">
              <button
                @click="toggleStorySection"
                class="flex items-center justify-between p-2.5 md:p-3 rounded-xl hover:bg-gradient-to-r hover:from-spain-yellow/20 hover:to-spain-yellow/10 transition-all duration-300 group hover:shadow-lg hover:scale-[1.02] border border-transparent hover:border-spain-yellow/40 w-full text-left cursor-pointer touch-manipulation"
                :class="{ 'bg-gradient-to-r from-spain-yellow/20 to-spain-yellow/10 text-spain-navy font-semibold shadow-md border-spain-yellow/50': isStorySectionOpen }"
              >
                <span class="!text-sm font-semibold text-spain-navy group-hover:text-spain-navy transition-colors">Meine Geschichte</span>
                <Icon 
                  name="heroicons:chevron-right" 
                  class="w-4 h-4 text-spain-navy/70 group-hover:text-spain-navy transition-all duration-300 flex-shrink-0"
                  :class="{ 'rotate-90': isStorySectionOpen }"
                />
              </button>
              
              <!-- Story Steps - Collapsible Content -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-none"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-none"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="isStorySectionOpen" class="space-y-1 ml-4 md:ml-6 pl-3 md:pl-4 border-l-2 border-spain-yellow/50">
                  <NuxtLink
                    v-for="step in storySteps"
                    :key="step.key"
                    :to="`/timeline/${step.key}`"
                    @click="closeSidebar"
                    class="flex items-center p-2 md:p-3 transition-all duration-300 group touch-manipulation"
                  >
                    <div class="flex-1 min-w-0">
                      <div 
                        class="!text-sm font-medium truncate group-hover:font-bold transition-all duration-300"
                        :class="{
                          'text-spain-red font-semibold': $route.path.includes(step.key),
                          'text-spain-navy/60 group-hover:text-spain-navy': !$route.path.includes(step.key)
                        }"
                      >{{ step.title }}</div>
                    </div>
                  </NuxtLink>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Language Switcher - Fixed Bottom -->
          <div class="flex-shrink-0 p-3 md:p-4 border-t border-spain-yellow/30 bg-gradient-to-r from-spain-yellow/20 to-spain-yellow/10">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 md:gap-3">
                <div class="w-1 h-4 md:h-6 bg-gradient-to-b from-spain-yellow to-spain-yellow/80 rounded-full"></div>
                <h3 class="!text-sm font-bold text-spain-navy uppercase tracking-wider">
                  {{ t('ui.sidebar.language') }}
                </h3>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const isStorySectionOpen = ref(false)

// Block body scroll when sidebar is open
watch(isOpen, (newValue) => {
  if (newValue) {
    // Block body scroll
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  } else {
    // Restore body scroll
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }
})

// Handle escape key to close sidebar
const handleKeydown = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeSidebar()
  }
}

// Add event listeners
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

// Cleanup on unmount
onUnmounted(() => {
  // Remove event listeners
  document.removeEventListener('keydown', handleKeydown)
  
  // Restore body scroll when component is unmounted
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
})

// Check if we're on a timeline page and auto-open story section
const route = useRoute()

// Auto-open story section when on timeline page
const checkAndOpenStorySection = () => {
  if (route.path.includes('/timeline/')) {
    isStorySectionOpen.value = true
  }
}

// Watch route changes
watch(() => route.path, () => {
  checkAndOpenStorySection()
})

// Story steps configuration
const { t } = useI18n()
const storySteps = computed(() => [
  { number: 1, title: t('story.timeline.step1.title'), date: t('story.timeline.step1.date'), key: 'the-dream-of-spain' },
  { number: 2, title: t('story.timeline.step2.title'), date: t('story.timeline.step2.date'), key: 'first-research-feasibility' },
  { number: 3, title: t('story.timeline.step3.title'), date: t('story.timeline.step3.date'), key: 'learning-spanish' },
  { number: 4, title: t('story.timeline.step4.title'), date: t('story.timeline.step4.date'), key: 'discovering-spain' },
  { number: 5, title: t('story.timeline.step5.title'), date: t('story.timeline.step5.date'), key: 'region-decision' },
  { number: 6, title: t('story.timeline.step6.title'), date: t('story.timeline.step6.date'), key: 'apartment-search' },
  { number: 7, title: t('story.timeline.step7.title'), date: t('story.timeline.step7.date'), key: 'bureaucracy-prerequisites' },
  { number: 8, title: t('story.timeline.step8.title'), date: t('story.timeline.step8.date'), key: 'property-purchase' },
  { number: 9, title: t('story.timeline.step9.title'), date: t('story.timeline.step9.date'), key: 'gestoria' },
  { number: 10, title: t('story.timeline.step10.title'), date: t('story.timeline.step10.date'), key: 'insurance' },
  { number: 11, title: t('story.timeline.step11.title'), date: t('story.timeline.step11.date'), key: 'first-apartment-stay' },
  { number: 12, title: t('story.timeline.step12.title'), date: t('story.timeline.step12.date'), key: 'final-migration' }
])

// Toggle sidebar
const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}

// Toggle story section
const toggleStorySection = () => {
  isStorySectionOpen.value = !isStorySectionOpen.value
}

// Close sidebar
const closeSidebar = () => {
  isOpen.value = false
}

// Close sidebar on escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && isOpen.value) {
    closeSidebar()
  }
}

// Add event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
  checkAndOpenStorySection() // Check on mount
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>