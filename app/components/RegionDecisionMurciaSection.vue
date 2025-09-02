<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.regionDecision.murcia.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('hero.regionDecision.murcia.intro') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Murcia cityscape with traditional architecture"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Stadt Murcia -->
      <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-purple-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:building-office" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.murcia.city.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.murcia.city.population') }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.murcia.city.location') }}</p>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.murcia.city.atmosphere') }}</p>
        <p class="text-gray-700">{{ $t('hero.regionDecision.murcia.city.modern') }}</p>
      </div>

      <!-- Region Murcia -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:map" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.murcia.region.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.murcia.region.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.murcia.region.landscape') }}</p>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.murcia.region.coast') }}</p>
        <p class="text-gray-700">{{ $t('hero.regionDecision.murcia.region.climate') }}</p>
      </div>
    </div>
  </div>
</template>
