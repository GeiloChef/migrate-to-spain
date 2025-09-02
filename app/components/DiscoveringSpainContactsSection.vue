<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.discoveringSpain.contacts.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('hero.discoveringSpain.contacts.paragraph1') }}
      </p>
    </div>
    
    <div class="mt-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 border border-pink-200">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 class="font-semibold text-gray-900 mb-4 text-xl">
            {{ $t('hero.discoveringSpain.contacts.emely.title') }}
          </h4>
          <p class="text-gray-700 mb-4">
            {{ $t('hero.discoveringSpain.contacts.emely.paragraph1') }}
          </p>
          <p class="text-gray-700 mb-4">
            {{ $t('hero.discoveringSpain.contacts.emely.paragraph2') }}
          </p>
          <p class="text-gray-700 font-medium">
            {{ $t('hero.discoveringSpain.contacts.emely.paragraph3') }}
          </p>
        </div>
        <div class="h-64 rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Two people enjoying coffee together in a café"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:sparkles" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900 text-lg">
            {{ $t('hero.discoveringSpain.contacts.smallMoments.title') }}
          </h4>
        </div>
        <p class="text-gray-700">
          {{ $t('hero.discoveringSpain.contacts.smallMoments.description') }}
        </p>
      </div>
      
      <div class="bg-green-50 rounded-xl p-6 border border-green-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:academic-cap" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900 text-lg">
            {{ $t('hero.discoveringSpain.contacts.languagePractice.title') }}
          </h4>
        </div>
        <p class="text-gray-700">
          {{ $t('hero.discoveringSpain.contacts.languagePractice.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
