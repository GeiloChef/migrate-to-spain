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
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p class="text-blue-800 font-medium">
            {{ $t('bureaucracy.gestoria.tip') }}
          </p>
        </div>
      </div>
      <div class="space-y-4">
        <div class="h-48 rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Professional office and legal consultation"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">{{ $t('bureaucracy.gestoria.services.title') }}</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• {{ $t('bureaucracy.gestoria.services.item1') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.services.item2') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.services.item3') }}</li>
            <li>• {{ $t('bureaucracy.gestoria.services.item4') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
