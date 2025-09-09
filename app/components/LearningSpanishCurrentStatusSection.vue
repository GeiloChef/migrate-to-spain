<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div class="px-6 py-16">
      <h3 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('story.timeline.step3.sections.currentStatus.title') }}
      </h3>
      <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
        <p class="!text-lg">{{ $t('story.timeline.step3.sections.currentStatus.paragraph1') }}</p>
        <p class="!text-lg">{{ $t('story.timeline.step3.sections.currentStatus.paragraph2') }}</p>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">💡 Mein Tipp:</h3>
            <p class="text-blue-800 font-medium text-lg">{{ $t('story.timeline.step3.sections.currentStatus.tip') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
