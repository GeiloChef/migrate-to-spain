<template>
  <div id="lebenshaltungskosten">
    <!-- Header Section -->
    <div class="flex items-center gap-4 mb-10">
      <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-2xl">4</span>
      </div>
      <h3 class="!text-4xl font-bold text-gray-900">
        {{ $t('story.timeline.step2.sections.livingCosts.title') }}
      </h3>
    </div>
    
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('story.timeline.step2.sections.livingCosts.intro') }}
      </p>
      
      <div class="space-y-6">
        <h4 class="font-semibold text-gray-900 text-lg mb-6">{{ $t('story.timeline.step2.sections.livingCosts.comparison') }}</h4>
        
        <div class="space-y-6">
          <!-- Wohnkosten -->
          <LivingCostsHousing />
          
          <!-- Lebensmittel -->
          <LivingCostsFood />
          
          <!-- Energie -->
          <LivingCostsEnergy />
          
          <!-- Europäischer Vergleich -->
          <LivingCostsEuropeanComparison />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import der einzelnen Komponenten
import LivingCostsHousing from './LivingCostsHousing.vue'
import LivingCostsFood from './LivingCostsFood.vue'
import LivingCostsEnergy from './LivingCostsEnergy.vue'
import LivingCostsEuropeanComparison from './LivingCostsEuropeanComparison.vue'
</script>
