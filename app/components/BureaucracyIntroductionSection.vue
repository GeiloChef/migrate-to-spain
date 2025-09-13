<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('bureaucracy.introduction.title') }}
    </h3>
    <div class="mb-6">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('bureaucracy.introduction.paragraph1') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.introduction.paragraph2') }}
        </p>
      </div>
    </div>
    
    <!-- Tip Box - Full Width -->
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <p class="text-yellow-800 font-medium">
        {{ $t('bureaucracy.introduction.tip') }}
      </p>
    </div>
  </div>
</template>
