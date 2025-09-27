<template>
  <TimelineLayout 
    :previous-step="'/timeline/region-decision'"
    :previous-step-name="$t('story.timeline.step5.title')"
    :next-step="'/timeline/bureaucracy-prerequisites'"
    :next-step-name="$t('bureaucracy.title')"
  >
    <!-- Hero Section -->
    <div class="relative -mt-6 md:mt-0">
      <!-- Background Image -->
      <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="/images/timeline/visiting-a-property.png" 
          alt="Wohnungsbesichtigung - Paar mit Makler in leerer Wohnung"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            {{ $t('apartmentSearch.badge') }}
          </div>
          <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('apartmentSearch.title') }}
          </h1>
          <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('apartmentSearch.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <TimelineApartmentSearchIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Erste Recherchen -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <TimelineApartmentSearchFirstResearchSection />
        </div>
      </div>

      <!-- Section 3: Vor Ort in Murcia -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <TimelineApartmentSearchOnSiteSection />
        </div>
      </div>



      <!-- Section 4: Mein Rat -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <TimelineApartmentSearchAdviceSection />
        </div>
      </div>

      <!-- Section 6: Nächste Schritte -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <TimelineApartmentSearchNextStepsSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Der konkrete Plan: Wohnung finden - Von der Entscheidung zur Tat',
  meta: [
    { name: 'description', content: 'Wie ich meine Traumwohnung in Murcia gefunden habe. Von der Online-Recherche bis zur Besichtigung vor Ort.' }
  ]
})
</script>
