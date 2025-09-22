<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
        5
      </div>
      <h3 class="!text-xl md:!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.additionalFormalities.title') }}
      </h3>
    </div>
    
    <div class="space-y-6">
      <p class="text-gray-700 leading-relaxed mb-6">
        {{ $t('bureaucracy.additionalFormalities.intro') }}
      </p>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span class="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">NIE</span>
            {{ $t('bureaucracy.additionalFormalities.nie.title') }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ $t('bureaucracy.additionalFormalities.nie.description') }}
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">CD</span>
            {{ $t('bureaucracy.additionalFormalities.digitalCert.title') }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ $t('bureaucracy.additionalFormalities.digitalCert.description') }}
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">🛡️</span>
            {{ $t('bureaucracy.additionalFormalities.insurance.title') }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ $t('bureaucracy.additionalFormalities.insurance.description') }}
          </p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">📝</span>
            {{ $t('bureaucracy.additionalFormalities.notary.title') }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ $t('bureaucracy.additionalFormalities.notary.description') }}
          </p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">{{ $t('bureaucracy.additionalFormalities.conclusion.title') }}</h3>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('bureaucracy.additionalFormalities.conclusion.text') }}
        </p>
      </div>
    </div>
  </div>
</template>
