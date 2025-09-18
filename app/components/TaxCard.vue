<template>
  <div class="bg-white rounded-xl p-4 border shadow-sm flex flex-col" :class="country === 'germany' ? 'border-blue-200' : 'border-purple-200'">
    <div class="flex items-center justify-between mb-4">
      <span class="!text-base font-semibold text-gray-900">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.title`) }}</span>
      <span class="!text-xs text-gray-500">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.year`) }}</span>
    </div>
    
    <!-- Bruttogehalt -->
    <div class="mb-4 p-3 rounded-lg" :class="country === 'germany' ? 'bg-blue-50' : 'bg-purple-50'">
      <div class="!text-xl font-bold" :class="country === 'germany' ? 'text-blue-600' : 'text-purple-600'">
        {{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.gross`) }}
      </div>
      <div class="!text-xs text-gray-600">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.grossLabel`) }}</div>
    </div>
    
    <!-- Abzüge -->
    <div class="space-y-2 mb-4 flex-grow">
      <h4 class="font-medium text-gray-900 text-xs">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.deductions.title`) }}</h4>
      
      <!-- Deutschland Abzüge -->
      <template v-if="country === 'germany'">
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.incomeTax') }}</span>
          <span class="font-semibold text-red-600 text-xs">-375,00€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.churchTax') }}</span>
          <span class="font-semibold text-red-600 text-xs">-33,75€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.healthInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-182,50€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.nursingInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-38,13€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.pensionInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-240,00€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.unemploymentInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-30,00€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.solidarityTax') }}</span>
          <span class="font-semibold text-red-600 text-xs">-20,63€</span>
        </div>
      </template>
      
      <!-- Spanien Abzüge -->
      <template v-else>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.irpf') }}</span>
          <span class="font-semibold text-red-600 text-xs">-300,00€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.healthInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-158,75€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.pensionInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-158,75€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.unemploymentInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-38,75€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.vocationalTraining') }}</span>
          <span class="font-semibold text-red-600 text-xs">-15,00€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.accidentInsurance') }}</span>
          <span class="font-semibold text-red-600 text-xs">-5,00€</span>
        </div>
        <div class="flex justify-between items-center py-1.5 border-b border-gray-100">
          <span class="!text-xs text-gray-400">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.solidarityTax') }}</span>
          <span class="!text-xs text-gray-400">-</span>
        </div>
      </template>
    </div>
    
    <!-- Gesamte Abzüge -->
    <div class="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
      <div class="flex justify-between items-center">
        <span class="font-medium text-gray-900 text-xs">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.totalDeductions`) }}</span>
        <span class="!text-lg font-bold text-red-600" v-if="country === 'germany'">-919,01€</span>
        <span class="!text-lg font-bold text-red-600" v-else>-676,25€</span>
      </div>
    </div>
    
    <!-- Nettogehalt -->
    <div class="p-3 bg-green-50 rounded-lg border border-green-200 mt-auto">
      <div class="!text-xl font-bold text-green-600" v-if="country === 'germany'">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.netIncome') }}</div>
      <div class="!text-xl font-bold text-green-600" v-else>{{ $t('first-research-feasibility.sections.taxes.comparison.spain.netIncome') }}</div>
      <div class="!text-xs text-gray-600">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.netLabel`) }}</div>
      <div class="!text-xs text-gray-500 mt-1">{{ $t(`first-research-feasibility.sections.taxes.comparison.${country}.deductionPercentage`) }}</div>
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
