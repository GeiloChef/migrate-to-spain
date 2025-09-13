<template>
  <div>
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
        <span class="text-indigo-600 font-bold text-xl">✓</span>
      </div>
      <h2 class="!text-3xl font-bold text-gray-900">
        {{ $t('first-research-feasibility.conclusion.title') }}
      </h2>
    </div>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('first-research-feasibility.conclusion.intro') }}
      </p>
      
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('first-research-feasibility.conclusion.topics.residenceRights.title') }}</h3>
            <p class="!text-sm text-gray-700">{{ $t('first-research-feasibility.conclusion.topics.residenceRights.description') }}</p>
          </div>
          <div class="bg-green-50 rounded-xl p-4 border border-green-200">
            <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('first-research-feasibility.conclusion.topics.work.title') }}</h3>
            <p class="!text-sm text-gray-700">{{ $t('first-research-feasibility.conclusion.topics.work.description') }}</p>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
            <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('first-research-feasibility.conclusion.topics.taxes.title') }}</h3>
            <p class="!text-sm text-gray-700">{{ $t('first-research-feasibility.conclusion.topics.taxes.description') }}</p>
          </div>
          <div class="bg-orange-50 rounded-xl p-4 border border-orange-200">
            <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('first-research-feasibility.conclusion.topics.livingCosts.title') }}</h3>
            <p class="!text-sm text-gray-700">{{ $t('first-research-feasibility.conclusion.topics.livingCosts.description') }}</p>
          </div>
        </div>
      </div>
      
      <div class="bg-green-50 rounded-xl p-6 border border-green-200">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">{{ $t('first-research-feasibility.conclusion.bonus.title') }}</h3>
        <p class="text-green-700">
          {{ $t('first-research-feasibility.conclusion.bonus.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props or logic needed for this component
</script>
