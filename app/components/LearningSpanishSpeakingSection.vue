<template>
  <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Image of two hands holding each other -->
        <div class="mb-8">
          <img
            src="https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Two hands holding each other"
            class="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        <!-- Header -->
        <div class="text-left mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.speaking.title') }}
          </h3>
        </div>

        <!-- Content -->
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph1') }}</p>
          
          <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph2') }}</p>
          
          <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph3') }}</p>
          <p class="text-lg">{{ $t('story.timeline.step3.sections.speaking.paragraph4') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
