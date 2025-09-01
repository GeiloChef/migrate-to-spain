<template>
  <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="px-6 py-16">
      <!-- Header -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg mb-6">
          <Icon name="heroicons:academic-cap" class="w-6 h-6" />
          <span class="text-lg">{{ $t('story.timeline.step3.sections.flashcards.title') }}</span>
        </div>
        <div class="max-w-4xl mx-auto text-left bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <p class="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>Das Karteikasten-System funktioniert so:</strong>
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            Man hat eine Box mit 6 Fächern. Neue Vokabeln beginnen immer im ersten Fach. Wenn man eine Vokabel beim Abfragen richtig weiß, rückt sie ein Fach weiter nach hinten. Weiß man sie nicht, kommt sie wieder ganz nach vorne ins erste Fach. Je weiter hinten die Vokabel liegt, desto seltener wird sie abgefragt. Auf diese Weise wiederholt man schwierige Vokabeln oft und leichte Vokabeln nur noch selten – bis sie schließlich im letzten Fach landen und als "fast gelernt" gelten.
          </p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left Side: Progress Visualization -->
        <div class="space-y-6">
          <h4 class="!text-xl font-semibold text-gray-800 text-center mb-8">Das 6-Stufen-System</h4>
          
          <!-- Stufe 1: Täglich -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Stufe 1</span>
              <span class="text-xs text-blue-600 font-bold">Täglich</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 100%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">Neue Vokabeln werden täglich wiederholt</p>
          </div>

          <!-- Stufe 2: Alle 2 Tage -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Stufe 2</span>
              <span class="text-xs text-blue-600 font-bold">Alle 2 Tage</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 83%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">Erste Erfolge kommen seltener dran</p>
          </div>

          <!-- Stufe 3: Wöchentlich -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Stufe 3</span>
              <span class="text-xs text-blue-600 font-bold">Wöchentlich</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 66%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">Festigung durch wöchentliche Wiederholung</p>
          </div>

          <!-- Stufe 4: Alle 2 Wochen -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Stufe 4</span>
              <span class="text-xs text-blue-600 font-bold">Alle 2 Wochen</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-700 to-blue-800 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 50%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">Vertiefung durch seltene Wiederholung</p>
          </div>

          <!-- Stufe 5: Monatlich -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Stufe 5</span>
              <span class="text-xs text-blue-600 font-bold">Monatlich</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-800 to-blue-900 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 33%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">Wiederholung durch monatliche Kontrolle</p>
          </div>

          <!-- Stufe 6: Alle 2-3 Monate -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Stufe 6</span>
              <span class="text-xs text-green-600 font-bold">Alle 2-3 Monate</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 16%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">Seltene Kontrolle - das Wort sitzt fest!</p>
          </div>
        </div>

        <!-- Right Side: How It Works -->
        <div class="space-y-6">
          <h4 class="!text-xl font-semibold text-gray-800 text-center mb-8">Wie funktioniert es?</h4>
          
          <!-- Step Cards -->
          <div class="space-y-4">
            <div v-for="(step, index) in flashcardSteps" :key="index" 
                 class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {{ index + 1 }}
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ step }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Why It Works Box - Full Width -->
      <div class="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 mt-12">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h5 class="font-semibold text-green-800 mb-2 text-lg">Warum funktioniert es?</h5>
            <p class="text-green-700 leading-relaxed">{{ $t('story.timeline.step3.sections.flashcards.conclusion') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Computed properties for robust data handling
const flashcardSteps = computed(() => {
  try {
    const steps = $t('story.timeline.step3.sections.flashcards.steps')
    if (Array.isArray(steps) && steps.length > 0) {
      return steps
    }
  } catch (error) {
    console.warn('Could not load flashcard steps:', error)
  }

  // Fallback data if translation is not available
  return [
    "Neue Vokabeln starten in Fach 1 und werden täglich wiederholt.",
    "Jedes Mal, wenn man sie richtig kann, wandern sie eine Stufe nach hinten – und kommen seltener dran.",
    "Fehlerhafte Vokabeln gehen wieder ganz nach vorne.",
    "Nach einigen Wochen landen die Wörter in Fach 6 – und gelten als \"gelernt\"."
  ]
})
</script>
