<template>
  <TimelineLayout 
    :previous-step="'/timeline/learning-spanish'"
    :previous-step-name="$t('story.timeline.step3.title')"
    :next-step="'/timeline/region-decision'"
    :next-step-name="$t('story.timeline.step5.title')"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[300px] md:h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Madrid cityscape with modern architecture and blue sky"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            {{ $t('discoveringSpain.badge') }}
          </div>
          <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('discoveringSpain.title') }}
          </h1>
          <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('discoveringSpain.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <DiscoveringSpainIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Madrid als erster Stopp -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <DiscoveringSpainMadridSection />
        </div>
      </div>

      <!-- Section 3: Glutenfreies Leben -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <DiscoveringSpainGlutenFreeSection />
        </div>
      </div>

      <!-- Section 4: Lebensqualität -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <DiscoveringSpainQualityOfLifeSection />
        </div>
      </div>

      <!-- Section 5: Kultur & Menschen -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <DiscoveringSpainCultureSection />
        </div>
      </div>

      <!-- Section 6: Erste Kontakte -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <DiscoveringSpainContactsSection />
        </div>
      </div>

      <!-- Section 7: Fazit -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <DiscoveringSpainConclusionSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Spanien entdecken - Erste Reisen, Eindrücke und Begegnungen',
  meta: [
    { name: 'description', content: 'Erste Reisen nach Spanien: Madrid erkunden, glutenfreies Leben testen, Lebensqualität erleben und erste Kontakte knüpfen.' }
  ]
})
</script>
