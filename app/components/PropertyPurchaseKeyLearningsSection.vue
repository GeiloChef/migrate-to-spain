<template>
  <div>
    <div class="flex items-center gap-3 mb-8">
      <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('propertyPurchase.keyLearnings.title') }}
      </h3>
    </div>
    
    <div class="mb-8">
      <p class="text-gray-700 text-lg leading-relaxed">
        {{ $t('propertyPurchase.keyLearnings.subtitle') }}
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.gestoria.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.gestoria.content') }}
        </p>
      </div>
      
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.multipleViewings.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.multipleViewings.content') }}
        </p>
      </div>
      
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.community.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.community.content') }}
        </p>
      </div>
      
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.price.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.price.content') }}
        </p>
      </div>
      
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.patience.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.patience.content') }}
        </p>
      </div>
      
      <!-- Bild-Kachel in der Mitte -->
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" 
          alt="Spanische Immobilie" 
          class="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.perfectProperty.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.perfectProperty.content') }}
        </p>
      </div>
      
      <div class="bg-white border border-blue-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="!text-lg font-semibold text-gray-800">
            {{ $t('propertyPurchase.keyLearnings.insurance.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('propertyPurchase.keyLearnings.insurance.content') }}
        </p>
      </div>
      
    </div>
    
    <div class="mt-8">
      <p class="text-gray-700 text-lg leading-relaxed">
        {{ $t('propertyPurchase.keyLearnings.conclusion') }}
      </p>
    </div>
  </div>
</template>
