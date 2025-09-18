<template>
  <div class="relative -mt-6 md:mt-0">
    <!-- Background Image -->
    <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
      <img
        src="/images/timeline/learning-spanish.png"
        alt="Spanisch lernen - Lehrbuch, Karteikarten und Laptop"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay for Better Text Readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    </div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
      <div class="text-white max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
          {{ $t('learning-spanish.hero.badge') }}
        </div>
        <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
          {{ $t('learning-spanish.hero.title') }}
        </h1>
        <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
          {{ $t('learning-spanish.hero.subtitle') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
