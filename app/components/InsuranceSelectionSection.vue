<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.selection.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
      </div>

      <!-- Kriterien -->
      <div class="mb-12">
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 mb-8">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6 text-center">
            {{ $t('insurance.selection.criteria.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div 
              v-for="(item, key) in criteriaItems" 
              :key="key"
              class="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200"
            >
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <UIcon name="i-heroicons-check" class="w-4 h-4 text-white" />
              </div>
              <span class="text-gray-800 font-medium">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sprachbarriere -->
      <div class="mb-12">
        <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 shadow-xl">
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mr-6">
              <UIcon name="i-heroicons-language" class="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 class="!text-2xl font-bold text-red-900 mb-2">
                {{ $t('insurance.selection.language.title') }}
              </h3>
            </div>
          </div>
          <p class="text-xl text-gray-700 leading-relaxed">
            {{ $t('insurance.selection.language.content') }}
          </p>
        </div>
      </div>

      <!-- Meine Wahl -->
      <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 shadow-xl">
        <div class="flex items-center mb-6">
          <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-6">
            <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 class="!text-2xl font-bold text-green-900 mb-2">
              {{ $t('insurance.selection.choice.title') }}
            </h3>
          </div>
        </div>
        
        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-6">
          <p class="text-xl">
            {{ $t('insurance.selection.choice.content') }}
          </p>
        </div>

        <div class="bg-white bg-opacity-60 rounded-xl p-6 border border-green-200">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <UIcon name="i-heroicons-banknotes" class="w-6 h-6 text-green-600 mr-3" />
              <span class="text-lg font-semibold text-gray-900">Jährliche Kosten:</span>
            </div>
            <span class="text-2xl font-bold text-green-600">~300 €</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const criteriaItems = computed(() => ({
  theft: useI18n().t('insurance.selection.criteria.items.theft'),
  total_loss: useI18n().t('insurance.selection.criteria.items.total_loss'),
  water_damage: useI18n().t('insurance.selection.criteria.items.water_damage'),
  legal: useI18n().t('insurance.selection.criteria.items.legal'),
  absence: useI18n().t('insurance.selection.criteria.items.absence')
}))
</script>
