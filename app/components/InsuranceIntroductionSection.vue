<template>
  <section class="py-6 md:py-12">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.introduction.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
      </div>
      
      <!-- Mobile: Simple text without card -->
      <div class="block md:hidden">
        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p class="!text-xl mb-6 text-gray-800">
            {{ $t('insurance.introduction.content') }}
          </p>
        </div>
        
        <div class="mt-8 flex flex-wrap gap-4 justify-center">
          <div class="flex items-center bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-yellow-600 mr-2" />
            <span class="text-yellow-800 font-medium">Sicherheit</span>
          </div>
          <div class="flex items-center bg-red-50 px-4 py-2 rounded-full border border-red-200">
            <UIcon name="i-heroicons-banknotes" class="w-5 h-5 text-red-600 mr-2" />
            <span class="text-red-800 font-medium">Finanzierung</span>
          </div>
          <div class="flex items-center bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 text-blue-600 mr-2" />
            <span class="text-blue-800 font-medium">Freiheit</span>
          </div>
        </div>
      </div>

      <!-- Desktop: Card version -->
      <div class="hidden md:block bg-white bg-opacity-80 rounded-2xl shadow-xl p-8 border border-gray-200 backdrop-blur-sm">
        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p class="!text-xl mb-6 text-gray-800">
            {{ $t('insurance.introduction.content') }}
          </p>
        </div>
        
        <div class="mt-8 flex flex-wrap gap-4 justify-center">
          <div class="flex items-center bg-yellow-50 px-4 py-2 rounded-full border border-yellow-200">
            <UIcon name="i-heroicons-shield-check" class="w-5 h-5 text-yellow-600 mr-2" />
            <span class="text-yellow-800 font-medium">Sicherheit</span>
          </div>
          <div class="flex items-center bg-red-50 px-4 py-2 rounded-full border border-red-200">
            <UIcon name="i-heroicons-banknotes" class="w-5 h-5 text-red-600 mr-2" />
            <span class="text-red-800 font-medium">Finanzierung</span>
          </div>
          <div class="flex items-center bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            <UIcon name="i-heroicons-cog-6-tooth" class="w-5 h-5 text-blue-600 mr-2" />
            <span class="text-blue-800 font-medium">Freiheit</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>
