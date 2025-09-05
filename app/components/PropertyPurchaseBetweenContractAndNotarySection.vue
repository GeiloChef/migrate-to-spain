<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('propertyPurchase.betweenContractAndNotary.title') }}
      </h3>
    </div>

    <div class="space-y-4 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('propertyPurchase.betweenContractAndNotary.content1') }}
      </p>
      
      <p class="mb-4">
        {{ $t('propertyPurchase.betweenContractAndNotary.content2') }}
      </p>
      
      <p>
        {{ $t('propertyPurchase.betweenContractAndNotary.content3') }}
      </p>
    </div>
  </div>
</template>
