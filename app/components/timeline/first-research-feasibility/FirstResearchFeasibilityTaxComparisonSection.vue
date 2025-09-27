<template>
  <div id="steuern">
    <!-- Header Section -->
    <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
      <div class="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-lg md:text-2xl">3</span>
      </div>
      <h2 class="!text-2xl md:!text-4xl font-bold text-gray-900">
        {{ $t('first-research-feasibility.sections.taxes.title') }}
      </h2>
    </div>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('first-research-feasibility.sections.taxes.intro') }}
      </p>
      
      <!-- Mobile Tabs / Desktop Grid -->
      <div class="block md:hidden">
        <!-- Tab Navigation -->
        <div class="flex bg-gray-100 rounded-lg p-1 mb-6">
          <button
            @click="activeTab = 'germany'"
            :class="[
              'flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200',
              activeTab === 'germany'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ $t('first-research-feasibility.sections.taxes.comparison.germany.title') }}
          </button>
          <button
            @click="activeTab = 'spain'"
            :class="[
              'flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all duration-200',
              activeTab === 'spain'
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            {{ $t('first-research-feasibility.sections.taxes.comparison.spain.title') }}
          </button>
        </div>
        
        <!-- Tab Content -->
        <div class="space-y-4">
          <!-- Deutschland Tab -->
          <div v-if="activeTab === 'germany'" class="animate-fadeIn">
            <TimelineFirstResearchFeasibilityTaxCard :country="'germany'" />
          </div>
          
          <!-- Spanien Tab -->
          <div v-if="activeTab === 'spain'" class="animate-fadeIn">
            <TimelineFirstResearchFeasibilityTaxCard :country="'spain'" />
          </div>
        </div>
      </div>
      
      <!-- Desktop Grid -->
      <div class="hidden md:grid md:grid-cols-2 gap-8">
        <!-- Deutschland -->
        <div class="bg-white rounded-xl p-6 border border-blue-200 shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <span class="!text-lg font-semibold text-gray-900">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.title') }}</span>
            <span class="!text-sm text-gray-500">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.year') }}</span>
          </div>
          
          <!-- Bruttogehalt -->
          <div class="mb-4 p-3 bg-blue-50 rounded-lg">
            <div class="!text-2xl font-bold text-blue-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.gross') }}</div>
            <div class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.grossLabel') }}</div>
          </div>
          
          <!-- Abzüge -->
          <div class="space-y-3 mb-4 flex-grow">
            <h4 class="font-medium text-gray-900 text-sm">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.title') }}</h4>
            
            <!-- Lohnsteuer -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.incomeTax') }}</span>
              <span class="font-semibold text-red-600">-375,00€</span>
            </div>
            
            <!-- Kirchensteuer (optional) -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.churchTax') }}</span>
              <span class="font-semibold text-red-600">-33,75€</span>
            </div>
            
            <!-- Krankenversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.healthInsurance') }}</span>
              <span class="font-semibold text-red-600">-182,50€</span>
            </div>
            
            <!-- Pflegeversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.nursingInsurance') }}</span>
              <span class="font-semibold text-red-600">-38,13€</span>
            </div>
            
            <!-- Rentenversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.pensionInsurance') }}</span>
              <span class="font-semibold text-red-600">-240,00€</span>
            </div>
            
            <!-- Arbeitslosenversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.unemploymentInsurance') }}</span>
              <span class="font-semibold text-red-600">-30,00€</span>
            </div>
            
            <!-- Solidaritätszuschlag -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductions.solidarityTax') }}</span>
              <span class="font-semibold text-red-600">-20,63€</span>
            </div>
          </div>
          
          <!-- Gesamte Abzüge -->
          <div class="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <div class="flex justify-between items-center">
              <span class="font-medium text-gray-900">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.totalDeductions') }}</span>
              <span class="!text-xl font-bold text-red-600">-919,01€</span>
            </div>
          </div>
          
          <!-- Nettogehalt -->
          <div class="p-4 bg-green-50 rounded-lg border border-green-200 mt-auto">
            <div class="!text-2xl font-bold text-green-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.netIncome') }}</div>
            <div class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.netLabel') }}</div>
            <div class="!text-xs text-gray-500 mt-1">{{ $t('first-research-feasibility.sections.taxes.comparison.germany.deductionPercentage') }}</div>
          </div>
        </div>
        
        <!-- Spanien -->
        <div class="bg-white rounded-xl p-6 border border-purple-200 shadow-sm flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <span class="!text-lg font-semibold text-gray-900">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.title') }}</span>
            <span class="!text-sm text-gray-500">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.year') }}</span>
          </div>
          
          <!-- Bruttogehalt -->
          <div class="mb-4 p-3 bg-purple-50 rounded-lg">
            <div class="!text-2xl font-bold text-purple-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.gross') }}</div>
            <div class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.grossLabel') }}</div>
          </div>
          
          <!-- Abzüge -->
          <div class="space-y-3 mb-4 flex-grow">
            <h4 class="font-medium text-gray-900 text-sm">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.title') }}</h4>
            
            <!-- IRPF (Einkommensteuer) -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.irpf') }}</span>
              <span class="font-semibold text-red-600">-300,00€</span>
            </div>
            
            <!-- Krankenversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.healthInsurance') }}</span>
              <span class="font-semibold text-red-600">-158,75€</span>
            </div>
            
            <!-- Rentenversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.pensionInsurance') }}</span>
              <span class="font-semibold text-red-600">-158,75€</span>
            </div>
            
            <!-- Arbeitslosenversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.unemploymentInsurance') }}</span>
              <span class="font-semibold text-red-600">-38,75€</span>
            </div>
            
            <!-- Berufsausbildung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.vocationalTraining') }}</span>
              <span class="font-semibold text-red-600">-15,00€</span>
            </div>
            
            <!-- Unfallversicherung -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.accidentInsurance') }}</span>
              <span class="font-semibold text-red-600">-5,00€</span>
            </div>
            
            <!-- Leerzeile für Soli-Zuschlag -->
            <div class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="!text-sm text-gray-400">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductions.solidarityTax') }}</span>
              <span class="!text-sm text-gray-400">-</span>
            </div>
          </div>
          
          <!-- Gesamte Abzüge -->
          <div class="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <div class="flex justify-between items-center">
              <span class="font-medium text-gray-900">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.totalDeductions') }}</span>
              <span class="!text-xl font-bold text-red-600">-676,25€</span>
            </div>
          </div>
          
          <!-- Nettogehalt -->
          <div class="p-4 bg-green-50 rounded-lg border border-green-200 mt-auto">
            <div class="!text-2xl font-bold text-green-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.netIncome') }}</div>
            <div class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.netLabel') }}</div>
            <div class="!text-xs text-gray-500 mt-1">{{ $t('first-research-feasibility.sections.taxes.comparison.spain.deductionPercentage') }}</div>
          </div>
        </div>
      </div>
      
      <!-- Zusammenfassung -->
      <div class="mt-4 md:mt-6 p-4 md:p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
        <div class="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <div class="w-6 h-6 md:w-8 md:h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <svg class="w-3 h-3 md:w-4 md:h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="!text-base md:!text-lg font-semibold text-gray-900">{{ $t('first-research-feasibility.sections.taxes.summary.title') }}</h3>
        </div>
        
        <!-- Vergleichszahlen -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm mb-4">
          <!-- Deutschland -->
          <div class="bg-white rounded-lg p-3 border border-blue-200 text-center">
            <div class="!text-base md:!text-lg font-bold text-blue-600">1.580,99€</div>
            <div class="text-gray-600 text-xs">{{ $t('first-research-feasibility.sections.taxes.summary.germanyNet') }}</div>
          </div>
          
          <!-- Spanien -->
          <div class="bg-white rounded-lg p-3 border border-purple-200 text-center">
            <div class="!text-base md:!text-lg font-bold text-purple-600">1.823,75€</div>
            <div class="text-gray-600 text-xs">{{ $t('first-research-feasibility.sections.taxes.summary.spainNet') }}</div>
          </div>
          
          <!-- Differenz -->
          <div class="bg-white rounded-lg p-3 border border-green-200 text-center">
            <div class="!text-base md:!text-lg font-bold text-green-600">+242,76€</div>
            <div class="text-gray-600 text-xs">{{ $t('first-research-feasibility.sections.taxes.summary.difference') }}</div>
          </div>
        </div>
        
        <!-- Kurze Erklärung -->
        <div class="text-gray-700 text-xs md:text-sm space-y-2">
          <p>
            <strong>{{ $t('first-research-feasibility.sections.taxes.summary.fazit') }}:</strong> {{ $t('first-research-feasibility.sections.taxes.summary.conclusion') }}
          </p>
          <p>
            <strong>{{ $t('first-research-feasibility.sections.taxes.summary.importantNoteLabel') }}:</strong> {{ $t('first-research-feasibility.sections.taxes.summary.importantNote') }}
          </p>
          <p class="!text-xs text-gray-600 italic">
            {{ $t('first-research-feasibility.sections.taxes.summary.disclaimer') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('germany')
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
