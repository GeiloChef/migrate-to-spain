<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
    <!-- Hero Image mit Text -->
    <div class="relative h-32 overflow-hidden">
      <img 
        src="/images/timeline/energy-cost.png" 
        alt="Energiekosten und Stromverbrauch in Spanien"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-3 left-3">
        <h3 class="text-white font-bold text-lg">{{ $t('first-research-feasibility.sections.livingCosts.energy.title') }}</h3>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Deutschland Berechnung -->
        <div class="flex flex-col h-full">
          <h3 class="!text-lg font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">{{ $t('first-research-feasibility.sections.livingCosts.energy.germanyTitle') }}</h3>
          
          <!-- Verbrauchsannahmen -->
          <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-700 mb-2 text-sm">{{ $t('first-research-feasibility.sections.livingCosts.energy.assumptions') }}</h4>
            <ul class="!text-xs text-gray-600 space-y-1">
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.monthlyConsumption') }}</li>
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.averagePrice') }}</li>
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.baseFee') }}</li>
              <!-- Spacer to align with Spain's 4 bullet points -->
              <li class="invisible">• Spacer</li>
            </ul>
          </div>
          
          <!-- Berechnung -->
          <div class="space-y-3 flex-grow">
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="!text-sm text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.consumption') }}</div>
              <div class="!text-lg font-bold text-red-600">100,00€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="!text-sm text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.baseFeeLabel') }}</div>
              <div class="!text-lg font-bold text-red-600">15,00€</div>
            </div>
            <!-- Spacer to align with Spain's 4 rows -->
            <div class="h-[60px]"></div>
            <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
              <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.totalCosts') }}</div>
              <div class="!text-xl font-bold text-red-600">115,00€</div>
            </div>
          </div>
        </div>

        <!-- Spanien Berechnung -->
        <div class="flex flex-col h-full">
          <h3 class="!text-lg font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">{{ $t('first-research-feasibility.sections.livingCosts.energy.spainTitle') }}</h3>
          
          <!-- Verbrauchsannahmen -->
          <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h4 class="font-medium text-gray-700 mb-2 text-sm">{{ $t('first-research-feasibility.sections.livingCosts.energy.assumptions') }}</h4>
            <ul class="!text-xs text-gray-600 space-y-1">
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.monthlyConsumption') }}</li>
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.dayRate') }}</li>
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.nightRate') }}</li>
              <li>• {{ $t('first-research-feasibility.sections.livingCosts.energy.potencia') }}</li>
            </ul>
          </div>
          
          <!-- Berechnung -->
          <div class="space-y-3 flex-grow">
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="!text-sm text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.dayConsumption') }}</div>
              <div class="!text-lg font-bold text-blue-600">52,50€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="!text-sm text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.nightConsumption') }}</div>
              <div class="!text-lg font-bold text-blue-600">15,00€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="!text-sm text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.potenciaLabel') }}</div>
              <div class="!text-lg font-bold text-blue-600">17,50€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div class="!text-sm font-medium text-gray-700">{{ $t('first-research-feasibility.sections.livingCosts.energy.totalCosts') }}</div>
              <div class="!text-xl font-bold text-green-600">85,00€</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wichtiger Hinweis -->
      <div class="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
        <div class="flex items-start gap-3">
          <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <p class="!text-sm text-amber-800 font-medium mb-1">{{ $t('first-research-feasibility.sections.livingCosts.energy.importantNote') }}</p>
            <p class="!text-xs text-amber-700">
              {{ $t('first-research-feasibility.sections.livingCosts.energy.disclaimer') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
