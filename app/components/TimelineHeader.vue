<template>
  <div class="border-b border-spain-yellow/30 bg-white/90 backdrop-blur-sm">
    <div class="max-w-4xl mx-auto px-6 py-6">
      <div class="flex items-center gap-4">
        <NuxtLink 
          to="/" 
          class="text-gray-700 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-spain-yellow/20"
        >
          <Icon name="heroicons:arrow-left" class="w-5 h-5" />
        </NuxtLink>
        <div>
          <h1 class="!text-2xl font-bold text-gray-900">
            {{ title }}
          </h1>
          <p class="text-gray-600 text-sm">{{ date }}</p>
        </div>
      </div>
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
  }
})
</script>
