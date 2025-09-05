<template>
  <div>
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

    <!-- Floating Image -->
    <div class="float-right ml-8 mb-6 w-80 max-w-sm">
      <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Legal documents and contracts"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Flowing Text -->
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

    <!-- Warning Card - Inline -->
    <div class="mt-8">
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
    </div>
  </div>
</template>
