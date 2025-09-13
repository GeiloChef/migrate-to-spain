<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
    <!-- Hero Image mit Text -->
    <div class="relative h-32 overflow-hidden">
      <img 
        src="/images/timeline/housing-cost.png" 
        alt="Mediterranes Haus - Wohnkosten in Spanien"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-3 left-3">
        <h3 class="text-white font-bold text-lg">{{ $t('first-research-feasibility.sections.livingCosts.housing.title') }}</h3>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Mietpreise -->
        <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 class="!text-lg font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">{{ $t('first-research-feasibility.sections.livingCosts.housing.rentalPrices') }}</h3>
          
          <!-- Großstädte Vergleich -->
          <div class="mb-4">
            <h4 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-blue-600">{{ $t('first-research-feasibility.sections.livingCosts.housing.cities') }}</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.germany') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.citiesGermany') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-red-600">18-25€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
                </div>
              </div>
              <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.spain') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.citiesSpain') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-green-600">16-22€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Ländliche Gebiete Vergleich -->
          <div>
            <h4 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-green-600">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralAreas') }}</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.germany') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralGermany') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-red-600">8-15€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
                </div>
              </div>
              <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.spain') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralSpain') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-green-600">4-10€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.monthly') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Kaufpreise -->
        <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 class="!text-lg font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">{{ $t('first-research-feasibility.sections.livingCosts.housing.purchasePrices') }}</h3>
          
          <!-- Großstädte Vergleich -->
          <div class="mb-4">
            <h4 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-blue-600">{{ $t('first-research-feasibility.sections.livingCosts.housing.cities') }}</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.germany') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.citiesGermany') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-red-600">4.500-8.000€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
                </div>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded border border-green-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.spain') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.citiesSpain') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-green-600">3.200-6.500€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Ländliche Gebiete Vergleich -->
          <div>
            <h4 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-green-600">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralAreas') }}</h4>
            <div class="space-y-2">
              <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.germany') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralGermany') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-red-600">1.800-3.500€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
                </div>
              </div>
              <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                <div>
                  <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.housing.spain') }}</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.ruralSpain') }}</div>
                </div>
                <div class="text-right">
                  <div class="!text-lg font-bold text-green-600">800-2.200€/m²</div>
                  <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.housing.apartment') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
