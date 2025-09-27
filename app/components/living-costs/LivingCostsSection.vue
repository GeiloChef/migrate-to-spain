<template>
  <div id="lebenshaltungskosten">
    <!-- Header Section -->
    <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
      <div class="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-lg md:text-2xl">4</span>
      </div>
      <h2 class="!text-2xl md:!text-4xl font-bold text-gray-900">
        {{ $t('first-research-feasibility.sections.livingCosts.title') }}
      </h2>
    </div>
    
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('first-research-feasibility.sections.livingCosts.intro') }}
      </p>
      
      <div class="space-y-6">
        <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-6">{{ $t('first-research-feasibility.sections.livingCosts.comparison') }}</h3>
        
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
