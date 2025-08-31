<template>
  <div class="mb-16" id="lebenshaltungskosten">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
        <span class="text-orange-600 font-bold text-xl">4</span>
      </div>
      <h3 class="!text-3xl font-bold text-gray-900">
        Lebenshaltungskosten
      </h3>
    </div>
    
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        Jeder, der in Spanien Urlaub macht, sagt erstmal: „Wow, hier ist ja alles so günstig!" Aber das ist nur die halbe Wahrheit. Ja, eine Tapa für 2,50 € und ein Café con leche für 1,20 € wirken auf uns Deutsche spottbillig. Aber das Gefühl entsteht vor allem, weil wir deutsche Gehälter im Kopf haben.
      </p>
      
      <div class="space-y-6">
        <h4 class="font-semibold text-gray-900 text-lg mb-6">Vergleich Lebenshaltungskosten (2025):</h4>
        
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
