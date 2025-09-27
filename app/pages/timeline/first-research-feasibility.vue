<template>
  <TimelineLayout 
    :previous-step="'/timeline/the-dream-of-spain'"
    :next-step="'/timeline/learning-spanish'"
    :previous-step-name="$t('story.timeline.step1.title')"
    :next-step-name="$t('story.timeline.step3.title')"
  >
    <!-- Hero Section -->
    <div class="relative -mt-6 md:mt-0">
      <!-- Background Image -->
      <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="/images/timeline/first-research-hero.png" 
          alt="Recherche und Planung - Computer, Dokumente und Notizen"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            {{ $t('first-research-feasibility.hero.badge') }}
          </div>
          <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('first-research-feasibility.hero.title') }}
          </h1>
          <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('first-research-feasibility.hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineFirstResearchFeasibilityIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Aufenthaltsrecht -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineFirstResearchFeasibilityResidenceRightsSection />
        </div>
      </div>

      <!-- Section 3: Arbeit -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineFirstResearchFeasibilityWorkSection />
        </div>
      </div>

      <!-- Section 4: Steuern -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineFirstResearchFeasibilityTaxComparisonSection />
        </div>
      </div>

      <!-- Section 6: Lebenshaltungskosten -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineLivingCostsSection />
        </div>
      </div>

      <!-- Section 5: Glutenfreies Essen -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineFirstResearchFeasibilityGlutenFreeFoodSection />
        </div>
      </div>

      <!-- Section 7: Fazit -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <TimelineFirstResearchFeasibilityConclusionSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Erste Recherchen & Machbarkeit - Nach Spanien auswandern',
  meta: [
    { name: 'description', content: 'Recherche-Phase: Aufenthaltsrecht, Arbeit, Steuern, Lebenshaltungskosten und glutenfreies Essen in Spanien.' }
  ]
})
</script>
