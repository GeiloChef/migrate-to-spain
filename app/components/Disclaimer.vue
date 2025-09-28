<template>
  <div class="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-300 p-6 shadow-lg relative overflow-hidden">
    <!-- Background icon -->
    <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center opacity-20">
      <Icon name="heroicons:exclamation-triangle" class="w-8 h-8 text-white" />
    </div>
    <!-- Content -->
    <div class="relative z-10">
      <p class="text-amber-800 font-medium leading-relaxed">
        {{ $t('disclaimer.text') }}
      </p>
    </div>
  </div>
</template>

<script setup>
// No additional logic needed - just displays the disclaimer text
</script>
