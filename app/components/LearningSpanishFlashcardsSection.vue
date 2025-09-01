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
            <strong>{{ $t('story.timeline.step3.sections.flashcards.systemTitle') }}</strong>
          </p>
          <p class="text-lg text-gray-700 leading-relaxed">
            {{ $t('story.timeline.step3.sections.flashcards.systemDescription') }}
          </p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Left Side: Progress Visualization -->
        <div class="space-y-6">
          <h4 class="!text-xl font-semibold text-gray-800 text-center mb-8">{{ $t('story.timeline.step3.sections.flashcards.sixStageSystem') }}</h4>
          
          <!-- Stufe 1: Täglich -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ $t('story.timeline.step3.sections.flashcards.stage1.label') }}</span>
              <span class="text-xs text-blue-600 font-bold">{{ $t('story.timeline.step3.sections.flashcards.stage1.frequency') }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-400 to-blue-500 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 100%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">{{ $t('story.timeline.step3.sections.flashcards.stage1.description') }}</p>
          </div>

          <!-- Stufe 2: Alle 2 Tage -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ $t('story.timeline.step3.sections.flashcards.stage2.label') }}</span>
              <span class="text-xs text-blue-600 font-bold">{{ $t('story.timeline.step3.sections.flashcards.stage2.frequency') }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 83%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">{{ $t('story.timeline.step3.sections.flashcards.stage2.description') }}</p>
          </div>

          <!-- Stufe 3: Wöchentlich -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ $t('story.timeline.step3.sections.flashcards.stage3.label') }}</span>
              <span class="text-xs text-blue-600 font-bold">{{ $t('story.timeline.step3.sections.flashcards.stage3.frequency') }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 66%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">{{ $t('story.timeline.step3.sections.flashcards.stage3.description') }}</p>
          </div>

          <!-- Stufe 4: Alle 2 Wochen -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ $t('story.timeline.step3.sections.flashcards.stage4.label') }}</span>
              <span class="text-xs text-blue-600 font-bold">{{ $t('story.timeline.step3.sections.flashcards.stage4.frequency') }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-700 to-blue-800 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 50%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">{{ $t('story.timeline.step3.sections.flashcards.stage4.description') }}</p>
          </div>

          <!-- Stufe 5: Monatlich -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ $t('story.timeline.step3.sections.flashcards.stage5.label') }}</span>
              <span class="text-xs text-blue-600 font-bold">{{ $t('story.timeline.step3.sections.flashcards.stage5.frequency') }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-800 to-blue-900 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 33%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">{{ $t('story.timeline.step3.sections.flashcards.stage5.description') }}</p>
          </div>

          <!-- Stufe 6: Alle 2-3 Monate -->
          <div class="group">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">{{ $t('story.timeline.step3.sections.flashcards.stage6.label') }}</span>
              <span class="text-xs text-green-600 font-bold">{{ $t('story.timeline.step3.sections.flashcards.stage6.frequency') }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div class="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 16%"></div>
            </div>
            <p class="text-xs text-gray-600 mt-1">{{ $t('story.timeline.step3.sections.flashcards.stage6.description') }}</p>
          </div>
        </div>

        <!-- Right Side: How It Works -->
        <div class="space-y-6">
          <h4 class="!text-xl font-semibold text-gray-800 text-center mb-8">{{ $t('story.timeline.step3.sections.flashcards.howItWorks') }}</h4>
          
          <!-- Step Cards -->
          <div class="space-y-4">
            <!-- Step 1 -->
            <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ $t('story.timeline.step3.sections.flashcards.step1') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ $t('story.timeline.step3.sections.flashcards.step2') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ $t('story.timeline.step3.sections.flashcards.step3') }}</p>
                </div>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  4
                </div>
                <div class="flex-1">
                  <p class="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">{{ $t('story.timeline.step3.sections.flashcards.step4') }}</p>
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
            <h5 class="font-semibold text-green-800 mb-2 text-lg">{{ $t('story.timeline.step3.sections.flashcards.whyItWorks') }}</h5>
            <p class="text-green-700 leading-relaxed">{{ $t('story.timeline.step3.sections.flashcards.conclusion') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// No computed properties needed - using direct $t() calls in template
</script>
