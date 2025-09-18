<template>
  <TimelineLayout 
    :previous-step="'/timeline/property-purchase'"
    :previous-step-name="$t('propertyPurchase.title')"
    :next-step="'/timeline/insurance'"
    :next-step-name="$t('insurance.title')"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Gestoría office in Spain"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            Gestoría
          </div>
          <h1 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            {{ $t('gestoria.title') }}
          </h1>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('gestoria.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <GestoriaIntroductionSection />
        </div>
      </div>

      <!-- Section 2: Warum Gestoría und nicht Anwalt -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <GestoriaWhyGestoriaSection />
        </div>
      </div>

      <!-- Section 3: Was hat die Gestoría gemacht -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <GestoriaWhatTheyDidSection />
        </div>
      </div>

      <!-- Section 4: Nach dem Kauf -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <GestoriaAfterPurchaseSection />
        </div>
      </div>

      <!-- Section 5: Fazit -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <GestoriaConclusionSection />
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup lang="ts">
// Meta information
useHead({
  title: 'Gestoría – Hilfe im Behördendschungel',
  meta: [
    { name: 'description', content: 'Warum ich mich für eine Gestoría entschieden habe und wie sie mir beim Immobilienkauf geholfen hat. Alle Details zu Kosten, Aufgaben und meinen Erfahrungen.' }
  ]
})

// Timeline navigation
definePageMeta({
  layout: 'timeline'
})
</script>
