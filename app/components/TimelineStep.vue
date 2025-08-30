<template>
  <div class="flex flex-col items-center group flex-shrink-0 pt-4">
    <!-- Timeline Dot -->
    <div 
      :class="[
        'w-8 h-8 rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative',
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
    
    <!-- Date Badge -->
    <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
      <span class="text-sm font-semibold text-spain-gray-dark">{{ date }}</span>
    </div>
    
    <!-- Content Slot -->
    <div class="w-80 transform group-hover:scale-105 transition-all duration-500 pt-2">
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
    'bg-spain-orange'    // Step 9
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

/* Apply animations to timeline elements */
.timeline-step {
  animation: slideInFromBottom 0.6s ease-out forwards;
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
