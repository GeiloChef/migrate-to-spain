<template>
  <div class="absolute top-6 right-6 z-20">
    <div class="flex space-x-2">
      <button 
        @click="$i18n.setLocale('en')" 
        :class="[
          'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
          $i18n.locale === 'en' 
            ? 'bg-white text-gray-900 shadow-lg' 
            : 'bg-white/20 text-white hover:bg-white/30'
        ]"
      >
        EN
      </button>
      <button 
        @click="$i18n.setLocale('de')" 
        :class="[
          'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
          $i18n.locale === 'de' 
            ? 'bg-white text-gray-900 shadow-lg' 
            : 'bg-white/20 text-white hover:bg-white/30'
        ]"
      >
        DE
      </button>
      <button 
        @click="$i18n.setLocale('es')" 
        :class="[
          'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
          $i18n.locale === 'es' 
            ? 'bg-white text-gray-900 shadow-lg' 
            : 'bg-white/20 text-white hover:bg-white/30'
        ]"
      >
        ES
      </button>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
