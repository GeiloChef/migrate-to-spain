<template>
  <div class="flex justify-between items-center pt-12 border-t border-spain-yellow/30">
    <NuxtLink 
      v-if="previousStep"
      :to="previousStep" 
      class="inline-flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors group"
    >
      <Icon name="heroicons:arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
      <span class="hidden sm:inline">{{ $t('story.navigation.previousStep') }}:</span>
      <span class="font-semibold">{{ previousStepName }}</span>
    </NuxtLink>
    <div v-else></div>
    
    <NuxtLink 
      v-if="nextStep"
      :to="nextStep" 
      class="inline-flex items-center gap-2 px-6 py-3 bg-spain-yellow text-gray-900 rounded-lg hover:bg-spain-yellow/90 transition-colors shadow-sm font-semibold group"
    >
      <span class="font-semibold">{{ nextStepName }}</span>
      <span class="hidden sm:inline">: {{ $t('story.navigation.nextStep') }}</span>
      <Icon name="heroicons:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  previousStep: {
    type: String,
    required: false
  },
  nextStep: {
    type: String,
    required: false
  },
  previousStepName: {
    type: String,
    required: false
  },
  nextStepName: {
    type: String,
    required: false
  }
})
</script>
