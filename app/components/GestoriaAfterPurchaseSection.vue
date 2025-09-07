<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('gestoria.afterPurchase.title') }}
    </h3>
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('gestoria.afterPurchase.intro') }}
      </p>
      
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
        <h4 class="!text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span class="text-2xl">✅</span>
          {{ $t('gestoria.afterPurchase.ongoingServices.title') }}
        </h4>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">•</span>
            {{ $t('gestoria.afterPurchase.ongoingServices.contracts') }}
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">•</span>
            {{ $t('gestoria.afterPurchase.ongoingServices.tax') }}
          </li>
          <li class="flex items-start gap-2">
            <span class="text-green-500 mt-1">•</span>
            {{ $t('gestoria.afterPurchase.ongoingServices.taxReturn') }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

