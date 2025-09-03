<template>
  <TimelineLayout 
    :previous-step="'/timeline/region-decision'"
    :previous-step-name="$t('story.timeline.step5.title')"
    :next-step="'/timeline/bureaucracy-prerequisites'"
    :next-step-name="$t('story.timeline.step7.title')"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Modern apartment building in Spain with Mediterranean architecture"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            {{ $t('apartmentSearch.badge') }}
          </div>
          <h2 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            {{ $t('apartmentSearch.title') }}
          </h2>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('apartmentSearch.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <ApartmentSearchIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Erste Recherchen -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <ApartmentSearchFirstResearchSection />
        </div>
      </div>

      <!-- Section 3: Vor Ort in Murcia -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <ApartmentSearchOnSiteSection />
        </div>
      </div>



      <!-- Section 4: Mein Rat -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <ApartmentSearchAdviceSection />
        </div>
      </div>

      <!-- Section 6: Nächste Schritte -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <ApartmentSearchNextStepsSection />
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
