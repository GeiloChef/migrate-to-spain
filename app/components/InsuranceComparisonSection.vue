<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.comparison.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full mb-6"></div>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('insurance.comparison.content') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Deutschland -->
        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-flag" class="w-6 h-6 text-white" />
            </div>
            <h3 class="!text-2xl font-bold text-blue-900">
              {{ $t('insurance.comparison.germany.title') }}
            </h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('insurance.comparison.germany.description') }}
          </p>
        </div>

        <!-- Spanien -->
        <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-flag" class="w-6 h-6 text-white" />
            </div>
            <h3 class="!text-2xl font-bold text-red-900">
              {{ $t('insurance.comparison.spain.title') }}
            </h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('insurance.comparison.spain.description') }}
          </p>
        </div>
      </div>

      <!-- Besonderheiten -->
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-exclamation-triangle" class="w-6 h-6 text-white" />
            </div>
            <h3 class="!text-2xl font-bold text-yellow-900">
              {{ $t('insurance.comparison.special.title') }}
            </h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('insurance.comparison.special.description') }}
          </p>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <UIcon name="i-heroicons-home" class="w-6 h-6 text-white" />
            </div>
            <h3 class="!text-2xl font-bold text-green-900">
              {{ $t('insurance.comparison.property.title') }}
            </h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('insurance.comparison.property.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>
