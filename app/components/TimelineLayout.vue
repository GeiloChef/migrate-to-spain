<template>
  <div class="min-h-screen bg-spain-cream pb-0 md:pb-12">
    <!-- Header Section -->
    <TimelineHeader class="mb-6 md:mb-12" />

    <!-- Table of Contents -->
    <TableOfContents />

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto rounded-b-3xl shadow-2xl">
      <slot />
      
      <!-- Navigation -->
      <TimelineNavigation 
        :previous-step="previousStep" 
        :next-step="nextStep"
        :previous-step-name="previousStepName"
        :next-step-name="nextStepName"
      />
    </div>

    <!-- Back to Top Button -->
    <BackToTop />
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
