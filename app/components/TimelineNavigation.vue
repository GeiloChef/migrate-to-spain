<template>
  <div class="flex justify-between items-center pt-12 border-t border-spain-yellow/30">
    <NuxtLink 
      v-if="previousStep"
      :to="previousStep" 
      class="inline-flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
    >
      <Icon name="heroicons:arrow-left" class="w-4 h-4" />
      {{ $t('timeline.navigation.previousStep') }}
    </NuxtLink>
    <div v-else></div>
    
    <NuxtLink 
      v-if="nextStep"
      :to="nextStep" 
      class="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-sm"
    >
      {{ $t('timeline.navigation.nextStep') }}
      <Icon name="heroicons:arrow-right" class="w-4 h-4" />
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
  }
})
</script>
