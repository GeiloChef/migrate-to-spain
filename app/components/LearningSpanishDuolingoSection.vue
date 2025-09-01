<template>
  <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="px-6 py-16">
      <h3 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('story.timeline.step3.sections.duolingo.title') }}
      </h3>
      <div class="space-y-6 text-gray-700 leading-relaxed">
        <p class="text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph1') }}</p>
        <p class="text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph2') }}</p>
        <p class="text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph3') }}</p>
      </div>

      <div class="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-r-lg">
        <p class="font-medium text-gray-900 mb-2 text-lg">💡 {{ $t('story.timeline.step3.sections.duolingo.title') }}</p>
        <p class="text-orange-700 font-medium text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph1') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
