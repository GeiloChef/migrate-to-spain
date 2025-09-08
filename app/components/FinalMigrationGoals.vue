<template>
  <div class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
    <div class="flex items-center mb-8">
      <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
        <UIcon name="i-heroicons-flag" class="w-6 h-6 text-white" />
      </div>
      <h2 class="!text-3xl font-bold text-gray-900">
        {{ $t('final-migration.goals.title') }}
      </h2>
    </div>
    
    <div class="prose prose-lg max-w-none">
      <p class="text-gray-700 leading-relaxed">
        {{ $t('final-migration.goals.content') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic if needed
</script>
