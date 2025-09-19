<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.qualityOfLife.title') }}
    </h2>
    
    <!-- Hero Image -->
    <div class="mb-8 h-[400px] rounded-xl overflow-hidden shadow-md">
      <img 
        src="/images/timeline/plaza-en-espana.png" 
        alt="Spanischer Stadtplatz bei Sonnenuntergang - Lebensqualität in Spanien"
        class="w-full h-full object-cover"
      />
    </div>
    
    <p class="!text-lg mb-8 text-gray-700">
      {{ $t('discoveringSpain.qualityOfLife.intro') }}
    </p>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100 hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-30">
          <Icon name="heroicons:clock" class="w-8 h-8 text-yellow-600" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('discoveringSpain.qualityOfLife.everyday.title') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('discoveringSpain.qualityOfLife.everyday.description') }}
          </p>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-30">
          <Icon name="heroicons:sun" class="w-8 h-8 text-blue-600" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('discoveringSpain.qualityOfLife.climate.title') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('discoveringSpain.qualityOfLife.climate.description') }}
          </p>
        </div>
      </div>
      
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all duration-300 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-30">
          <Icon name="heroicons:currency-euro" class="w-8 h-8 text-green-600" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('discoveringSpain.qualityOfLife.costs.title') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('discoveringSpain.qualityOfLife.costs.description') }}
          </p>
        </div>
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
