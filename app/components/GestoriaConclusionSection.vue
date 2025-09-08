<template>
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="!text-3xl md:!text-4xl font-bold text-gray-900 mb-6">
        {{ $t('gestoria.conclusion.title') }}
      </h2>
      <p class="!text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        {{ $t('gestoria.conclusion.intro') }}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-8 mb-12">
      <!-- Pros -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-green-200">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h4 class="!text-xl font-bold text-gray-900">
            {{ $t('gestoria.conclusion.pros.title') }}
          </h4>
        </div>
        <ul class="space-y-4">
          <li class="flex items-start">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.pros.item1') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.pros.item2') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.pros.item3') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.pros.item4') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.pros.item5') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.pros.item6') }}</span>
          </li>
        </ul>
      </div>

      <!-- Cons -->
      <div class="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
        <div class="flex items-center mb-6">
          <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h4 class="!text-xl font-bold text-gray-900">
            {{ $t('gestoria.conclusion.cons.title') }}
          </h4>
        </div>
        <ul class="space-y-4">
          <li class="flex items-start">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.cons.item1') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.cons.item2') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.cons.item3') }}</span>
          </li>
          <li class="flex items-start">
            <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span class="text-gray-700">{{ $t('gestoria.conclusion.cons.item4') }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Final Recommendation -->
    <div class="bg-gradient-to-r from-spain-yellow/10 to-spain-red/10 rounded-2xl p-8 border border-spain-yellow/30">
      <div class="text-center">
        <h4 class="!text-2xl font-bold text-gray-900 mb-4">
          {{ $t('gestoria.conclusion.recommendation.title') }}
        </h4>
        <p class="!text-lg text-gray-700 leading-relaxed mb-6">
          {{ $t('gestoria.conclusion.recommendation.content') }}
        </p>
        <div class="inline-flex items-center gap-2 px-6 py-3 bg-spain-yellow/20 text-spain-red font-semibold rounded-full border border-spain-yellow/40">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ $t('gestoria.conclusion.recommendation.verdict') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic if needed
</script>
