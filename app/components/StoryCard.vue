<template>
  <div class="group">
  <NuxtLink :to="timelineUrl" class="block">
        <div class="group relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-spain-red transition-all duration-300 border border-transparent group-hover:border-spain-red/50 cursor-pointer transform group-hover:scale-105">
      <!-- Background Image Wrapper -->
      <div 
        v-if="backgroundImage"
        class="absolute inset-0 rounded-2xl overflow-hidden"
      >
        <div 
          class="w-full h-full bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-300"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
      </div>
      
      <!-- Step Number Badge -->
      <div class="absolute -top-4 -right-4 w-12 h-12 bg-spain-red rounded-full flex items-center justify-center shadow-lg z-20 transition-transform duration-300 group-hover:scale-110">
        <span class="text-white font-bold text-lg">{{ stepNumber }}</span>
      </div>
      
      <!-- Icon -->
      <div class="relative z-10 w-16 h-16 bg-spain-red/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-spain-red/20 transition-colors duration-300">
      <svg class="w-8 h-8 text-spain-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    
    <!-- Content -->
    <div class="relative z-10">
      <h3 class="!text-xl font-semibold text-spain-navy mb-3 group-hover:text-spain-red transition-colors duration-300">
        {{ title }}
      </h3>
      
      <p class="text-spain-gray-dark mb-4 leading-relaxed">
        {{ description }}
      </p>
      
      <!-- Preview Points -->
      <div class="space-y-2 text-sm text-spain-gray-dark">
        <div class="flex items-center" v-for="(point, index) in previewPoints" :key="index">
          <svg class="w-4 h-4 text-spain-yellow-dark mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>{{ point }}</span>
        </div>
      </div>
      
      <!-- Read More Button -->
      <div class="mt-6 flex items-center text-spain-red font-semibold group-hover:text-spain-red-dark transition-colors duration-300">
        <span class="mr-2">{{ $t('story.card.readMore') }}</span>
        <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
    
    <!-- Hover Effect Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-spain-red/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-5"></div>
  </div>
    </NuxtLink>
    </div>
</template>

<script setup>
// Props for different story steps
const props = defineProps({
  stepNumber: {
    type: Number,
    default: 1
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
  backgroundImage: {
    type: String,
    default: ''
  }
})

// Generate timeline URL based on step number
const timelineUrl = computed(() => {
  const stepUrls = {
    1: '/timeline/the-dream-of-spain',
    2: '/timeline/first-research-feasibility',
    3: '/timeline/learning-spanish',
    4: '/timeline/discovering-spain',
    5: '/timeline/deciding-on-region',
    6: '/timeline/buying-apartment',
    7: '/timeline/bureaucracy-formalities',
    8: '/timeline/real-estate-purchase',
    9: '/timeline/gestoria-help',
    10: '/timeline/security-insurance',
    11: '/timeline/first-stay-apartment',
    12: '/timeline/final-migration'
  }
  return stepUrls[props.stepNumber] || '/timeline'
})
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
