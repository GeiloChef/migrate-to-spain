<template>
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.conclusion.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p class="!text-xl mb-6">
          {{ $t('insurance.conclusion.content') }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 mt-8">
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
          <UIcon name="i-heroicons-clock" class="w-8 h-8 text-yellow-500 mx-auto mb-4" />
          <h3 class="!text-lg font-semibold text-gray-900 mb-2">Rechtzeitig</h3>
          <p class="text-gray-700 text-sm">Kümmere dich früh um die Versicherung</p>
        </div>
        
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
          <UIcon name="i-heroicons-magnifying-glass" class="w-8 h-8 text-red-500 mx-auto mb-4" />
          <h3 class="!text-lg font-semibold text-gray-900 mb-2">Vergleichen</h3>
          <p class="text-gray-700 text-sm">Nicht das erstbeste Angebot nehmen</p>
        </div>
        
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
          <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-green-500 mx-auto mb-4" />
          <h3 class="!text-lg font-semibold text-gray-900 mb-2">Ruhig schlafen</h3>
          <p class="text-gray-700 text-sm">Vollständige Absicherung gewährleisten</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>
