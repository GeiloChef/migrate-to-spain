<template>
  <div id="arbeit">
    <!-- Header Section -->
    <div class="flex items-center gap-4 mb-10">
      <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-2xl">2</span>
      </div>
      <h2 class="!text-4xl font-bold text-gray-900">
        {{ $t('story.timeline.step2.sections.work.title') }}
      </h2>
    </div>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        {{ $t('story.timeline.step2.sections.work.intro') }}
      </p>
      
      <!-- Unified Work Options Card -->
      <div class="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        <!-- Hero Image at the top -->
        <div class="w-full h-64 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Team working remotely and in office - work options"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Two Options Below -->
        <div class="grid md:grid-cols-2 gap-0 relative">
          <!-- Option 1: Remote Work -->
          <div class="p-6">
            <h3 class="!text-lg font-semibold text-gray-900 mb-4 text-lg">{{ $t('story.timeline.step2.sections.work.options.remote.title') }}</h3>
            <div class="space-y-3 mb-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.remote.point1') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.remote.point2') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.remote.point3') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.remote.point4') }}</span>
              </div>
            </div>
            <div class="p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p class="!text-sm text-amber-800">
                <strong>Achtung:</strong> {{ $t('story.timeline.step2.sections.work.options.remote.warning') }}
              </p>
            </div>
          </div>
          
          <!-- Divider -->
          <div class="absolute left-1/2 top-[15%] bottom-[15%] w-px bg-gray-200 transform -translate-x-1/2"></div>
          
          <!-- Option 2: Work in Spain -->
          <div class="p-6">
            <h3 class="!text-lg font-semibold text-gray-900 mb-4 text-lg">{{ $t('story.timeline.step2.sections.work.options.spain.title') }}</h3>
            <div class="space-y-3 mb-4">
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.spain.point1') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.spain.point2') }}</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="!text-sm text-gray-700">{{ $t('story.timeline.step2.sections.work.options.spain.point3') }}</span>
              </div>
            </div>
            <div class="p-3 bg-red-50 rounded-lg border border-red-200">
              <p class="!text-sm text-red-800">
                <strong>Nachteil:</strong> {{ $t('story.timeline.step2.sections.work.options.spain.disadvantage') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Verbesserte Entscheidungsbox -->
      <div class="mt-8 relative rounded-xl overflow-hidden shadow-lg">
        <!-- Hintergrundbild mit Opacity -->
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Decision making and planning"
            class="w-full h-full object-cover opacity-15"
          />
        </div>
        <!-- Content mit semi-transparentem Hintergrund -->
        <div class="relative p-8 bg-white/95 backdrop-blur-sm text-center">
          <div class="inline-flex items-center gap-3 px-4 py-2 bg-blue-100/80 rounded-full text-blue-800 text-sm font-medium mb-4 border border-blue-200/50">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Meine Entscheidung
          </div>
          <h3 class="!text-lg font-bold text-gray-900 mb-3 text-xl">{{ $t('story.timeline.step2.sections.work.decision.title') }}</h3>
          <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            {{ $t('story.timeline.step2.sections.work.decision.description') }}
          </p>
          <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 rounded-lg text-blue-700 text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" />
            </svg>
            {{ $t('story.timeline.step2.sections.work.decision.reminder') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// No computed properties needed - using direct $t() calls in template
</script>
