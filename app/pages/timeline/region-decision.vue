<template>
  <TimelineLayout 
    :previous-step="'/timeline/discovering-spain'"
    :previous-step-name="$t('story.timeline.step4.title')"
    :next-step="'/timeline/apartment-search'"
    :next-step-name="$t('story.timeline.step6.title')"
  >
    <!-- Hero Section -->
    <div class="relative -mt-6 md:mt-0">
      <!-- Background Image -->
      <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="/images/timeline/region-decision.png" 
          alt="Lupe auf Karte der Iberischen Halbinsel - Regionenauswahl"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            {{ $t('regionDecision.badge') }}
          </div>
          <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('regionDecision.title') }}
          </h1>
          <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('regionDecision.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <RegionDecisionIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Bevölkerungsverteilung -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <RegionDecisionPopulationSection />
        </div>
      </div>

      <!-- Section 3: Favoritenliste -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <RegionDecisionFavoritesSection />
        </div>
      </div>

      <!-- Section 4: Murcia Stadt und Region -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <RegionDecisionMurciaSection />
        </div>
      </div>

      <!-- Section 5: Eindruck vor Ort -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <RegionDecisionOnSiteSection />
        </div>
      </div>

      <!-- Section 6: Zwischen Stadt und Land -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <RegionDecisionCityCountrySection />
        </div>
      </div>

      <!-- Section 7: Fazit -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <RegionDecisionConclusionSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Die Entscheidung für eine Region - Von der Theorie zur Praxis',
  meta: [
    { name: 'description', content: 'Wie ich nach intensiver Recherche und Testreisen die Region Murcia als meine neue Heimat ausgewählt habe.' }
  ]
})
</script>
