<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('propertyPurchase.viewing.title') }}
      </h3>
    </div>

    <!-- Floating Image -->
    <div class="float-right ml-8 mb-6 w-80 max-w-sm">
      <div class="relative">
        <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Apartment viewing in Spain"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Flowing Text -->
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('propertyPurchase.viewing.content1') }}
      </p>
      
      <p class="mb-4">
        {{ $t('propertyPurchase.viewing.content2') }}
      </p>
      
      <p class="mb-4">
        {{ $t('propertyPurchase.viewing.content3') }}
      </p>
      
      <p class="mb-4">
        {{ $t('propertyPurchase.viewing.content4') }}
      </p>
      
      <!-- Second Floating Image - Bottom Left -->
      <div class="float-left mr-8 mt-4 mb-4 w-72 max-w-sm">
        <div class="relative">
          <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Interior of Spanish apartment"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
            </svg>
          </div>
        </div>
      </div>
      
      <p>
        {{ $t('propertyPurchase.viewing.content5') }}
      </p>
    </div>
  </div>
</template>
