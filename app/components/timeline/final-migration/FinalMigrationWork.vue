<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
    <!-- Background icon -->
    <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
      <UIcon name="i-heroicons-briefcase" class="w-10 h-10 text-white" />
    </div>
    <!-- Content -->
    <div class="relative z-10">
      <h2 class="!text-3xl font-bold text-gray-900 mb-8">
        {{ $t('final-migration.work.title') }}
      </h2>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-700 leading-relaxed">
          {{ $t('final-migration.work.content') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic if needed
</script>
