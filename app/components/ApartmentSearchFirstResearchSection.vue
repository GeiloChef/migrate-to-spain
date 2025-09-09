<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.firstResearch.title') }}
    </h2>
    
    <p class="text-gray-700 mb-8 text-lg">
      {{ $t('apartmentSearch.firstResearch.intro') }}
    </p>

    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <!-- Online Platforms -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:computer-desktop" class="w-5 h-5 text-white" />
          </div>
          <h3 class="!text-lg font-semibold text-gray-900 text-lg">
            {{ $t('apartmentSearch.firstResearch.onlinePlatforms.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('apartmentSearch.firstResearch.onlinePlatforms.description') }}
        </p>
      </div>

      <!-- Local Agents -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:building-office" class="w-5 h-5 text-white" />
          </div>
          <h3 class="!text-lg font-semibold text-gray-900 text-lg">
            {{ $t('apartmentSearch.firstResearch.localAgents.title') }}
          </h3>
        </div>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('apartmentSearch.firstResearch.localAgents.description') }}
        </p>
      </div>
    </div>

    <!-- Tip Box -->
    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200/50 shadow-lg">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
          <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
        </div>
        <div class="flex-1">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('apartmentSearch.firstResearch.tip') }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
