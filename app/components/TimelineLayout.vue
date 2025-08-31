<template>
  <div class="min-h-screen bg-spain-cream pb-12">
    <!-- Header Section -->
    <TimelineHeader class="mb-12" :title="title" :date="date" />

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-6 py-12 rounded-b-3xl shadow-2xl">
      <slot />
      
      <!-- Navigation -->
      <TimelineNavigation 
        :previous-step="previousStep" 
        :next-step="nextStep" 
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
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
