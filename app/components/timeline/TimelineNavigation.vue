<template>
  <!-- Mobile Navigation - At bottom of page -->
  <div class="block md:hidden bg-white border-t border-gray-200 shadow-lg">
    <div class="flex items-center justify-between px-4 py-3">
      <!-- Previous Step -->
      <NuxtLink 
        v-if="previousStep"
        :to="previousStep" 
        class="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors touch-manipulation"
      >
        <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        <span class="text-sm font-medium">{{ $t('story.navigation.previousStep') }}</span>
      </NuxtLink>
      <div v-else class="w-20"></div>
      
      <!-- Next Step -->
      <NuxtLink 
        v-if="nextStep"
        :to="nextStep" 
        class="flex items-center gap-2 bg-spain-red text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors touch-manipulation"
      >
        <span class="text-sm">{{ nextStepName }}</span>
        <Icon name="heroicons:arrow-right" class="w-5 h-5" />
      </NuxtLink>
      <div v-else class="w-20"></div>
    </div>
  </div>

  <!-- Desktop Navigation - Full Buttons -->
  <div class="hidden md:block px-8 py-12 bg-gradient-to-r spain-cream border-t border-spain-yellow/20">
    <div class="flex flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
      <!-- Previous Step Button -->
      <NuxtLink 
        v-if="previousStep"
        :to="previousStep" 
        class="group flex-none inline-flex items-center justify-start gap-3 px-6 py-4 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:bg-white/80 rounded-2xl border-2 border-spain-yellow/60 hover:border-spain-yellow/80 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm"
      >
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-spain-yellow/20 group-hover:bg-spain-yellow/30 transition-colors duration-300">
          <Icon name="heroicons:arrow-left" class="w-5 h-5 text-spain-yellow/80 group-hover:text-spain-yellow transition-colors" />
        </div>
        <div class="text-left">
          <div class="!text-sm text-gray-500 group-hover:text-gray-600 transition-colors">{{ $t('story.navigation.previousStep') }}</div>
          <div class="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{{ previousStepName }}</div>
        </div>
      </NuxtLink>
      
      <!-- Spacer when no previous step -->
      <div v-else class="flex-none"></div>
      
      <!-- Next Step Button -->
      <NuxtLink 
        v-if="nextStep"
        :to="nextStep" 
        class="group flex-none inline-flex items-center justify-end gap-3 px-6 py-4 text-gray-700 hover:text-gray-900 transition-all duration-300 hover:bg-white/80 rounded-2xl border-2 border-red-500/60 hover:border-red-500/80 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-sm"
      >
        <div class="text-right">
          <div class="!text-sm text-gray-500 group-hover:text-gray-600 transition-colors">{{ $t('story.navigation.nextStep') }}</div>
          <div class="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{{ nextStepName }}</div>
        </div>
        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-red-500/20 group-hover:bg-red-500/30 transition-colors duration-300">
          <Icon name="heroicons:arrow-right" class="w-5 h-5 text-red-500/80 group-hover:text-red-500 transition-colors" />
        </div>
      </NuxtLink>
      
      <!-- Spacer when no next step -->
      <div v-else class="flex-none"></div>
    </div>
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
