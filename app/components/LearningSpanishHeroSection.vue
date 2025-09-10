<template>
  <div class="relative">
    <!-- Background Image -->
    <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
      <img
        src="/images/timeline/learning-spanish.png"
        alt="Spanisch lernen - Lehrbuch, Karteikarten und Laptop"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay for Better Text Readability -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
    </div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 flex items-end p-8 md:p-12">
      <div class="text-white max-w-4xl">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
          {{ $t('story.timeline.step3.hero.badge') }}
        </div>
        <h1 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
          {{ $t('story.timeline.step3.hero.title') }}
        </h1>
        <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
          {{ $t('story.timeline.step3.hero.subtitle') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
