<template>
  <div class="h-full flex flex-col relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Spanische Stadt mit mediterraner Architektur"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay for Better Text Readability -->
      <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col">
      <!-- Header -->
      <div class="text-center px-6 pt-8 pb-6">
        <h2 class="!text-4xl font-bold text-white mb-3 drop-shadow-lg">
          Dein Guide zur Auswanderung
        </h2>
        <p class="!text-lg text-white/90 max-w-sm mx-auto leading-relaxed drop-shadow-md">
          Praktische Anleitungen und Tipps für deine Auswanderung nach Spanien
        </p>
      </div>

    <!-- Search Input -->
    <div class="px-6 mb-6">
      <div class="relative">
        <input 
          type="text" 
          placeholder="Suche nach Themen..." 
          class="w-full px-4 py-3 pl-12 pr-4 bg-white/95 border border-spain-yellow/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-spain-yellow/50 focus:border-spain-yellow/50 transition-all duration-300 shadow-sm text-base text-gray-900 placeholder-gray-500"
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
        <p class="text-sm text-white/80">
          {{ filteredArticles.length }} {{ filteredArticles.length === 1 ? 'Ergebnis' : 'Ergebnisse' }} für "{{ searchQuery }}"
        </p>
      </div>
    </div>

    <!-- Guide Cards - Carousel -->
    <div class="flex-1 px-6 pb-6">
      <div v-if="filteredArticles.length > 0">
        <UCarousel
          :items="filteredArticles"
          loop
          dots
          :ui="{ 
            dot: 'bg-spain-yellow data-[state=active]:bg-spain-red',
          }"
          class="w-full h-full"
        >
          <template #default="{ item }">
            <NuxtLink :to="item.route" class="block h-full">
              <div :class="`bg-gradient-to-br ${getCardBgClass(item.icon)} rounded-xl p-8 border ${getCardBorderClass(item.icon)} relative overflow-hidden h-full`">
                <!-- Background icon -->
                <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center opacity-50" :class="getIconGradientClass(item.icon)">
                  <svg :class="`w-10 h-10 ${getIconColorClass(item.icon)} font-bold`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconPath(item.id)"></path>
                  </svg>
                </div>
                <!-- Content -->
                <div class="relative z-10 h-full flex flex-col">
                  <div>
                    <h3 class="!text-lg font-semibold text-gray-900 mb-4 text-xl">
                      {{ item.title }}
                    </h3>
                    <p class="text-gray-700 mb-4">
                      {{ item.description }}
                    </p>
                  </div>
                  
                  <!-- Meta Info -->
                  <div class="space-y-3 mb-6">
                    <div class="flex items-center gap-2 text-base text-gray-600">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="bg-gray-100 px-3 py-2 rounded-full">{{ item.translatedEstimatedTime }}</span>
                    </div>
                    <div class="flex items-center gap-2 text-base text-gray-600">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="bg-gray-100 px-3 py-2 rounded-full">{{ item.translatedDifficulty }}</span>
                    </div>
                  </div>
                  
                  <!-- Button -->
                  <div class="mt-auto">
                    <div :class="`inline-flex items-center gap-2 ${getIconColorClass(item.icon)} bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-full font-medium transition-colors`">
                      <span>Mehr erfahren</span>
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </template>
        </UCarousel>
      </div>

      <!-- No Results -->
      <div v-else-if="searchQuery" class="text-center py-12">
        <svg class="w-16 h-16 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <h3 class="text-xl font-semibold text-white mb-2">Keine Ergebnisse gefunden</h3>
        <p class="text-white/80 mb-4 text-sm">
          Für "{{ searchQuery }}" konnten keine passenden Artikel gefunden werden.
        </p>
        <button 
          @click="searchQuery = ''"
          class="text-spain-yellow hover:text-spain-yellow/80 font-medium transition-colors text-sm"
        >
          Suche zurücksetzen
        </button>
      </div>

      <!-- Empty State (no search) -->
      <div v-else class="text-center py-12">
        <div class="w-20 h-20 bg-gradient-to-br from-spain-yellow/20 to-spain-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-white mb-2">Guide-Artikel</h3>
        <p class="text-white/80 text-sm">
          Nutze die Suche oben, um nach spezifischen Themen zu suchen.
        </p>
      </div>
    </div>
    </div>
  </div>
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
  // Only show available articles
  return results.filter(article => article.available)
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

const getCardBgClass = (icon) => {
  const classes = {
    blue: 'from-blue-50 to-indigo-50',
    green: 'from-green-50 to-emerald-50',
    orange: 'from-orange-50 to-yellow-50',
    purple: 'from-purple-50 to-violet-50'
  }
  return classes[icon] || 'from-gray-50 to-gray-100'
}

const getCardBorderClass = (icon) => {
  const classes = {
    blue: 'border-blue-200',
    green: 'border-green-200',
    orange: 'border-orange-200',
    purple: 'border-purple-200'
  }
  return classes[icon] || 'border-gray-200'
}

const getIconGradientClass = (icon) => {
  const classes = {
    blue: 'from-blue-300 to-indigo-400',
    green: 'from-green-300 to-emerald-400',
    orange: 'from-orange-300 to-yellow-400',
    purple: 'from-purple-300 to-violet-400'
  }
  return classes[icon] || 'from-gray-300 to-gray-400'
}

const getIconPath = (id) => {
  const paths = {
    'nie-number': 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    'gestoria': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    'apartment-search': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    'apartment-rental': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z M12 12h.01M12 16h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01',
    'banking': 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
  }
  return paths[id] || 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
