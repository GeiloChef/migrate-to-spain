<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('regionDecision.cityCountry.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('regionDecision.cityCountry.paragraph1') }}
        </p>
        <p>
          {{ $t('regionDecision.cityCountry.paragraph2') }}
        </p>
      </div>
      <div class="h-[400px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1683585940613-3f77b9147325?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Zwischen Stadt und Land - Spanische Landschaft mit Bergen und Tälern"
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
            <h3 class="!text-lg font-semibold text-gray-900 text-lg">{{ $t('regionDecision.cityCountry.parking.title') }}</h3>
            <p class="!text-sm text-gray-600">{{ $t('regionDecision.cityCountry.parking.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ $t('regionDecision.cityCountry.parking.description') }}</p>
      </div>

      <!-- Immobilienpreise -->
      <div class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:currency-euro" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-lg font-semibold text-gray-900 text-lg">{{ $t('regionDecision.cityCountry.prices.title') }}</h3>
            <p class="!text-sm text-gray-600">{{ $t('regionDecision.cityCountry.prices.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ $t('regionDecision.cityCountry.prices.description') }}</p>
      </div>
    </div>
  </div>
</template>
