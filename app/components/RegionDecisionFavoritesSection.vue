<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.regionDecision.favorites.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
      <p>
        {{ $t('hero.regionDecision.favorites.intro') }}
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Andalusien -->
      <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:sun" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.favorites.andalusia.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.favorites.andalusia.cities') }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.favorites.andalusia.pros') }}</p>
        <p class="text-gray-600 text-sm">{{ $t('hero.regionDecision.favorites.andalusia.cons') }}</p>
      </div>

      <!-- Valencia -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:building-library" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.favorites.valencia.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.favorites.valencia.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.favorites.valencia.pros') }}</p>
        <p class="text-gray-600 text-sm">{{ $t('hero.regionDecision.favorites.valencia.cons') }}</p>
      </div>

      <!-- Costa Blanca -->
      <div class="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:sparkles" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.favorites.costaBlanca.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.favorites.costaBlanca.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.favorites.costaBlanca.pros') }}</p>
        <p class="text-gray-600 text-sm">{{ $t('hero.regionDecision.favorites.costaBlanca.cons') }}</p>
      </div>

      <!-- Murcia -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:star" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 class="font-semibold text-gray-900 text-lg">{{ $t('hero.regionDecision.favorites.murcia.title') }}</h4>
            <p class="text-sm text-gray-600">{{ $t('hero.regionDecision.favorites.murcia.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700 mb-3">{{ $t('hero.regionDecision.favorites.murcia.pros') }}</p>
        <p class="text-gray-600 text-sm">{{ $t('hero.regionDecision.favorites.murcia.cons') }}</p>
      </div>
    </div>
  </div>
</template>
