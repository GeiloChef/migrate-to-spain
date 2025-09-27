<template>
  <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="px-6 py-16">
      <!-- Header -->
      <div class="text-left mb-12">
        <h2 class="!text-2xl font-bold text-gray-900 mb-6">
          {{ $t('learning-spanish.sections.flashcards.title') }}
        </h2>
      </div>
        
      <!-- Intro Text -->
      <div class="max-w-4xl mx-auto text-left mb-8">
        <p class="!text-lg text-gray-700 leading-relaxed">
          {{ $t('learning-spanish.sections.flashcards.intro') }}
        </p>
      </div>
        
        <!-- Unified System Box -->
        <div class="max-w-4xl mx-auto text-left bg-white rounded-xl p-8 shadow-md border border-gray-200">
          <p class="!text-lg text-gray-700 leading-relaxed mb-4">
            <strong>{{ $t('learning-spanish.sections.flashcards.systemTitle') }}</strong>
          </p>
          <p class="!text-lg text-gray-700 leading-relaxed mb-8">
            {{ $t('learning-spanish.sections.flashcards.systemDescription') }}</p>
          
          <!-- 6-Stage System and How It Works Combined -->
          <div class="grid lg:grid-cols-2 gap-8 mt-8">
            <!-- Left Side: 6-Stage System Visualization -->
            <div class="space-y-4">
              <h3 class="!text-lg font-semibold text-gray-800 text-center mb-6">{{ $t('learning-spanish.sections.flashcards.sixStageSystem') }}</h3>
              
              <!-- Stage 1: Daily -->
              <div class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="!text-sm font-medium text-gray-700">{{ $t('learning-spanish.sections.flashcards.stage1.label') }}</span>
                  <span class="!text-xs text-blue-600 font-bold">{{ $t('learning-spanish.sections.flashcards.stage1.frequency') }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 100%"></div>
                </div>
                <p class="!text-xs text-gray-600 mt-1">{{ $t('learning-spanish.sections.flashcards.stage1.description') }}</p>
              </div>

              <!-- Stage 2: Every 2 days -->
              <div class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="!text-sm font-medium text-gray-700">{{ $t('learning-spanish.sections.flashcards.stage2.label') }}</span>
                  <span class="!text-xs text-blue-600 font-bold">{{ $t('learning-spanish.sections.flashcards.stage2.frequency') }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 83%"></div>
                </div>
                <p class="!text-xs text-gray-600 mt-1">{{ $t('learning-spanish.sections.flashcards.stage2.description') }}</p>
              </div>

              <!-- Stage 3: Weekly -->
              <div class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="!text-sm font-medium text-gray-700">{{ $t('learning-spanish.sections.flashcards.stage3.label') }}</span>
                  <span class="!text-xs text-blue-600 font-bold">{{ $t('learning-spanish.sections.flashcards.stage3.frequency') }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 66%"></div>
                </div>
                <p class="!text-xs text-gray-600 mt-1">{{ $t('learning-spanish.sections.flashcards.stage3.description') }}</p>
              </div>

              <!-- Stage 4: Every 2 weeks -->
              <div class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="!text-sm font-medium text-gray-700">{{ $t('learning-spanish.sections.flashcards.stage4.label') }}</span>
                  <span class="!text-xs text-blue-600 font-bold">{{ $t('learning-spanish.sections.flashcards.stage4.frequency') }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-700 to-blue-800 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 50%"></div>
                </div>
                <p class="!text-xs text-gray-600 mt-1">{{ $t('learning-spanish.sections.flashcards.stage4.description') }}</p>
              </div>

              <!-- Stage 5: Monthly -->
              <div class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="!text-sm font-medium text-gray-700">{{ $t('learning-spanish.sections.flashcards.stage5.label') }}</span>
                  <span class="!text-xs text-blue-600 font-bold">{{ $t('learning-spanish.sections.flashcards.stage5.frequency') }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-blue-800 to-blue-900 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 33%"></div>
                </div>
                <p class="!text-xs text-gray-600 mt-1">{{ $t('learning-spanish.sections.flashcards.stage5.description') }}</p>
              </div>

              <!-- Stage 6: Every 2-3 months -->
              <div class="group">
                <div class="flex items-center justify-between mb-2">
                  <span class="!text-sm font-medium text-gray-700">{{ $t('learning-spanish.sections.flashcards.stage6.label') }}</span>
                  <span class="!text-xs text-green-600 font-bold">{{ $t('learning-spanish.sections.flashcards.stage6.frequency') }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div class="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000 group-hover:scale-105" style="width: 16%"></div>
                </div>
                <p class="!text-xs text-gray-600 mt-1">{{ $t('learning-spanish.sections.flashcards.stage6.description') }}</p>
              </div>
            </div>

            <!-- Right Side: How It Works and Why It Works -->
            <div class="space-y-4">
              <h3 class="!text-lg font-semibold text-gray-800 text-center mb-6">{{ $t('learning-spanish.sections.flashcards.howItWorks') }}</h3>
              
              <!-- Step Cards -->
              <div class="space-y-3">
                <!-- Step 1 -->
                <div class="bg-gray-50 rounded-lg p-3 border border-gray-100 group">
                  <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">{{ $t('learning-spanish.sections.flashcards.step1') }}</p>
                  </div>
                </div>
                
                <!-- Step 2 -->
                <div class="bg-gray-50 rounded-lg p-3 border border-gray-100 group">
                  <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">{{ $t('learning-spanish.sections.flashcards.step2') }}</p>
                  </div>
                </div>
                
                <!-- Step 3 -->
                <div class="bg-gray-50 rounded-lg p-3 border border-gray-100 group">
                  <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">{{ $t('learning-spanish.sections.flashcards.step3') }}</p>
                  </div>
                </div>
                
                <!-- Step 4 -->
                <div class="bg-gray-50 rounded-lg p-3 border border-gray-100 group">
                  <div class="flex-1">
                    <p class="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">{{ $t('learning-spanish.sections.flashcards.step4') }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Why It Works Section -->
              <div class="mt-8 pt-6 border-t border-gray-200">
                <h3 class="!text-lg font-semibold text-gray-800 text-center mb-4">{{ $t('learning-spanish.sections.flashcards.whyItWorks') }}</h3>
                <div class="bg-green-50 rounded-lg p-4 border border-green-100 relative overflow-hidden">
                  <!-- Background icon -->
                  <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
                    <Icon name="heroicons:light-bulb" class="w-8 h-8 text-white" />
                  </div>
                  <!-- Content -->
                  <div class="relative z-10">
                    <p class="text-green-700 leading-relaxed text-sm">{{ $t('learning-spanish.sections.flashcards.conclusion') }}</p>
                  </div>
                </div>
              </div>
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
