<template>
  <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-left mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.speaking.title') }}
          </h3>
        </div>

        <!-- Content -->
        <div class="bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph1') }}</p>
            
            <!-- Highlighted Key Message -->
            <div class="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p class="text-xl font-semibold text-orange-800 text-center">
                {{ $t('story.timeline.step3.sections.speaking.paragraph2') }}</p>
            </div>
            
            <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph3') }}</p>
            <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph4') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
