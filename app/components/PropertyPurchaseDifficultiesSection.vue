<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('propertyPurchase.difficulties.title') }}
    </h3>
    <div class="space-y-4 text-gray-700 leading-relaxed mb-8">
      <p>
        {{ $t('propertyPurchase.difficulties.subtitle') }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-6">
        <div class="bg-red-50 border-l-4 border-red-400 p-6">
          <h4 class="text-lg font-semibold text-red-800 mb-3">
            {{ $t('propertyPurchase.difficulties.contracts.title') }}
          </h4>
          <p class="text-sm text-red-700">
            {{ $t('propertyPurchase.difficulties.contracts.content') }}
          </p>
        </div>
        
        <div class="bg-orange-50 border-l-4 border-orange-400 p-6">
          <h4 class="text-lg font-semibold text-orange-800 mb-3">
            {{ $t('propertyPurchase.difficulties.language.title') }}
          </h4>
          <p class="text-sm text-orange-700">
            {{ $t('propertyPurchase.difficulties.language.content') }}
          </p>
        </div>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <h4 class="text-lg font-semibold text-yellow-800 mb-3">
            {{ $t('propertyPurchase.difficulties.transparency.title') }}
          </h4>
          <p class="text-sm text-yellow-700">
            {{ $t('propertyPurchase.difficulties.transparency.content') }}
          </p>
        </div>
      </div>
      
      <div class="space-y-6">
        <div class="bg-blue-50 border-l-4 border-blue-400 p-6">
          <h4 class="text-lg font-semibold text-blue-800 mb-3">
            {{ $t('propertyPurchase.difficulties.timePressure.title') }}
          </h4>
          <p class="text-sm text-blue-700">
            {{ $t('propertyPurchase.difficulties.timePressure.content') }}
          </p>
        </div>
        
        <div class="bg-purple-50 border-l-4 border-purple-400 p-6">
          <h4 class="text-lg font-semibold text-purple-800 mb-3">
            {{ $t('propertyPurchase.difficulties.financing.title') }}
          </h4>
          <p class="text-sm text-purple-700">
            {{ $t('propertyPurchase.difficulties.financing.content') }}
          </p>
        </div>
        
        <div class="bg-indigo-50 border-l-4 border-indigo-400 p-6">
          <h4 class="text-lg font-semibold text-indigo-800 mb-3">
            {{ $t('propertyPurchase.difficulties.trust.title') }}
          </h4>
          <p class="text-sm text-indigo-700">
            {{ $t('propertyPurchase.difficulties.trust.content') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
