<template>
  <div class="relative w-full h-full">
    <NuxtLink :to="timelineUrl" class="block w-full h-full">
      <div class="relative w-full h-full bg-white overflow-hidden">
        <!-- Background Image -->
        <div 
          v-if="backgroundImage"
          class="absolute inset-0 w-full h-full"
        >
          <div 
            class="w-full h-full bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${backgroundImage})` }"
          ></div>
          <!-- Dark Overlay for Better Text Readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 h-full flex flex-col justify-between p-6 text-white">
          <!-- Header with Step Number and Date -->
          <div class="flex justify-between items-start mb-6">
            <div class="w-12 h-12 bg-spain-red rounded-full flex items-center justify-center shadow-lg">
              <span class="text-white font-bold text-lg">{{ stepNumber }}</span>
            </div>
            <div class="text-right">
              <div class="text-lg font-semibold">{{ date }}</div>
            </div>
          </div>
          
          <!-- Main Content -->
          <div class="flex-1 flex flex-col justify-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 leading-tight drop-shadow-lg">
              {{ title }}
            </h2>
            <p class="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              {{ description }}
            </p>
            
            <!-- Preview Points -->
            <div class="space-y-3">
              <div 
                v-for="(point, index) in previewPoints" 
                :key="index"
                class="flex items-center gap-3"
              >
                <div class="w-2 h-2 bg-spain-red rounded-full flex-shrink-0"></div>
                <span class="text-white/90 text-base drop-shadow-sm">{{ point }}</span>
              </div>
            </div>
          </div>
          
          <!-- Footer with CTA -->
          <div class="mt-8">
            <div class="inline-flex items-center gap-2 px-6 py-3 bg-spain-red rounded-full text-white font-semibold shadow-lg hover:bg-spain-red/90 transition-colors duration-300">
              <span>Mehr erfahren</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  stepNumber: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  previewPoints: {
    type: Array,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  timelineUrl: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
