<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.comparison.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full mb-6"></div>
        <p class="!text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('insurance.comparison.content') }}
        </p>
      </div>

      <!-- Vergleich Deutschland vs. Spanien -->
      <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-12 relative">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Deutschland -->
          <div class="text-center">
            <div class="mb-6">
              <h3 class="!text-2xl font-bold text-gray-900">
                {{ $t('insurance.comparison.germany.title') }}
              </h3>
            </div>
            <p class="text-gray-700 leading-relaxed text-center">
              {{ $t('insurance.comparison.germany.description') }}
            </p>
          </div>

          <!-- Spanien -->
          <div class="text-center">
            <div class="mb-6">
              <h3 class="!text-2xl font-bold text-gray-900">
                {{ $t('insurance.comparison.spain.title') }}
              </h3>
            </div>
            <p class="text-gray-700 leading-relaxed text-center">
              {{ $t('insurance.comparison.spain.description') }}
            </p>
          </div>
        </div>
        
        <!-- Trennlinie -->
        <div class="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>
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
