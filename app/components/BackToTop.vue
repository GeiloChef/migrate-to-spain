<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 scale-75 translate-y-4"
    enter-to-class="opacity-100 scale-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 scale-100 translate-y-0"
    leave-to-class="opacity-0 scale-75 translate-y-4"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 z-50 bg-white/95 backdrop-blur-sm border-2 border-yellow-400 hover:border-yellow-500 text-gray-800 hover:text-gray-900 rounded-full w-12 h-12 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
      :class="buttonPosition"
      :aria-label="$t('ui.backToTop.ariaLabel')"
    >
      <Icon 
        name="heroicons:arrow-up" 
        class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" 
      />
    </button>
  </Transition>
</template>

<script setup>
const isVisible = ref(false)

// Calculate button position to align with story content
const buttonPosition = computed(() => {
  // The story content has max-w-4xl and is centered, so we position the button
  // to align with the right edge of the content area
  return 'right-8 lg:right-[calc(50vw-32rem+2rem)]'
})

// Show button when user scrolls down more than 300px
const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

// Scroll to top with smooth behavior
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Add scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
