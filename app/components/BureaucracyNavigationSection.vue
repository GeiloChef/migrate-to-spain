<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 shadow-lg border border-gray-100">
    <div class="text-center mb-8">
      <h3 class="!text-2xl font-bold text-gray-900 mb-3">
        {{ $t('bureaucracy.navigation.title') }}
      </h3>
      <p class="text-gray-600 max-w-2xl mx-auto">
        {{ $t('bureaucracy.navigation.subtitle') }}
      </p>
    </div>
    
    <div class="grid md:grid-cols-5 gap-4">
      <!-- NIE -->
      <a 
        href="#nie" 
        class="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-300 hover:-translate-y-1"
      >
        <div class="text-center">
          <div class="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-red-600 transition-colors">
            1
          </div>
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {{ $t('bureaucracy.navigation.nie.title') }}
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ $t('bureaucracy.navigation.nie.description') }}
          </p>
        </div>
      </a>
      
      <!-- Bankkonto -->
      <a 
        href="#bankAccount" 
        class="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-300 hover:-translate-y-1"
      >
        <div class="text-center">
          <div class="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-red-600 transition-colors">
            2
          </div>
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {{ $t('bureaucracy.navigation.bankAccount.title') }}
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ $t('bureaucracy.navigation.bankAccount.description') }}
          </p>
        </div>
      </a>
      
      <!-- Finanzierung -->
      <a 
        href="#financing" 
        class="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-300 hover:-translate-y-1"
      >
        <div class="text-center">
          <div class="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-red-600 transition-colors">
            3
          </div>
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {{ $t('bureaucracy.navigation.financing.title') }}
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ $t('bureaucracy.navigation.financing.description') }}
          </p>
        </div>
      </a>
      
      <!-- Gestoría -->
      <a 
        href="#gestoria" 
        class="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-300 hover:-translate-y-1"
      >
        <div class="text-center">
          <div class="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-red-600 transition-colors">
            4
          </div>
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {{ $t('bureaucracy.navigation.gestoria.title') }}
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ $t('bureaucracy.navigation.gestoria.description') }}
          </p>
        </div>
      </a>
      
      <!-- Weitere Formalitäten -->
      <a 
        href="#additionalFormalities" 
        class="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-300 hover:-translate-y-1"
      >
        <div class="text-center">
          <div class="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 group-hover:bg-red-600 transition-colors">
            5
          </div>
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {{ $t('bureaucracy.navigation.additionalFormalities.title') }}
          </h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ $t('bureaucracy.navigation.additionalFormalities.description') }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
