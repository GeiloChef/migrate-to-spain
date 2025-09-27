<template>
  <TimelineLayout 
    :previous-step="'/timeline/gestoria'"
    :previous-step-name="$t('gestoria.title')"
    :next-step="'/timeline/first-apartment-stay'"
    :next-step-name="$t('firstApartmentStay.title')"
  >
    <!-- Hero Section -->
    <div class="relative -mt-6 md:mt-0">
      <!-- Background Image -->
      <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Insurance and security concept"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            Versicherung
          </div>
          <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('insurance.title') }}
          </h1>
          <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('insurance.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <TimelineInsuranceIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Vergleich -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <TimelineInsuranceComparisonSection />
        </div>
      </div>

      <!-- Section 3: Abdeckung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <TimelineInsuranceCoverageSection />
        </div>
      </div>

      <!-- Section 4: Übliche Praktiken -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <TimelineInsuranceCommonPracticesSection />
        </div>
      </div>

      <!-- Section 5: Auswahl -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <TimelineInsuranceSelectionSection />
        </div>
      </div>

      <!-- Section 6: Fazit -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <TimelineInsuranceConclusionSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Hausversicherung',
  description: 'Alles über Versicherungen beim Immobilienkauf in Spanien'
})
</script>
