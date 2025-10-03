<template>
  <section>
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-spain-navy mb-4">
          Dein Guide zur Auswanderung
        </h2>
        <p class="!text-xl text-spain-gray-dark max-w-3xl mx-auto mb-8">
          Praktische Anleitungen und Tipps für deine Auswanderung nach Spanien
        </p>
        
        <!-- Search Input -->
        <div class="max-w-md mx-auto">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Suche nach Themen..." 
              class="w-full px-4 py-3 pl-12 pr-4 bg-white border border-spain-yellow/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-spain-yellow/50 focus:border-spain-yellow/50 transition-all duration-300 shadow-sm"
              v-model="searchQuery"
            />
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-spain-gray-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <!-- Clear search button -->
            <button 
              v-if="searchQuery" 
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-spain-gray-dark hover:text-spain-red transition-colors"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <!-- Search results count -->
          <div v-if="searchQuery" class="text-center mt-2">
            <p class="text-sm text-spain-gray-dark">
              {{ filteredArticles.length }} {{ filteredArticles.length === 1 ? 'Ergebnis' : 'Ergebnisse' }} für "{{ searchQuery }}"
            </p>
          </div>
        </div>
      </div>
      
      <!-- Guide Cards -->
      <div v-if="filteredArticles.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-for="article in filteredArticles" :key="article.id">
          <!-- Available Article -->
          <NuxtLink :to="article.route" class="group">
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-spain-yellow/30 hover:border-spain-red/50 group-hover:scale-105">
              <div :class="`w-16 h-16 ${getIconBgClass(article.icon)} rounded-2xl flex items-center justify-center mb-6`">
                <svg :class="`w-8 h-8 ${getIconColorClass(article.icon)}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(article.id)"></path>
                </svg>
              </div>
              <h3 class="!text-xl font-semibold text-spain-navy mb-3">{{ article.title }}</h3>
              <p class="text-spain-gray-dark mb-4">{{ article.description }}</p>
              <div :class="`flex items-center ${getIconColorClass(article.icon)} font-medium group-hover:opacity-80`">
                <span>Mehr erfahren</span>
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </NuxtLink>
        </template>
      </div>

      <!-- No Results -->
      <div v-else-if="searchQuery" class="text-center py-12">
        <div class="max-w-md mx-auto">
          <svg class="w-16 h-16 text-spain-gray-dark mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <h3 class="text-xl font-semibold text-spain-navy mb-2">Keine Ergebnisse gefunden</h3>
          <p class="text-spain-gray-dark mb-4">
            Für "{{ searchQuery }}" konnten keine passenden Artikel gefunden werden.
          </p>
          <button 
            @click="searchQuery = ''"
            class="text-spain-red hover:text-spain-red/80 font-medium transition-colors"
          >
            Suche zurücksetzen
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Use the guide articles composable
const { guideArticles, searchArticles, availableArticles } = useGuideArticles()

// Search functionality
const searchQuery = ref('')

// Filter articles based on search query - only show available articles
const filteredArticles = computed(() => {
  const results = searchArticles(searchQuery.value)
  // Only show available articles and limit to 3 on desktop
  return results.filter(article => article.available).slice(0, 3)
})

// Helper functions for styling
const getIconBgClass = (icon) => {
  const classes = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    orange: 'bg-orange-100',
    purple: 'bg-purple-100'
  }
  return classes[icon] || 'bg-gray-100'
}

const getIconColorClass = (icon) => {
  const classes = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    orange: 'text-orange-600',
    purple: 'text-purple-600'
  }
  return classes[icon] || 'text-gray-600'
}

const getIconPath = (id) => {
  const paths = {
    'nie-number': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    'gestoria': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'apartment-search': 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    'apartment-rental': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'banking': 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
  }
  return paths[id] || 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
}
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
