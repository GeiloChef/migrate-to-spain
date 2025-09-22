<template>
  <div>
    <!-- Bild über der ganzen Breite -->
    <div class="h-64 rounded-xl overflow-hidden shadow-md mb-8">
      <img 
        src="/images/timeline/nie-number.png" 
        alt="NIE-Dokument mit spanischem Wappen - Offizielle Identifikationsnummer"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex items-center gap-3 mb-6">
      <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
        1
      </div>
      <h3 class="!text-xl md:!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.nie.title') }}
      </h3>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-start">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('bureaucracy.nie.paragraph1') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.nie.paragraph2') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.nie.paragraph3') }}
        </p>
      </div>
      <div class="space-y-4">
        <!-- Prozess-Vergleiche -->
        <div class="space-y-4">
          <!-- Prozess vor Ort -->
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">📍</span>
              {{ $t('bureaucracy.nie.process.onSite.title') }}
            </h3>
            <ul class="!text-sm text-gray-600 space-y-1">
              <li>• {{ $t('bureaucracy.nie.process.onSite.step1') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.onSite.step2') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.onSite.step3') }}</li>
            </ul>
          </div>
          
          <!-- Prozess über Firma -->
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">🏢</span>
              {{ $t('bureaucracy.nie.process.company.title') }}
            </h3>
            <ul class="!text-sm text-gray-600 space-y-1">
              <li>• {{ $t('bureaucracy.nie.process.company.step1') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.company.step2') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.company.step3') }}</li>
            </ul>
          </div>
        </div>
        
        <!-- Tipp-Box ganz unten -->
        <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200/50 shadow-lg relative overflow-hidden">
          <!-- Background icon -->
          <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center opacity-20">
            <Icon name="heroicons:light-bulb" class="w-10 h-10 text-white" />
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
              Mein Tipp:
            </h3>
            <p class="text-red-800 font-medium text-lg">
              {{ $t('bureaucracy.nie.tip') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
