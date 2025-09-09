<template>
  <div class="flex flex-col items-center flex-shrink-0 pt-4">
    <!-- Timeline Dot -->
    <div class="relative mb-6">
      <div 
        :class="[
          'w-8 h-8 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 relative',
          dotColorClass
        ]"
      >
        <div 
          :class="[
            'absolute inset-0 rounded-full animate-ping opacity-20',
            dotColorClass
          ]"
        ></div>
      </div>
      
      <!-- Connecting dots around the main timeline dot (no animations) -->
      <div class="absolute -top-2 -right-1 w-2 h-2 bg-spain-yellow/60 rounded-full"></div>
      <div class="absolute -bottom-1 -right-2 w-1.5 h-1.5 bg-spain-orange/50 rounded-full"></div>
      <div class="absolute -top-1 -left-2 w-1 h-1 bg-spain-red/40 rounded-full"></div>
      <div class="absolute top-2 -right-3 w-1.5 h-1.5 bg-spain-yellow/45 rounded-full"></div>
      <div class="absolute -bottom-2 left-1 w-1 h-1 bg-spain-orange/35 rounded-full"></div>
      
      <!-- Horizontal connecting dots to next timeline step (extended to actually connect) -->
      <div class="absolute top-1/2 -right-4 w-1 h-1 bg-spain-red/50 rounded-full animate-scale"></div>
      <div class="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-spain-yellow/40 rounded-full animate-scale" style="animation-delay: 0.2s"></div>
      <div class="absolute top-1/2 -right-12 w-1 h-1 bg-spain-orange/45 rounded-full animate-scale" style="animation-delay: 0.4s"></div>
      <div class="absolute top-1/2 -right-16 w-1.5 h-1.5 bg-spain-red/35 rounded-full animate-scale" style="animation-delay: 0.6s"></div>
      <div class="absolute top-1/2 -right-20 w-1 h-1 bg-spain-yellow/50 rounded-full animate-scale" style="animation-delay: 0.8s"></div>
      <div class="absolute top-1/2 -right-24 w-1.5 h-1.5 bg-spain-orange/40 rounded-full animate-scale" style="animation-delay: 1s"></div>
      <div class="absolute top-1/2 -right-28 w-1 h-1 bg-spain-red/45 rounded-full animate-scale" style="animation-delay: 0.1s"></div>
      <div class="absolute top-1/2 -right-32 w-1.5 h-1.5 bg-spain-yellow/35 rounded-full animate-scale" style="animation-delay: 0.3s"></div>
      <div class="absolute top-1/2 -right-36 w-1.5 h-1.5 bg-spain-orange/50 rounded-full animate-scale" style="animation-delay: 0.5s"></div>
      <div class="absolute top-1/2 -right-40 w-1.5 h-1.5 bg-spain-red/40 rounded-full animate-scale" style="animation-delay: 0.7s"></div>
      <div class="absolute top-1/2 -right-44 w-1 h-1 bg-spain-yellow/45 rounded-full animate-scale" style="animation-delay: 0.9s"></div>
      <div class="absolute top-1/2 -right-48 w-1.5 h-1.5 bg-spain-orange/35 rounded-full animate-scale" style="animation-delay: 0.2s"></div>
      
      <!-- Left side connecting dots to previous timeline step (extended to actually connect) -->
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-4 w-1 h-1 bg-spain-orange/50 rounded-full animate-scale"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-8 w-1.5 h-1.5 bg-spain-red/40 rounded-full animate-scale" style="animation-delay: 0.4s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-12 w-1.5 h-1.5 bg-spain-yellow/45 rounded-full animate-scale" style="animation-delay: 0.6s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-16 w-1.5 h-1.5 bg-spain-orange/35 rounded-full animate-scale" style="animation-delay: 0.8s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-20 w-1 h-1 bg-spain-red/50 rounded-full animate-scale" style="animation-delay: 1s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-24 w-1.5 h-1.5 bg-spain-yellow/40 rounded-full animate-scale" style="animation-delay: 0.1s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-28 w-1.5 h-1.5 bg-spain-orange/50 rounded-full animate-scale" style="animation-delay: 0.3s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-32 w-1 h-1 bg-spain-red/45 rounded-full animate-scale" style="animation-delay: 0.5s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-36 w-1.5 h-1.5 bg-spain-yellow/35 rounded-full animate-scale" style="animation-delay: 0.7s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-40 w-1 h-1 bg-spain-orange/40 rounded-full animate-scale" style="animation-delay: 0.9s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-44 w-1.5 h-1.5 bg-spain-red/50 rounded-full animate-scale" style="animation-delay: 0.2s"></div>
      <div v-if="stepNumber > 1" class="absolute top-1/2 -left-48 w-1 h-1 bg-spain-yellow/45 rounded-full animate-scale" style="animation-delay: 0.4s"></div>

    </div>
    
    <!-- Date Badge -->
    <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
      <span class="!text-sm font-semibold text-spain-gray-dark">{{ date }}</span>
    </div>
    
    <!-- Content Slot -->
    <div class="w-96 transform group-hover:scale-105 transition-all duration-500 pt-2">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stepNumber: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

// Color mapping for timeline dots
const dotColorClass = computed(() => {
  const colors = [
    'bg-spain-red',      // Step 1
    'bg-spain-yellow',   // Step 2
    'bg-spain-orange',   // Step 3
    'bg-spain-red',      // Step 4
    'bg-spain-yellow',   // Step 5
    'bg-spain-orange',   // Step 6
    'bg-spain-red',      // Step 7
    'bg-spain-yellow',   // Step 8
    'bg-spain-orange',   // Step 9
    'bg-spain-red',      // Step 10
    'bg-spain-yellow',   // Step 11
    'bg-spain-orange'    // Step 12
  ]
  
  return colors[(props.stepNumber - 1) % colors.length] || 'bg-spain-gray-dark'
})


</script>

<style scoped>
/* Custom animations for timeline dots */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom scale animation for connecting dots */
@keyframes scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

/* Apply animations to timeline elements */
.timeline-step {
  animation: slideInFromBottom 0.6s ease-out forwards;
}

/* Scale animation for connecting dots */
.animate-scale {
  animation: scale 3s ease-in-out infinite;
}

/* Hover effects for timeline dots */
.group:hover .w-8 {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
