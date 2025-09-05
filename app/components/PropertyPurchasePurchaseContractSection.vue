<template>
  <div>
    <!-- Header outside grid -->
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('propertyPurchase.purchaseContract.title') }}
      </h3>
    </div>

    <!-- Grid for content and image -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <!-- Content -->
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('propertyPurchase.purchaseContract.content1') }}
        </p>
        
        <p class="mb-4">
          {{ $t('propertyPurchase.purchaseContract.content2') }}
        </p>
        
        <p>
          {{ $t('propertyPurchase.purchaseContract.content3') }}
        </p>
      </div>

      <!-- Image with same height as text -->
      <div class="rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Signing contract documents"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
