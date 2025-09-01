<template>
  <div class="flex space-x-2">
    <!-- German -->
    <button 
      @click="setLanguage('de')" 
      :class="[
        'relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden group',
        currentLocale === 'de' 
          ? 'bg-spain-yellow text-gray-900 shadow-lg scale-105 ring-2 ring-spain-yellow/50' 
          : 'bg-gray-100 text-gray-700 hover:bg-spain-yellow/20 hover:scale-105'
      ]"
    >
      <!-- Flag Background -->
      <div 
        class="absolute inset-0 transition-opacity duration-300"
        :class="currentLocale === 'de' ? 'opacity-40' : 'opacity-25 group-hover:opacity-35'"
      >
        <div class="w-full h-full bg-gradient-to-b from-black via-red-600 to-yellow-400"></div>
      </div>
      
      <!-- Text -->
      <span class="relative z-10">DE</span>
    </button>

    <!-- English -->
    <button 
      @click="setLanguage('en')" 
      :class="[
        'relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden group',
        currentLocale === 'en' 
          ? 'bg-spain-yellow text-gray-900 shadow-lg scale-105 ring-2 ring-spain-yellow/50' 
          : 'bg-gray-100 text-gray-700 hover:bg-spain-yellow/20 hover:scale-105'
      ]"
    >
      <!-- Flag Background -->
      <div 
        class="absolute inset-0 transition-opacity duration-300"
        :class="currentLocale === 'en' ? 'opacity-40' : 'opacity-25 group-hover:opacity-35'"
      >
        <div class="w-full h-full bg-gradient-to-b from-blue-600 via-white to-red-600"></div>
      </div>
      
      <!-- Text -->
      <span class="relative z-10">EN</span>
    </button>

    <!-- Spanish -->
    <button 
      @click="setLanguage('es')" 
      :class="[
        'relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 overflow-hidden group',
        currentLocale === 'es' 
          ? 'bg-spain-yellow text-gray-900 shadow-lg scale-105 ring-2 ring-spain-yellow/50' 
          : 'bg-gray-100 text-gray-700 hover:bg-spain-yellow/20 hover:scale-105'
      ]"
    >
      <!-- Flag Background -->
      <div 
        class="absolute inset-0 transition-opacity duration-300"
        :class="currentLocale === 'es' ? 'opacity-40' : 'opacity-25 group-hover:opacity-35'"
      >
        <div class="w-full h-full bg-gradient-to-b from-red-600 via-yellow-400 to-red-600"></div>
      </div>
      
      <!-- Text -->
      <span class="relative z-10">ES</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentLocale = ref('de')

// Load saved language from localStorage on mount
onMounted(() => {
  const savedLanguage = localStorage.getItem('user-language')
  if (savedLanguage && ['de', 'en', 'es'].includes(savedLanguage)) {
    currentLocale.value = savedLanguage
    // Set the i18n locale
    if (process.client) {
      const { $i18n } = useNuxtApp()
      $i18n.setLocale(savedLanguage)
    }
  }
})

// Set language and save to localStorage
const setLanguage = (language) => {
  currentLocale.value = language
  localStorage.setItem('user-language', language)
  
  // Set the i18n locale
  if (process.client) {
    const { $i18n } = useNuxtApp()
    $i18n.setLocale(language)
  }
}
</script>

<style scoped>
/* Custom flag gradients for better representation */
.bg-gradient-to-b.from-black.via-red-600.to-yellow-400 {
  background: linear-gradient(to bottom, #000000 0%, #dc2626 50%, #fbbf24 100%);
}

.bg-gradient-to-b.from-blue-600.via-white.to-red-600 {
  background: linear-gradient(to bottom, #2563eb 0%, #ffffff 50%, #dc2626 100%);
}

.bg-gradient-to-b.from-red-600.via-yellow-400.to-red-600 {
  background: linear-gradient(to bottom, #dc2626 0%, #fbbf24 50%, #dc2626 100%);
}
</style>
