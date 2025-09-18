<template>
  <div class="flex space-x-1.5">
    <!-- German -->
    <button 
      @click="setLanguage('de')" 
      :class="[
        'relative w-10 h-6 md:w-9 md:h-6 rounded-md transition-all duration-300 overflow-hidden group cursor-pointer touch-manipulation',
        currentLocale === 'de' 
          ? 'ring-2 ring-spain-yellow/50 shadow-lg scale-105' 
          : 'hover:scale-105'
      ]"
    >
      <!-- Flag Background -->
      <div 
        class="w-full h-full transition-opacity duration-300"
        :class="currentLocale === 'de' ? 'opacity-100' : 'opacity-50 group-hover:opacity-70'"
      >
        <span class="fi fi-de w-full h-full block"></span>
      </div>
      
      <!-- Language Abbreviation -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span 
          class="!text-xs font-bold text-white drop-shadow-lg transition-opacity duration-300"
          :class="currentLocale === 'de' ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'"
        >
          DE
        </span>
      </div>
      
      <!-- Selection Indicator -->
      <div 
        v-if="currentLocale === 'de'"
        class="absolute top-0.5 right-0.5 w-1 h-1 bg-spain-yellow rounded-full shadow-sm"
      ></div>
    </button>

    <!-- English -->
    <button 
      @click="setLanguage('en')" 
      :class="[
        'relative w-10 h-6 md:w-9 md:h-6 rounded-md transition-all duration-300 overflow-hidden group cursor-pointer touch-manipulation',
        currentLocale === 'en' 
          ? 'ring-2 ring-spain-yellow/50 shadow-lg scale-105' 
          : 'hover:scale-105'
      ]"
    >
      <!-- Flag Background -->
      <div 
        class="w-full h-full transition-opacity duration-300"
        :class="currentLocale === 'en' ? 'opacity-100' : 'opacity-50 group-hover:opacity-70'"
      >
        <span class="fi fi-gb w-full h-full block"></span>
      </div>
      
      <!-- Language Abbreviation -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span 
          class="!text-xs font-bold text-white drop-shadow-lg transition-opacity duration-300"
          :class="currentLocale === 'en' ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'"
        >
          EN
        </span>
      </div>
      
      <!-- Selection Indicator -->
      <div 
        v-if="currentLocale === 'en'"
        class="absolute top-0.5 right-0.5 w-1 h-1 bg-spain-yellow rounded-full shadow-sm"
      ></div>
    </button>

    <!-- Spanish -->
    <button 
      @click="setLanguage('es')" 
      :class="[
        'relative w-10 h-6 md:w-9 md:h-6 rounded-md transition-all duration-300 overflow-hidden group cursor-pointer touch-manipulation',
        currentLocale === 'es' 
          ? 'ring-2 ring-spain-yellow/50 shadow-lg scale-105' 
          : 'hover:scale-105'
      ]"
    >
      <!-- Flag Background -->
      <div 
        class="w-full h-full transition-opacity duration-300"
        :class="currentLocale === 'es' ? 'opacity-100' : 'opacity-50 group-hover:opacity-70'"
      >
        <span class="fi fi-es w-full h-full block"></span>
      </div>
      
      <!-- Language Abbreviation -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span 
          class="!text-xs font-bold text-white drop-shadow-lg transition-opacity duration-300"
          :class="currentLocale === 'es' ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'"
        >
          ES
        </span>
      </div>
      
      <!-- Selection Indicator -->
      <div 
        v-if="currentLocale === 'es'"
        class="absolute top-0.5 right-0.5 w-1 h-1 bg-spain-yellow rounded-full shadow-sm"
      ></div>
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
/* Ensure flags are properly sized and positioned */
.fi {
  width: 100% !important;
  height: 100% !important;
  background-size: cover !important;
  background-position: center !important;
  display: block !important;
}

/* Remove any default margins/padding from flag icons */
.fi::before {
  margin: 0 !important;
  padding: 0 !important;
}

/* Override any default background colors */
.fi {
  background-color: transparent !important;
}

/* Force flag icons to fill the entire container */
.fi {
  font-size: 0 !important;
  line-height: 0 !important;
}

.fi::before {
  font-size: 1.5rem !important;
  line-height: 1 !important;
  width: 100% !important;
  height: 100% !important;
  display: block !important;
}
</style>
