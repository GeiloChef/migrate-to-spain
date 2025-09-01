<template>
  <TimelineLayout 
    :title="$t('story.timeline.step3.title')"
    :date="$t('story.timeline.step3.date')"
    :previous-step="'/timeline/first-research-feasibility'"
    :next-step="'/timeline/spanien-entdecken'"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Spanish language learning - books and study materials"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            {{ $t('story.timeline.step3.hero.badge') }}
          </div>
          <h2 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            {{ $t('story.timeline.step3.hero.title') }}
          </h2>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('story.timeline.step3.hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Introduction -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.introduction.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p class="mb-4">{{ $t('story.timeline.step3.sections.introduction.paragraph1') }}</p>
              <p>{{ $t('story.timeline.step3.sections.introduction.paragraph2') }}</p>
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Spanish culture and language"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Duolingo -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.duolingo.title') }}
          </h3>
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph1') }}</p>
            <p class="text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph2') }}</p>
            <p class="text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph3') }}</p>
          </div>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-r-lg">
            <p class="font-medium text-gray-900 mb-2 text-lg">💡 {{ $t('story.timeline.step3.sections.duolingo.title') }}</p>
            <p class="text-orange-700 font-medium text-lg">{{ $t('story.timeline.step3.sections.duolingo.paragraph1') }}</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Books -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.books.title') }}
          </h3>
          <p class="text-lg mb-8 text-gray-700">
            {{ $t('story.timeline.step3.sections.books.intro') }}
          </p>
          
          <div class="grid gap-8">
            <!-- Book 1 -->
            <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2 text-xl">
                    {{ $t('story.timeline.step3.sections.books.book1.title') }}
                  </h4>
                  <p class="text-gray-600 mb-2">{{ $t('story.timeline.step3.sections.books.book1.author') }}</p>
                  <p class="text-sm text-gray-500 mb-4">{{ $t('story.timeline.step3.sections.books.book1.isbn') }}</p>
                  <p class="text-gray-700 mb-4">{{ $t('story.timeline.step3.sections.books.book1.description') }}</p>
                </div>
                <div class="bg-blue-50 rounded-lg p-6">
                  <h5 class="font-semibold text-gray-900 mb-3">Mein Review:</h5>
                  <p class="text-gray-700 text-sm">{{ $t('story.timeline.step3.sections.books.book1.review') }}</p>
                </div>
              </div>
            </div>

            <!-- Book 2 -->
            <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2 text-xl">
                    {{ $t('story.timeline.step3.sections.books.book2.title') }}
                  </h4>
                  <p class="text-gray-600 mb-2">{{ $t('story.timeline.step3.sections.books.book2.author') }}</p>
                  <p class="text-sm text-gray-500 mb-4">{{ $t('story.timeline.step3.sections.books.book2.isbn') }}</p>
                  <p class="text-gray-700 mb-4">{{ $t('story.timeline.step3.sections.books.book2.description') }}</p>
                </div>
                <div class="bg-green-50 rounded-lg p-6">
                  <h5 class="font-semibold text-gray-900 mb-3">Mein Review:</h5>
                  <p class="text-gray-700 text-sm">{{ $t('story.timeline.step3.sections.books.book2.review') }}</p>
                </div>
              </div>
            </div>

            <!-- Book 3 -->
            <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2 text-xl">
                    {{ $t('story.timeline.step3.sections.books.book3.title') }}
                  </h4>
                  <p class="text-gray-600 mb-2">{{ $t('story.timeline.step3.sections.books.book3.author') }}</p>
                  <p class="text-sm text-gray-500 mb-4">{{ $t('story.timeline.step3.sections.books.book3.isbn') }}</p>
                  <p class="text-gray-700 mb-4">{{ $t('story.timeline.step3.sections.books.book3.description') }}</p>
                </div>
                <div class="bg-purple-50 rounded-lg p-6">
                  <h5 class="font-semibold text-gray-900 mb-3">Mein Review:</h5>
                  <p class="text-gray-700 text-sm">{{ $t('story.timeline.step3.sections.books.book3.review') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Flashcards -->
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

      <!-- Section 5: Lingolia -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.lingolia.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p class="text-lg">{{ $t('story.timeline.step3.sections.lingolia.paragraph1') }}</p>
              <p class="text-lg">{{ $t('story.timeline.step3.sections.lingolia.paragraph2') }}</p>
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Online learning and study"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 6: Current Status -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-6 py-16">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step3.sections.currentStatus.title') }}
          </h3>
          <div class="space-y-6 text-gray-700 leading-relaxed mb-8">
            <p class="text-lg">{{ $t('story.timeline.step3.sections.currentStatus.paragraph1') }}</p>
            <p class="text-lg">{{ $t('story.timeline.step3.sections.currentStatus.paragraph2') }}</p>
          </div>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:light-bulb" class="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3 text-lg">💡 Mein Tipp:</h4>
                <p class="text-blue-800 font-medium text-lg">{{ $t('story.timeline.step3.sections.currentStatus.tip') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
import { computed } from 'vue'

useHead({
  title: 'Erste Schritte: Spanisch lernen - Timeline Step 3',
  meta: [
    { name: 'description', content: 'Warum Spanisch lernen so wichtig ist und wie ich es angegangen bin - von Duolingo bis zu Büchern und Karteikarten.' }
  ]
})

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
