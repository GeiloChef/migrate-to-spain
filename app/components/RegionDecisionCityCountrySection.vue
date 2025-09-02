<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.regionDecision.cityCountry.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('hero.regionDecision.cityCountry.paragraph1') }}
        </p>
        <p>
          {{ $t('hero.regionDecision.cityCountry.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Murcia countryside with mountains and valleys"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Parkplatzproblem -->
      <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:exclamation-triangle" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.cityCountry.parking.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.cityCountry.parking.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ $t('hero.regionDecision.cityCountry.parking.description') }}</p>
      </div>

      <!-- Immobilienpreise -->
      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:currency-euro" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.cityCountry.prices.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.cityCountry.prices.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ $t('hero.regionDecision.cityCountry.prices.description') }}</p>
      </div>
    </div>
  </div>
</template>
