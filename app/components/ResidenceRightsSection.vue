<template>
  <div id="aufenthaltsrecht">
    <!-- Header Section -->
    <div class="flex items-center gap-4 mb-10">
      <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-2xl">1</span>
      </div>
      <h2 class="!text-4xl font-bold text-gray-900">
        {{ $t('story.timeline.step2.sections.residenceRights.title') }}
      </h2>
    </div>

    <!-- Full Width Introduction Section -->
    <div class="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border border-blue-100 overflow-hidden shadow-lg mb-10">
      <div class="grid lg:grid-cols-2 gap-0 items-center">
        <div class="p-8">
            <h3 class="!text-xl font-bold text-gray-900 mb-4 text-blue-600">
              {{ $t('story.timeline.step2.sections.residenceRights.intro.title') }}
            </h3>
          <p class="!text-lg mb-4 text-gray-700">
            {{ $t('story.timeline.step2.sections.residenceRights.intro.question') }}
          </p>
          <p class="mb-4 text-gray-700 leading-relaxed">
            {{ $t('story.timeline.step2.sections.residenceRights.intro.answer') }}
          </p>
          <p class="mb-4 text-gray-700 leading-relaxed">
            {{ $t('story.timeline.step2.sections.residenceRights.intro.note') }}
          </p>
        </div>
        <div class="h-64 lg:h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="EU freedom of movement and legal documents"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Two Rules Side by Side -->
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- 3 Months Rule -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-lg">3</span>
          </div>
          <h3 class="!text-lg font-bold text-gray-900 text-xl">{{ $t('story.timeline.step2.sections.residenceRights.registration.title') }}</h3>
        </div>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{{ $t('story.timeline.step2.sections.residenceRights.registration.point1') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{{ $t('story.timeline.step2.sections.residenceRights.registration.point2') }}</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
            <span>{{ $t('story.timeline.step2.sections.residenceRights.registration.point3') }}</span>
          </li>
        </ul>
      </div>

      <!-- 183 Days Rule -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
            <span class="text-white font-bold text-lg">183</span>
          </div>
          <h3 class="!text-lg font-bold text-gray-900 text-xl">{{ $t('story.timeline.step2.sections.residenceRights.taxRule.title') }}</h3>
        </div>
        
        <div class="space-y-4 mb-4">
          <div class="p-3 bg-blue-50 rounded-xl border border-blue-100">
            <div class="flex items-start gap-3">
              <div class="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p class="font-semibold text-gray-900">{{ $t('story.timeline.step2.sections.residenceRights.taxRule.over183.title') }}</p>
                <p class="!text-sm text-gray-600">{{ $t('story.timeline.step2.sections.residenceRights.taxRule.over183.description') }}</p>
              </div>
            </div>
          </div>
          <div class="p-3 bg-green-50 rounded-xl border border-green-100">
            <div class="flex items-start gap-3">
              <div class="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p class="font-semibold text-gray-900">{{ $t('story.timeline.step2.sections.residenceRights.taxRule.under183.title') }}</p>
                <p class="!text-sm text-gray-600">{{ $t('story.timeline.step2.sections.residenceRights.taxRule.under183.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border border-green-200">
          <p class="!text-sm text-green-900 leading-relaxed">
            <strong class="text-green-800">{{ $t('story.timeline.step2.sections.residenceRights.taxRule.conclusion') }}</strong>
          </p>
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
