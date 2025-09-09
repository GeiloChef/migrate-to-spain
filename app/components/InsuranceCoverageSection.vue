<template>
  <section class="py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.coverage.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full mb-6"></div>
        <p class="!text-xl text-gray-700 max-w-3xl mx-auto">
          {{ $t('insurance.coverage.content') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div 
          v-for="(item, key) in coverageItems" 
          :key="key"
          class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
        >
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                 :class="getIconBgClass(key)">
              <UIcon :name="getIconName(key)" class="w-5 h-5 text-white" />
            </div>
            <h3 class="!text-lg font-semibold text-gray-900">
              {{ getItemTitle(key) }}
            </h3>
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">
            {{ item }}
          </p>
        </div>
        
        <!-- Abwesenheit Card -->
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-blue-500">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 text-white" />
            </div>
            <h3 class="!text-lg font-semibold text-gray-900">
              {{ $t('insurance.coverage.absence_card.title') }}
            </h3>
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">
            {{ $t('insurance.coverage.absence_card.content') }}
          </p>
        </div>
        
        <!-- Weitere Absicherungen Card -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-green-500">
              <UIcon name="i-heroicons-plus-circle" class="w-5 h-5 text-white" />
            </div>
            <h3 class="!text-lg font-semibold text-green-900">
              {{ $t('insurance.coverage.additional.title') }}
            </h3>
          </div>
          <p class="text-gray-700 text-sm leading-relaxed">
            {{ $t('insurance.coverage.additional.content') }}
          </p>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup lang="ts">
const coverageItems = computed(() => ({
  natural: useI18n().t('insurance.coverage.items.natural'),
  water: useI18n().t('insurance.coverage.items.water'),
  theft: useI18n().t('insurance.coverage.items.theft'),
  liability: useI18n().t('insurance.coverage.items.liability'),
  glass: useI18n().t('insurance.coverage.items.glass'),
  legal: useI18n().t('insurance.coverage.items.legal'),
  accidents: useI18n().t('insurance.coverage.items.accidents')
}))

const getIconName = (key: string) => {
  const icons: Record<string, string> = {
    natural: 'i-heroicons-bolt',
    water: 'i-heroicons-droplet',
    theft: 'i-heroicons-lock-closed',
    liability: 'i-heroicons-shield-check',
    glass: 'i-heroicons-window',
    legal: 'i-heroicons-scale',
    accidents: 'i-heroicons-exclamation-triangle'
  }
  return icons[key] || 'i-heroicons-question-mark-circle'
}

const getIconBgClass = (key: string) => {
  const classes: Record<string, string> = {
    natural: 'bg-orange-500',
    water: 'bg-blue-500',
    theft: 'bg-red-500',
    liability: 'bg-green-500',
    glass: 'bg-purple-500',
    legal: 'bg-indigo-500',
    accidents: 'bg-yellow-500'
  }
  return classes[key] || 'bg-gray-500'
}

const getItemTitle = (key: string) => {
  const titles: Record<string, string> = {
    natural: 'Elementarschäden',
    water: 'Wasserschäden',
    theft: 'Einbruch',
    liability: 'Haftpflicht',
    glass: 'Glasbruch',
    legal: 'Rechtsschutz',
    accidents: 'Unfälle'
  }
  return titles[key] || 'Sonstiges'
}
</script>
