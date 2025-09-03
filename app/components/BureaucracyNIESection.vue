<template>
  <div>
    <!-- Bild über der ganzen Breite -->
    <div class="h-64 rounded-xl overflow-hidden shadow-md mb-8">
      <img 
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Spanish police station and official documents"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        1
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
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
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">📍</span>
              {{ $t('bureaucracy.nie.process.onSite.title') }}
            </h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• {{ $t('bureaucracy.nie.process.onSite.step1') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.onSite.step2') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.onSite.step3') }}</li>
            </ul>
          </div>
          
          <!-- Prozess über Firma -->
          <div class="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">🏢</span>
              {{ $t('bureaucracy.nie.process.company.title') }}
            </h4>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>• {{ $t('bureaucracy.nie.process.company.step1') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.company.step2') }}</li>
              <li>• {{ $t('bureaucracy.nie.process.company.step3') }}</li>
            </ul>
          </div>
        </div>
        
        <!-- Tipp-Box ganz unten -->
        <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
          <p class="text-red-800 font-medium">
            {{ $t('bureaucracy.nie.tip') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
