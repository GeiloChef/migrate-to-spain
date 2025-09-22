<template>
  <TimelineLayout 
    :previous-step="'/timeline/apartment-search'"
    :previous-step-name="$t('apartmentSearch.title')"
    :next-step="'/timeline/property-purchase'"
    :next-step-name="$t('propertyPurchase.title')"
  >
    <!-- Hero Section -->
    <div class="relative -mt-6 md:mt-0">
      <!-- Background Image -->
      <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Spanish government building with official documents and bureaucracy"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            {{ $t('bureaucracy.badge') }}
          </div>
          <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('bureaucracy.title') }}
          </h1>
          <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('bureaucracy.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyIntroductionSection />
        </div>
      </div>

      <!-- Navigation Section -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyNavigationSection />
        </div>
      </div>

      <!-- Section 2: NIE-Nummer -->
      <div id="nie" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyNIESection />
        </div>
      </div>

      <!-- Section 3: Bankkonto -->
      <div id="bankAccount" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyBankAccountSection />
        </div>
      </div>

      <!-- Section 4: Finanzierung -->
      <div id="financing" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyFinancingSection />
        </div>
      </div>

      <!-- Section 5: Gestoría -->
      <div id="gestoria" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyGestoriaSection />
        </div>
      </div>

      <!-- Section 6: Weitere Formalitäten -->
      <div id="additionalFormalities" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-6 md:py-12">
          <BureaucracyAdditionalFormalitiesSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Bürokratie & Formalitäten - Die Grundlagen für den Immobilienkauf',
  meta: [
    { name: 'description', content: 'Alles über NIE-Nummer, spanisches Bankkonto, Finanzierung und weitere wichtige Formalitäten für den Immobilienkauf in Spanien.' }
  ]
})
</script>