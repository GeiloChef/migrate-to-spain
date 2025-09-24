<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup>
// Handle mobile viewport height for browsers that don't support dvh
const setMobileViewportHeight = () => {
  if (typeof window !== 'undefined') {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
}

onMounted(() => {
  // Set mobile viewport height
  setMobileViewportHeight()
  
  // Update on resize and orientation change
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', setMobileViewportHeight)
    window.addEventListener('orientationchange', setMobileViewportHeight)
  }
})

onUnmounted(() => {
  // Clean up viewport height listeners
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', setMobileViewportHeight)
    window.removeEventListener('orientationchange', setMobileViewportHeight)
  }
})
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
