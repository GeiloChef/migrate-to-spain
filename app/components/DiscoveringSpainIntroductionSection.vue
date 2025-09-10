<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.introduction.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('discoveringSpain.introduction.paragraph1') }}
        </p>
        <p>
          {{ $t('discoveringSpain.introduction.paragraph2') }}
        </p>
      </div>
      <div class="h-[450px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/images/timeline/arrive-in-madrid.png" 
          alt="Flugzeug landet in Madrid - Theorie gegen Realität eintauschen"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    
    <div class="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 shadow-lg">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
        </div>
        <div class="flex-1">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('discoveringSpain.introduction.highlight') }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
