<template>
  <div>
    <div class="flex items-center gap-3 mb-8">
      <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('propertyPurchase.difficulties.title') }}
      </h3>
    </div>
    
    <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border border-red-100">
      <p class="text-red-800 text-lg leading-relaxed">
        {{ $t('propertyPurchase.difficulties.subtitle') }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-6">
        <div class="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-red-800">
              {{ $t('propertyPurchase.difficulties.contracts.title') }}
            </h4>
          </div>
          <p class="text-red-700 leading-relaxed">
            {{ $t('propertyPurchase.difficulties.contracts.content') }}
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-orange-800">
              {{ $t('propertyPurchase.difficulties.language.title') }}
            </h4>
          </div>
          <p class="text-orange-700 leading-relaxed">
            {{ $t('propertyPurchase.difficulties.language.content') }}
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-yellow-800">
              {{ $t('propertyPurchase.difficulties.transparency.title') }}
            </h4>
          </div>
          <p class="text-yellow-700 leading-relaxed">
            {{ $t('propertyPurchase.difficulties.transparency.content') }}
          </p>
        </div>
      </div>
      
      <div class="space-y-6">
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-blue-800">
              {{ $t('propertyPurchase.difficulties.timePressure.title') }}
            </h4>
          </div>
          <p class="text-blue-700 leading-relaxed">
            {{ $t('propertyPurchase.difficulties.timePressure.content') }}
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-purple-800">
              {{ $t('propertyPurchase.difficulties.financing.title') }}
            </h4>
          </div>
          <p class="text-purple-700 leading-relaxed">
            {{ $t('propertyPurchase.difficulties.financing.content') }}
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 class="text-lg font-semibold text-indigo-800">
              {{ $t('propertyPurchase.difficulties.trust.title') }}
            </h4>
          </div>
          <p class="text-indigo-700 leading-relaxed">
            {{ $t('propertyPurchase.difficulties.trust.content') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
