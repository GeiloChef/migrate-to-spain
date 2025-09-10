<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.contacts.title') }}
    </h2>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('discoveringSpain.contacts.paragraph1') }}
      </p>
    </div>
    
    <div class="mt-8 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-8 border border-pink-200">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 class="!text-lg font-semibold text-gray-900 mb-4 text-xl">
            {{ $t('discoveringSpain.contacts.emely.title') }}
          </h3>
          <p class="text-gray-700 mb-4">
            {{ $t('discoveringSpain.contacts.emely.paragraph1') }}
          </p>
          <p class="text-gray-700 mb-4">
            {{ $t('discoveringSpain.contacts.emely.paragraph2') }}
          </p>
          <p class="text-gray-700 font-medium">
            {{ $t('discoveringSpain.contacts.emely.paragraph3') }}
          </p>
        </div>
        <div class="h-[400px] rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/timeline/section-emely.png" 
            alt="Begegnung mit Emely - Schatten von Menschen auf dem Gehweg"
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
          <h3 class="!text-lg font-semibold text-gray-900 text-lg">
            {{ $t('discoveringSpain.contacts.smallMoments.title') }}
          </h3>
        </div>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.contacts.smallMoments.description') }}
        </p>
      </div>
      
      <div class="bg-green-50 rounded-xl p-6 border border-green-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:academic-cap" class="w-5 h-5 text-white" />
          </div>
          <h3 class="!text-lg font-semibold text-gray-900 text-lg">
            {{ $t('discoveringSpain.contacts.languagePractice.title') }}
          </h3>
        </div>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.contacts.languagePractice.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
