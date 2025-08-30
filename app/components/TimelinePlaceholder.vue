<template>
  <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
    <div class="text-center text-spain-gray-dark">
      <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
      </svg>
      <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
      <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
    </div>
  </div>
</template>

<script setup>
// No props needed for this component
</script>
