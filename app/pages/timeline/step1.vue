
<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header Section -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 py-6">
        <div class="flex items-center gap-4">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          </NuxtLink>
          <div>
            <h1 class="!text-2xl font-bold text-gray-900">
              {{ $t('timeline.step1.title') }}
            </h1>
            <p class="text-gray-600">{{ $t('timeline.step1.date') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto px-4 py-8">
      <!-- Introduction -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="!text-xl font-semibold text-gray-900 mb-4">
          {{ $t('timeline.step1.intro.title') }}
        </h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          {{ $t('timeline.step1.intro.description') }}
        </p>
      </div>

      <!-- Main Content Sections -->
      <div class="space-y-8">
        <!-- Section 1: The Dream -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="!text-lg font-semibold text-gray-900 mb-4">
            {{ $t('timeline.step1.sections.dream.title') }}
          </h3>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed">
              {{ $t('timeline.step1.sections.dream.description') }}
            </p>
            <ul class="space-y-2">
              <li 
                v-for="(point, index) in $t('timeline.step1.sections.dream.points')" 
                :key="index"
                class="flex items-start gap-3"
              >
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Section 2: Why Spain -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="!text-lg font-semibold text-gray-900 mb-4">
            {{ $t('timeline.step1.sections.whySpain.title') }}
          </h3>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed">
              {{ $t('timeline.step1.sections.whySpain.description') }}
            </p>
            <ul class="space-y-2">
              <li 
                v-for="(point, index) in $t('timeline.step1.sections.whySpain.points')" 
                :key="index"
                class="flex items-start gap-3"
              >
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Section 3: Fears and Doubts -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="!text-lg font-semibold text-gray-900 mb-4">
            {{ $t('timeline.step1.sections.fears.title') }}
          </h3>
          <div class="space-y-4">
            <p class="text-gray-700 leading-relaxed">
              {{ $t('timeline.step1.sections.fears.description') }}
            </p>
            <ul class="space-y-2">
              <li 
                v-for="(point, index) in $t('timeline.step1.sections.fears.points')" 
                :key="index"
                class="flex items-start gap-3"
              >
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Section 4: Conclusion -->
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="!text-lg font-semibold text-gray-900 mb-4">
            {{ $t('timeline.step1.sections.conclusion.title') }}
          </h3>
          <p class="text-gray-700 leading-relaxed">
            {{ $t('timeline.step1.sections.conclusion.description') }}
          </p>
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between items-center mt-12 pt-8 border-t">
        <div></div>
        <NuxtLink 
          to="/timeline/step2" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {{ $t('timeline.navigation.nextStep') }}
          <Icon name="heroicons:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'The Dream of Spain - Timeline Step 1',
  meta: [
    { name: 'description', content: 'Discover how the dream of moving to Spain began - the first thoughts, wishes, and fears that started this journey.' }
  ]
})
</script>
