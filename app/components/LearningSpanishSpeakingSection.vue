<template>
  <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg mb-6">
            <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6" />
            <span class="text-lg">{{ $t('story.timeline.step3.sections.speaking.title') }}</span>
          </div>
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
