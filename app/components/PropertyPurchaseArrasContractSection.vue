<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <!-- Content -->
    <div class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="!text-2xl font-bold text-gray-900">
          {{ $t('propertyPurchase.arrasContract.title') }}
        </h3>
      </div>
      
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('propertyPurchase.arrasContract.content1') }}
        </p>
        
        <p class="mb-4">
          {{ $t('propertyPurchase.arrasContract.content2') }}
        </p>
        
        <p class="mb-4">
          {{ $t('propertyPurchase.arrasContract.content3') }}
        </p>
      </div>
    </div>

    <!-- Warning Card -->
    <div class="relative">
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-start gap-4">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-yellow-800 mb-2">Wichtiger Hinweis</h4>
            <p class="text-yellow-700 leading-relaxed">
              {{ $t('propertyPurchase.arrasContract.warning') }}
            </p>
          </div>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 rounded-full opacity-60"></div>
      <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-300 rounded-full opacity-40"></div>
    </div>
  </div>
</template>
