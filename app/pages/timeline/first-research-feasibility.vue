<template>
  <TimelineLayout 
    :title="$t('story.timeline.step2.title')"
    :date="$t('story.timeline.step2.date')"
    :previous-step="'/timeline/the-dream-of-spain'"
    :next-step="'/timeline/discovering-spain'"
  >
    <!-- Hero Section -->
    <div class="relative -mx-6 -mt-12 mb-16">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="/images/timeline/research-planning.svg" 
          alt="Research and planning - documents and laptop"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            Recherche-Phase
          </div>
          <h2 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Erste Recherchen & Machbarkeit
          </h2>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            Nachdem ich den grundlegenden Gedanken gefasst hatte – Spanien könnte wirklich mein neues Zuhause werden – war es an der Zeit, einen echten Plan zu schmieden. Der Traum allein reicht eben nicht.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <IntroductionSection />

      <!-- Section 2: Aufenthaltsrecht -->
      <ResidenceRightsSection />

      <!-- Section 3: Arbeit -->
      <WorkSection />

      <!-- Section 4: Steuern -->
      <TaxComparisonSection />


      <!-- Section 6: Lebenshaltungskosten -->
      <LivingCostsSection />

      <!-- Section 5: Glutenfreies Essen -->
      <GlutenFreeFoodSection />



      <!-- Section 7: Fazit -->
      <ConclusionSection />
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
