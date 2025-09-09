<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.qualityOfLife.title') }}
    </h3>
    
    <!-- Hero Image -->
    <div class="mb-8 h-64 rounded-xl overflow-hidden shadow-md">
      <img 
        src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Mediterranean lifestyle and quality of life in Spain"
        class="w-full h-full object-cover"
      />
    </div>
    
    <p class="!text-lg mb-8 text-gray-700">
      {{ $t('discoveringSpain.qualityOfLife.intro') }}
    </p>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100 hover:shadow-md transition-all duration-300">
        <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="heroicons:clock" class="w-6 h-6 text-yellow-600" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.qualityOfLife.everyday.title') }}
        </h3>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('discoveringSpain.qualityOfLife.everyday.description') }}
        </p>
      </div>
      
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all duration-300">
        <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="heroicons:sun" class="w-6 h-6 text-blue-600" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.qualityOfLife.climate.title') }}
        </h3>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('discoveringSpain.qualityOfLife.climate.description') }}
        </p>
      </div>
      
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300">
        <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Icon name="heroicons:currency-euro" class="w-6 h-6 text-green-600" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.qualityOfLife.costs.title') }}
        </h3>
        <p class="text-gray-700 leading-relaxed">
          {{ $t('discoveringSpain.qualityOfLife.costs.description') }}
        </p>
      </div>
    </div>
    
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <h3 class="!text-xl font-semibold text-gray-900">
        {{ $t('discoveringSpain.qualityOfLife.conclusionTitle') }}
      </h3>
      <p class="!text-lg">
        {{ $t('discoveringSpain.qualityOfLife.conclusion') }}
      </p>
    </div>
  </div>
</template>
