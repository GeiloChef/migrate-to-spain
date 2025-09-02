<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.discoveringSpain.culture.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('hero.discoveringSpain.culture.paragraph1') }}
        </p>
        <p>
          {{ $t('hero.discoveringSpain.culture.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1557930335-abd211a9cd43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Spanish nightlife and outdoor dining"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="bg-purple-50 rounded-xl p-6 border border-purple-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:moon" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900 text-lg">
            {{ $t('hero.discoveringSpain.culture.nightlife.title') }}
          </h4>
        </div>
        <p class="text-gray-700">
          {{ $t('hero.discoveringSpain.culture.nightlife.description') }}
        </p>
      </div>
      
      <div class="bg-pink-50 rounded-xl p-6 border border-pink-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:heart" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900 text-lg">
            {{ $t('hero.discoveringSpain.culture.openness.title') }}
          </h4>
        </div>
        <p class="text-gray-700">
          {{ $t('hero.discoveringSpain.culture.openness.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
