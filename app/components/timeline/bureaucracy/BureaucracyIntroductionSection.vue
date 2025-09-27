<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('bureaucracy.introduction.title') }}
    </h2>
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
    
    <!-- Tip Box - Card Style -->
    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200/50 shadow-lg relative overflow-hidden">
      <!-- Background icon -->
      <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center opacity-20">
        <Icon name="heroicons:exclamation-triangle" class="w-10 h-10 text-white" />
      </div>
      <!-- Content -->
      <div class="relative z-10">
        <p class="text-yellow-800 font-medium text-lg">
          {{ $t('bureaucracy.introduction.tip') }}
        </p>
      </div>
    </div>
  </div>
</template>
