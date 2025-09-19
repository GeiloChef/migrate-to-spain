<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div class="px-6 py-16">
      <h2 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('learning-spanish.sections.currentStatus.title') }}
      </h2>
      <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
        <p class="!text-lg">{{ $t('learning-spanish.sections.currentStatus.paragraph1') }}</p>
        <p class="!text-lg">{{ $t('learning-spanish.sections.currentStatus.paragraph2') }}</p>
      </div>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
          <Icon name="heroicons:light-bulb" class="w-10 h-10 text-white" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">{{ $t('learning-spanish.sections.currentStatus.tipTitle') }}</h3>
          <p class="text-blue-800 font-medium text-lg">{{ $t('learning-spanish.sections.currentStatus.tip') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
