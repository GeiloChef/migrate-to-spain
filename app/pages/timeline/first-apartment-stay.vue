<template>
  <TimelineLayout 
    :previous-step="'/timeline/insurance'"
    :previous-step-name="$t('insurance.title')"
    :next-step="'/timeline/final-migration'"
    :next-step-name="$t('story.timeline.step12.title')"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="First stay in my own apartment in Spain"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            Erster Aufenthalt
          </div>
          <h1 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            {{ $t('firstApartmentStay.title') }}
          </h1>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('firstApartmentStay.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <FirstApartmentStayIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Ankunft und erster Tag -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <FirstApartmentStayArrivalSection />
        </div>
      </div>

      <!-- Section 3: Erste Eindrücke -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <FirstApartmentStayFirstImpressionsSection />
        </div>
      </div>

      <!-- Section 4: Der Wasserschaden -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <FirstApartmentStayWaterDamageSection />
        </div>
      </div>

      <!-- Section 5: Die Reparaturen -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <FirstApartmentStayRepairsSection />
        </div>
      </div>

      <!-- Section 6: Learnings -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <FirstApartmentStayKeyLearningsSection />
        </div>
      </div>

      <!-- Section 7: Positive Aspekte -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <FirstApartmentStayPositiveAspectsSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup lang="ts">
// Meta information
useHead({
  title: 'Erster Aufenthalt - Meine Erfahrungen',
  meta: [
    { name: 'description', content: 'Mein erster Aufenthalt in meiner eigenen Wohnung in Spanien - von der Vorfreude bis zum Wasserschaden und den Learnings daraus.' }
  ]
})

// Timeline navigation
definePageMeta({
  layout: 'timeline'
})
</script>
