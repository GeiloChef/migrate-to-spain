<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('gestoria.whyGestoria.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('gestoria.whyGestoria.intro') }}
      </p>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Gestoría Card -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
          <h4 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
            {{ $t('gestoria.whyGestoria.gestoria.title') }}
          </h4>
          <p class="text-gray-700">
            {{ $t('gestoria.whyGestoria.gestoria.description') }}
          </p>
        </div>

        <!-- Fachanwalt Card -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
          <h4 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <span class="w-2 h-2 bg-red-500 rounded-full"></span>
            {{ $t('gestoria.whyGestoria.lawyer.title') }}
          </h4>
          <p class="text-gray-700">
            {{ $t('gestoria.whyGestoria.lawyer.description') }}
          </p>
        </div>
      </div>

      <!-- Kosten Vergleich -->
      <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
        <h4 class="!text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span class="text-2xl">💶</span>
          {{ $t('gestoria.whyGestoria.costs.title') }}
        </h4>
        <p class="text-gray-700">
          {{ $t('gestoria.whyGestoria.costs.content') }}
        </p>
      </div>

      <p class="mb-4">
        {{ $t('gestoria.whyGestoria.conclusion') }}
      </p>
    </div>
  </div>
</template>

