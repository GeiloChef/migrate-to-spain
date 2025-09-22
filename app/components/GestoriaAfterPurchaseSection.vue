<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('gestoria.afterPurchase.title') }}
    </h2>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="mb-6">
        {{ $t('gestoria.afterPurchase.intro') }}
      </p>
      
      <!-- Mobile: Image first -->
      <div class="block lg:hidden mb-6">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop&crop=center" 
          alt="Office work and documents" 
          class="w-full h-64 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div class="grid lg:grid-cols-2 gap-8 items-stretch">
        <!-- Desktop: Left side: Image -->
        <div class="hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop&crop=center" 
            alt="Office work and documents" 
            class="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        <!-- Services -->
        <div>
          <div class="space-y-4">
            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center opacity-20">
                <span class="text-white font-bold text-xl">⚡</span>
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <h4 class="!text-base font-semibold text-gray-900 mb-2">
                  Verträge
                </h4>
                <p class="text-gray-700">
                  {{ $t('gestoria.afterPurchase.ongoingServices.contracts') }}
                </p>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center opacity-20">
                <span class="text-white font-bold text-xl">📋</span>
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <h4 class="!text-base font-semibold text-gray-900 mb-2">
                  Steuern
                </h4>
                <p class="text-gray-700">
                  {{ $t('gestoria.afterPurchase.ongoingServices.tax') }}
                </p>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
                <span class="text-white font-bold text-xl">📊</span>
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <h4 class="!text-base font-semibold text-gray-900 mb-2">
                  Steuererklärung
                </h4>
                <p class="text-gray-700">
                  {{ $t('gestoria.afterPurchase.ongoingServices.taxReturn') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

