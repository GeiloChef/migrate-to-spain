<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.culture.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('discoveringSpain.culture.paragraph1') }}
        </p>
        <p>
          {{ $t('discoveringSpain.culture.paragraph2') }}
        </p>
      </div>
      <div class="h-[400px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/images/timeline/la-vida-espanola.png" 
          alt="Spanisches Straßenleben bei Sonnenuntergang - Kultur und Menschen"
          class="w-full h-full object-cover object-left"
        />
      </div>
    </div>
    
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="bg-purple-50 rounded-xl p-6 border border-purple-200 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center opacity-20">
          <Icon name="heroicons:moon" class="w-8 h-8 text-white" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-3">
            {{ $t('discoveringSpain.culture.nightlife.title') }}
          </h3>
          <p class="text-gray-700">
            {{ $t('discoveringSpain.culture.nightlife.description') }}
          </p>
        </div>
      </div>
      
      <div class="bg-pink-50 rounded-xl p-6 border border-pink-200 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center opacity-20">
          <Icon name="heroicons:user-group" class="w-8 h-8 text-white" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-3">
            {{ $t('discoveringSpain.culture.openness.title') }}
          </h3>
          <p class="text-gray-700">
            {{ $t('discoveringSpain.culture.openness.description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
