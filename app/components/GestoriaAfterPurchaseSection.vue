<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('gestoria.afterPurchase.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="mb-6">
        {{ $t('gestoria.afterPurchase.intro') }}
      </p>
      
      <div class="grid lg:grid-cols-2 gap-8 items-stretch">
        <!-- Left side: Image -->
        <div class="order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop&crop=center" 
            alt="Office work and documents" 
            class="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        <!-- Right side: Services -->
        <div class="order-1 lg:order-2">
          <div class="space-y-4">
            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  ⚡
                </div>
                <div class="flex-1">
                  <h4 class="!text-base font-semibold text-gray-900 mb-2">
                    Verträge
                  </h4>
                  <p class="text-gray-700">
                    {{ $t('gestoria.afterPurchase.ongoingServices.contracts') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  📋
                </div>
                <div class="flex-1">
                  <h4 class="!text-base font-semibold text-gray-900 mb-2">
                    Steuern
                  </h4>
                  <p class="text-gray-700">
                    {{ $t('gestoria.afterPurchase.ongoingServices.tax') }}
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  📊
                </div>
                <div class="flex-1">
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
  </div>
</template>

