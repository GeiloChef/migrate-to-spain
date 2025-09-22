<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
        4
      </div>
      <h3 class="!text-xl md:!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.gestoria.title') }}
      </h3>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <!-- Mobile: Image first, Desktop: Text first -->
      <div class="order-2 md:order-1 space-y-4 text-gray-700 leading-relaxed">
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
        
        <!-- Mobile: Boxes under text -->
        <div class="space-y-4 block md:hidden mb-8">
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
      
      <div class="order-1 md:order-2 space-y-4">
        <!-- Mobile: Image first, Desktop: Image first -->
        <div class="h-64 rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/timeline/gestoria-symbolical.png" 
            alt="Gestoría-Symbolik mit Dokumenten und Stempeln - Bürokratie und Verwaltung"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Desktop: Boxes after image -->
        <div class="space-y-4 hidden md:block">
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
    </div>
    
    <!-- Tipp-Box - Card Style -->
    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 shadow-lg relative overflow-hidden">
      <!-- Background icon -->
      <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
        <Icon name="heroicons:light-bulb" class="w-10 h-10 text-white" />
      </div>
      <!-- Content -->
      <div class="relative z-10">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          Mein Tipp:
        </h3>
        <p class="text-blue-800 font-medium text-lg">
          {{ $t('bureaucracy.gestoria.tip') }}
        </p>
      </div>
    </div>
  </div>
</template>
