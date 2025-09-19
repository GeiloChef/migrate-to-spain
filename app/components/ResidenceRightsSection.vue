<template>
  <div id="aufenthaltsrecht">
    <!-- Header Section -->
    <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
      <div class="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
        <span class="text-white font-bold text-lg md:text-2xl">1</span>
      </div>
      <h2 class="!text-2xl md:!text-4xl font-bold text-gray-900">
        {{ $t('first-research-feasibility.sections.residenceRights.title') }}
      </h2>
    </div>

    <!-- Full Width Introduction Section -->
    <div class="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl border border-blue-100 overflow-hidden shadow-lg mb-10">
      <div class="grid lg:grid-cols-2 gap-0 items-center">
        <div class="p-8">
            <h3 class="!text-xl font-bold text-gray-900 mb-4 text-blue-600">
              {{ $t('first-research-feasibility.sections.residenceRights.intro.title') }}
            </h3>
          <p class="!text-lg mb-4 text-gray-700">
            {{ $t('first-research-feasibility.sections.residenceRights.intro.question') }}
          </p>
          <p class="mb-4 text-gray-700 leading-relaxed">
            {{ $t('first-research-feasibility.sections.residenceRights.intro.answer') }}
          </p>
          <p class="mb-4 text-gray-700 leading-relaxed">
            {{ $t('first-research-feasibility.sections.residenceRights.intro.note') }}
          </p>
        </div>
        <div class="h-64 lg:h-full overflow-hidden">
          <img 
            src="/images/timeline/residence-rights.png" 
            alt="EU-Freizügigkeit und Aufenthaltsrecht Dokumente"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Two Rules Side by Side -->
    <div class="grid lg:grid-cols-2 gap-8">
      <!-- 3 Months Rule -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
          <span class="text-white font-bold text-2xl">3</span>
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-bold text-gray-900 text-xl mb-4">{{ $t('first-research-feasibility.sections.residenceRights.registration.title') }}</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>{{ $t('first-research-feasibility.sections.residenceRights.registration.point1') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>{{ $t('first-research-feasibility.sections.residenceRights.registration.point2') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span>{{ $t('first-research-feasibility.sections.residenceRights.registration.point3') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 183 Days Rule -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
          <span class="text-white font-bold text-lg">183</span>
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-bold text-gray-900 text-xl mb-4">{{ $t('first-research-feasibility.sections.residenceRights.taxRule.title') }}</h3>
          
          <div class="space-y-4 mb-4">
            <div class="p-3 bg-transparent rounded-xl border border-gray-300 relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center opacity-20">
                <Icon name="heroicons:arrow-trending-up" class="w-6 h-6 text-white" />
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <p class="font-semibold text-gray-900">{{ $t('first-research-feasibility.sections.residenceRights.taxRule.over183.title') }}</p>
                <p class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.residenceRights.taxRule.over183.description') }}</p>
              </div>
            </div>
            <div class="p-3 bg-transparent rounded-xl border border-gray-300 relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
                <Icon name="heroicons:arrow-trending-down" class="w-6 h-6 text-white" />
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <p class="font-semibold text-gray-900">{{ $t('first-research-feasibility.sections.residenceRights.taxRule.under183.title') }}</p>
                <p class="!text-sm text-gray-600">{{ $t('first-research-feasibility.sections.residenceRights.taxRule.under183.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="p-3 bg-transparent rounded-xl border border-gray-300 relative overflow-hidden">
            <!-- Background icon -->
            <div class="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center opacity-20">
              <Icon name="heroicons:exclamation-triangle" class="w-6 h-6 text-white" />
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <p class="!text-sm text-gray-700 leading-relaxed">
                <strong class="text-gray-900">{{ $t('first-research-feasibility.sections.residenceRights.taxRule.conclusion') }}</strong>
              </p>
            </div>
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
