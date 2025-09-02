<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.discoveringSpain.introduction.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('hero.discoveringSpain.introduction.paragraph1') }}
        </p>
        <p>
          {{ $t('hero.discoveringSpain.introduction.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Mediterranean lifestyle and culture"
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
          <h4 class="font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('hero.discoveringSpain.introduction.highlight') }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
