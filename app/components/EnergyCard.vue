<template>
  <div class="flex flex-col h-full">
    <h3 class="!text-base font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">{{ $t(`first-research-feasibility.sections.livingCosts.energy.${country}Title`) }}</h3>
    
    <!-- Verbrauchsannahmen -->
    <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <h4 class="font-medium text-gray-700 mb-2 text-xs">{{ $t('first-research-feasibility.sections.livingCosts.energy.assumptions') }}</h4>
      <ul class="!text-xs text-gray-600 space-y-1">
        <li v-if="country === 'germany'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.monthlyConsumption') }}</li>
        <li v-if="country === 'germany'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.averagePrice') }}</li>
        <li v-if="country === 'germany'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.baseFee') }}</li>
        <li v-if="country === 'germany'" class="invisible">• Spacer</li>
        
        <li v-if="country === 'spain'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.monthlyConsumption') }}</li>
        <li v-if="country === 'spain'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.dayRate') }}</li>
        <li v-if="country === 'spain'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.nightRate') }}</li>
        <li v-if="country === 'spain'">• {{ $t('first-research-feasibility.sections.livingCosts.energy.potencia') }}</li>
      </ul>
    </div>
    
    <!-- Berechnung -->
    <div class="space-y-2 flex-grow">
      <!-- Deutschland Berechnung -->
      <template v-if="country === 'germany'">
        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div class="!text-xs text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.consumption') }}</div>
          <div class="!text-sm font-bold text-red-600">100,00€</div>
        </div>
        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div class="!text-xs text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.baseFeeLabel') }}</div>
          <div class="!text-sm font-bold text-red-600">15,00€</div>
        </div>
        <div class="h-8"></div>
        <div class="flex items-center justify-between p-2 bg-red-50 rounded-lg border border-red-200">
          <div class="!text-xs font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.totalCosts') }}</div>
          <div class="!text-base font-bold text-red-600">115,00€</div>
        </div>
      </template>
      
      <!-- Spanien Berechnung -->
      <template v-else>
        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div class="!text-xs text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.dayConsumption') }}</div>
          <div class="!text-sm font-bold text-blue-600">52,50€</div>
        </div>
        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div class="!text-xs text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.nightConsumption') }}</div>
          <div class="!text-sm font-bold text-blue-600">15,00€</div>
        </div>
        <div class="flex items-center justify-between p-2 bg-white rounded-lg border border-gray-200">
          <div class="!text-xs text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.potenciaLabel') }}</div>
          <div class="!text-sm font-bold text-blue-600">17,50€</div>
        </div>
        <div class="flex items-center justify-between p-2 bg-green-50 rounded-lg border border-green-200">
          <div class="!text-xs font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.totalCosts') }}</div>
          <div class="!text-base font-bold text-green-600">85,00€</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: String,
    required: true,
    validator: (value) => ['germany', 'spain'].includes(value)
  }
})
</script>
