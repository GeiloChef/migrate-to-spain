<template>
  <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
    <h3 class="!text-base font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
      {{ $t(`first-research-feasibility.sections.livingCosts.housing.${type === 'rental' ? 'rentalPrices' : 'purchasePrices'}`) }}
    </h3>
    
    <!-- Großstädte Vergleich -->
    <div class="mb-4">
      <h4 class="font-medium text-gray-700 mb-2 text-xs uppercase tracking-wide" :class="type === 'rental' ? 'text-blue-600' : 'text-blue-600'">
        {{ $t('first-research-feasibility.sections.livingCosts.housing.cities') }}
      </h4>
      <div class="space-y-2">
        <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
          <div>
            <div class="!text-xs font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.germany') }}</div>
            <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.citiesGermany') }}</div>
          </div>
          <div class="text-right">
            <div class="!text-sm font-bold text-red-600" v-if="type === 'rental'">18-25€/m²</div>
            <div class="!text-sm font-bold text-red-600" v-else>4.500-8.000€/m²</div>
            <div class="!text-xs text-gray-500" v-if="type === 'rental'">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
            <div class="!text-xs text-gray-500" v-else>{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
          <div>
            <div class="!text-xs font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.spain') }}</div>
            <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.citiesSpain') }}</div>
          </div>
          <div class="text-right">
            <div class="!text-sm font-bold text-green-600" v-if="type === 'rental'">16-22€/m²</div>
            <div class="!text-sm font-bold text-green-600" v-else>3.200-6.500€/m²</div>
            <div class="!text-xs text-gray-500" v-if="type === 'rental'">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
            <div class="!text-xs text-gray-500" v-else>{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Ländliche Gebiete Vergleich -->
    <div>
      <h4 class="font-medium text-gray-700 mb-2 text-xs uppercase tracking-wide text-green-600">
        {{ $t('first-research-feasibility.sections.livingCosts.housing.ruralAreas') }}
      </h4>
      <div class="space-y-2">
        <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
          <div>
            <div class="!text-xs font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.germany') }}</div>
            <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralGermany') }}</div>
          </div>
          <div class="text-right">
            <div class="!text-sm font-bold text-red-600" v-if="type === 'rental'">8-15€/m²</div>
            <div class="!text-sm font-bold text-red-600" v-else>1.800-3.500€/m²</div>
            <div class="!text-xs text-gray-500" v-if="type === 'rental'">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
            <div class="!text-xs text-gray-500" v-else>{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
          </div>
        </div>
        <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
          <div>
            <div class="!text-xs font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.spain') }}</div>
            <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralSpain') }}</div>
          </div>
          <div class="text-right">
            <div class="!text-sm font-bold text-green-600" v-if="type === 'rental'">4-10€/m²</div>
            <div class="!text-sm font-bold text-green-600" v-else>800-2.200€/m²</div>
            <div class="!text-xs text-gray-500" v-if="type === 'rental'">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
            <div class="!text-xs text-gray-500" v-else>{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['rental', 'purchase'].includes(value)
  }
})
</script>
