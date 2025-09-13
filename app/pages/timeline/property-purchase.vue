<template>
  <TimelineLayout 
    :previous-step="'/timeline/bureaucracy-prerequisites'"
    :previous-step-name="$t('story.timeline.step7.title')"
    :next-step="'/timeline/gestoria'"
    :next-step-name="$t('gestoria.title')"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Property purchase process in Spain"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            Immobilienkauf
          </div>
          <h1 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            {{ $t('propertyPurchase.title') }}
          </h1>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('propertyPurchase.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <PropertyPurchaseIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Besichtigung -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <PropertyPurchaseViewingSection />
        </div>
      </div>

      <!-- Section 3: Arras Vertrag -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <PropertyPurchaseArrasContractSection />
        </div>
      </div>

      <!-- Section 4: Kaufvertrag -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <PropertyPurchasePurchaseContractSection />
        </div>
      </div>

      <!-- Section 5: Zwischen Kaufvertrag und Notartermin -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <PropertyPurchaseBetweenContractAndNotarySection />
        </div>
      </div>

      <!-- Section 6: Notartermin -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <PropertyPurchaseNotaryAppointmentSection />
        </div>
      </div>

      <!-- Section 7: Worauf achten -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <PropertyPurchaseWhatToLookForSection />
        </div>
      </div>

      <!-- Section 8: Schwierigkeiten -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <PropertyPurchaseDifficultiesSection />
        </div>
      </div>

      <!-- Section 9: Learnings -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <PropertyPurchaseKeyLearningsSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup lang="ts">
// Meta information
useHead({
  title: 'Immobilienkauf - Meine Erfahrungen',
  meta: [
    { name: 'description', content: 'Mein kompletter Weg vom ersten Online-Blick bis zur Schlüsselübergabe beim Notar. Mit allen Learnings und Tipps für den Immobilienkauf in Spanien.' }
  ]
})

// Timeline navigation
definePageMeta({
  layout: 'timeline'
})
</script>
