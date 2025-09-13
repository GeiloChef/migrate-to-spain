<template>
  <div id="steuern">
    <!-- Header Section -->
    <div class="flex items-center gap-4 mb-10">
      <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-2xl">3</span>
      </div>
      <h2 class="!text-4xl font-bold text-gray-900">
        {{ $t('first-research-feasibility.sections.taxes.title') }}
      </h2>
    </div>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('first-research-feasibility.sections.taxes.intro') }}
      </p>
      
      <!-- Gehaltsabrechnung Vergleich -->
      <div class="grid md:grid-cols-2 gap-8">
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
      <div class="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-900 text-lg">{{ $t('first-research-feasibility.sections.taxes.summary.title') }}</h3>
        </div>
        
        <!-- Vergleichszahlen -->
        <div class="grid md:grid-cols-3 gap-4 text-sm mb-4">
          <div class="text-center">
            <div class="!text-lg font-bold text-blue-600">1.580,99€</div>
            <div class="text-gray-600">{{ $t('first-research-feasibility.sections.taxes.summary.germanyNet') }}</div>
          </div>
          <div class="text-center">
            <div class="!text-lg font-bold text-purple-600">1.823,75€</div>
            <div class="text-gray-600">{{ $t('first-research-feasibility.sections.taxes.summary.spainNet') }}</div>
          </div>
          <div class="text-center">
            <div class="!text-lg font-bold text-green-600">+242,76€</div>
            <div class="text-gray-600">{{ $t('first-research-feasibility.sections.taxes.summary.difference') }}</div>
          </div>
        </div>
        
        <!-- Kurze Erklärung -->
        <div class="text-gray-700 text-sm space-y-2">
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
// Keine zusätzliche Logik benötigt
</script>
