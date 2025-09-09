<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.conclusion.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('discoveringSpain.conclusion.paragraph1') }}
      </p>
      <p>
        {{ $t('discoveringSpain.conclusion.paragraph2') }}
      </p>
    </div>
    
    <div class="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
      <h3 class="!text-lg font-semibold text-gray-900 mb-4 text-xl">
        {{ $t('discoveringSpain.conclusion.nextStep.title') }}
      </h3>
      <p class="text-gray-700 text-lg">
        {{ $t('discoveringSpain.conclusion.nextStep.description') }}
      </p>
    </div>
    
    <div class="mt-8 grid md:grid-cols-3 gap-6">
      <div class="bg-green-50 rounded-xl p-6 border border-green-200">
        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="heroicons:check-circle" class="w-6 h-6 text-green-600" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.conclusion.glutenFree.title') }}
        </h3>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.conclusion.glutenFree.description') }}
        </p>
      </div>
      
      <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="heroicons:check-circle" class="w-6 h-6 text-blue-600" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.conclusion.spanish.title') }}
        </h3>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.conclusion.spanish.description') }}
        </p>
      </div>
      
      <div class="bg-purple-50 rounded-xl p-6 border border-purple-200">
        <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="heroicons:check-circle" class="w-6 h-6 text-purple-600" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.conclusion.people.title') }}
        </h3>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.conclusion.people.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
