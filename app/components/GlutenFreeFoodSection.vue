<template>
  <div class="mb-16" id="glutenfreies-essen">
    <!-- Header Section -->
    <div class="flex items-center gap-4 mb-10">
      <div class="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-2xl">5</span>
      </div>
      <h3 class="!text-4xl font-bold text-gray-900">
        {{ $t('story.timeline.step2.sections.glutenFree.title') }}
      </h3>
    </div>
    
    <div class="space-y-8 text-gray-700 leading-relaxed">
      <!-- Introduction -->
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
        <p class="text-lg leading-relaxed">
          {{ $t('story.timeline.step2.sections.glutenFree.intro') }}
        </p>
      </div>
      
      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Left Column: Text Content -->
        <div class="space-y-6">
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h4 class="font-semibold text-gray-900 mb-4 text-lg flex items-center gap-2">
              <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
              {{ $t('story.timeline.step2.sections.glutenFree.positiveSurprise.title') }}
            </h4>
            <div class="space-y-4 text-gray-700">
              <p>
                {{ $t('story.timeline.step2.sections.glutenFree.positiveSurprise.description1') }}
              </p>
              <p>
                {{ $t('story.timeline.step2.sections.glutenFree.positiveSurprise.description2') }}
              </p>
            </div>
          </div>
        </div>
        
        <!-- Right Column: Supermarket Info -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
          <h4 class="font-semibold text-gray-900 mb-5 text-lg flex items-center gap-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            {{ $t('story.timeline.step2.sections.glutenFree.supermarkets.title') }}
          </h4>
          <div class="space-y-4">
            <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100">
              <div class="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
              <div>
                <span class="text-sm font-semibold text-gray-900">{{ $t('story.timeline.step2.sections.glutenFree.supermarkets.mercadona') }}</span>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100">
              <div class="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
              <div>
                <span class="text-sm font-semibold text-gray-900">{{ $t('story.timeline.step2.sections.glutenFree.supermarkets.carrefour') }}</span>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100">
              <div class="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
              <div>
                <span class="text-sm font-semibold text-gray-900">{{ $t('story.timeline.step2.sections.glutenFree.supermarkets.alcampo') }}</span>
              </div>
            </div>
            <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-green-100">
              <div class="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
              <div>
                <span class="text-sm font-semibold text-gray-900">{{ $t('story.timeline.step2.sections.glutenFree.supermarkets.lidl') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Conclusion Box -->
      <div class="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl border border-green-300 p-6 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h4 class="font-bold text-gray-900 text-lg">{{ $t('story.timeline.step2.sections.glutenFree.conclusion.title') }}</h4>
        </div>
        <p class="text-green-800 font-medium leading-relaxed">
          {{ $t('story.timeline.step2.sections.glutenFree.conclusion.description') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// Positive surprise info with fallback
const positiveSurpriseInfo = computed(() => {
  try {
    const title = t('story.timeline.step2.sections.glutenFree.positiveSurprise.title')
    const description1 = t('story.timeline.step2.sections.glutenFree.positiveSurprise.description1')
    const description2 = t('story.timeline.step2.sections.glutenFree.positiveSurprise.description2')
    console.log('Positive surprise info from i18n:', { title, description1, description2 })
    return { title, description1, description2 }
  } catch (error) {
    console.error('Error getting positive surprise info:', error)
    return { title: '', description1: '', description2: '' }
  }
})

// Supermarkets info with fallback
const supermarketsInfo = computed(() => {
  try {
    const title = t('story.timeline.step2.sections.glutenFree.supermarkets.title')
    const mercadona = t('story.timeline.step2.sections.glutenFree.supermarkets.mercadona')
    const carrefour = t('story.timeline.step2.sections.glutenFree.supermarkets.carrefour')
    const alcampo = t('story.timeline.step2.sections.glutenFree.supermarkets.alcampo')
    const lidl = t('story.timeline.step2.sections.glutenFree.supermarkets.lidl')
    console.log('Supermarkets info from i18n:', { title, mercadona, carrefour, alcampo, lidl })
    return { title, mercadona, carrefour, alcampo, lidl }
  } catch (error) {
    console.error('Error getting supermarkets info:', error)
    return { title: '', mercadona: '', carrefour: '', alcampo: '', lidl: '' }
  }
})

// Fallback data for positive surprise
const fallbackPositiveSurprise = {
  title: "Positive Überraschung in Spanien",
  description1: "In Spanien war ich ehrlich gesagt positiv überrascht. Schon bei meinen ersten Aufenthalten habe ich gemerkt, dass das Bewusstsein für glutenfreie Ernährung ('sin gluten') hier viel stärker ausgeprägt ist. In fast jedem größeren Supermarkt gibt es ganze Regale mit glutenfreien Produkten.",
  description2: "Auch beim Essengehen sieht es in Spanien oft entspannter aus. Viele Restaurants und Cafés kennzeichnen ihre Speisekarten klar mit 'sin gluten'-Symbolen, und es gibt Ketten wie 100 Montaditos oder VIPS, die explizit glutenfreie Optionen anbieten."
}

// Fallback data for supermarkets
const fallbackSupermarkets = {
  title: "Supermarktketten mit großer glutenfreier Auswahl:",
  mercadona: "Mercadona – wahrscheinlich die beste Anlaufstelle",
  carrefour: "Carrefour – breite Auswahl an Markenprodukten",
  alcampo: "Alcampo – große Hypermärkte mit guter Abdeckung",
  lidl: "Lidl Spanien – einige glutenfreie Eigenmarkenprodukte"
}

// Display data with fallback logic
const displayPositiveSurprise = computed(() => {
  return positiveSurpriseInfo.value.title && positiveSurpriseInfo.value.description1 && positiveSurpriseInfo.value.description2
    ? positiveSurpriseInfo.value 
    : fallbackPositiveSurprise
})

const displaySupermarkets = computed(() => {
  return supermarketsInfo.value.title && supermarketsInfo.value.mercadona && supermarketsInfo.value.carrefour && supermarketsInfo.value.alcampo && supermarketsInfo.value.lidl
    ? supermarketsInfo.value 
    : fallbackSupermarkets
})
</script>
