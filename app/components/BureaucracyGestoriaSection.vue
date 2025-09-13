<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        4
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.gestoria.title') }}
      </h3>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('bureaucracy.gestoria.paragraph1') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.gestoria.paragraph2') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.gestoria.paragraph3') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.gestoria.paragraph4') }}
        </p>
      </div>
      <div class="space-y-4">
        <div class="h-64 rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/timeline/gestoria-symbolical.png" 
            alt="Gestoría-Symbolik mit Dokumenten und Stempeln - Bürokratie und Verwaltung"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Gestoría Leistungen -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="!text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">🏢</span>
            {{ $t('bureaucracy.gestoria.services.title') }}
          </h3>
          <ul class="!text-sm text-gray-600 space-y-1">
            <li>• {{ $t('bureaucracy.gestoria.services.item1') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.services.item2') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.services.item3') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.services.item4') }}</li>
          </ul>
        </div>
        
        <!-- Rechtsanwalt Leistungen -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="!text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <span class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">⚖️</span>
            {{ $t('bureaucracy.gestoria.lawyerServices.title') }}
          </h3>
          <ul class="!text-sm text-gray-600 space-y-1">
            <li>• {{ $t('bureaucracy.gestoria.lawyerServices.item1') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.lawyerServices.item2') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.lawyerServices.item3') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.lawyerServices.item4') }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Tipp-Box - Full Width -->
    <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
      <p class="text-blue-800 font-medium">
        {{ $t('bureaucracy.gestoria.tip') }}
      </p>
    </div>
  </div>
</template>
