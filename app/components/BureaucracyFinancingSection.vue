<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        3
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.financing.title') }}
      </h3>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-start mb-6">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('bureaucracy.financing.paragraph1') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.financing.paragraph2') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.financing.paragraph3') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.financing.tip') }}
        </p>
      </div>
      <div class="space-y-4">
        <div class="h-48 rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Financial planning and mortgage documents"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Finanzierung Überschrift -->
        <h4 class="font-semibold text-gray-900 mb-2">{{ $t('bureaucracy.financing.financingTitle') }}</h4>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">{{ $t('bureaucracy.financing.comparison.title') }}</h4>
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-gray-600">{{ $t('bureaucracy.financing.comparison.german') }}</span>
              <span class="text-red-600 font-medium">{{ $t('bureaucracy.financing.comparison.germanResult') }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">{{ $t('bureaucracy.financing.comparison.spanish') }}</span>
              <span class="text-green-600 font-medium">{{ $t('bureaucracy.financing.comparison.spanishResult') }}</span>
            </div>
          </div>
        </div>
        
        <!-- Erwartungen bei spanischen Banken -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h4 class="font-semibold text-gray-900 mb-2">{{ $t('bureaucracy.financing.expectations.title') }}</h4>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• {{ $t('bureaucracy.financing.expectations.item1') }}</li>
            <li>• {{ $t('bureaucracy.financing.expectations.item2') }}</li>
            <li>• {{ $t('bureaucracy.financing.expectations.item3') }}</li>
            <li>• {{ $t('bureaucracy.financing.expectations.item4') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
