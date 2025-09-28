<template>
  <!-- Desktop Layout -->
  <div class="hidden md:block min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Hero Section -->
    <HeroSection />

    <!-- My Story Section -->
    <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-6 py-20">
        <StorySection />
      </div>
    </div>

    <!-- The Guide Section -->
    <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-6 py-20">
        <GuideSection />
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>

  <!-- Mobile Layout with Scroll Snap -->
  <div class="block md:hidden h-screen-mobile overflow-y-auto snap-y snap-mandatory scrollbar-hide">
    <!-- Hero Section -->
    <div class="h-screen-mobile snap-start">
      <HeroSection />
    </div>

    <!-- My Story Section -->
    <div class="h-screen-mobile snap-start bg-gradient-to-br from-gray-50 to-blue-50/30">
      <MobileTimelineSection />
    </div>

    <!-- The Guide Section -->
    <div class="h-screen snap-start bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="h-full flex items-center justify-center px-6">
        <GuideSection />
      </div>
    </div>

    <!-- Footer -->
    <div class="snap-start">
      <Footer />
    </div>
  </div>
</template>

<style scoped>
/* Mobile Scroll Snap Styles */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.snap-y {
  scroll-snap-type: y mandatory;
}

.snap-start {
  scroll-snap-align: start;
}
</style>
