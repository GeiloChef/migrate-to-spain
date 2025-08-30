<template>
  <section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="!text-4xl font-bold text-gray-900 mb-4">
          {{ $t('story.title') }}
        </h2>
        <p class="!text-xl text-gray-600 max-w-3xl mx-auto">
          {{ $t('story.subtitle') }}
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left side - Story steps -->
        <div class="space-y-8">
          <div class="flex items-start space-x-5">
            <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="!text-xl font-bold text-blue-600">1</span>
            </div>
            <div class="flex-1">
              <h3 class="!text-xl font-semibold text-gray-900 mb-3">{{ $t('story.step1.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('story.step1.description') }}</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-5">
            <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="!text-xl font-bold text-green-600">2</span>
            </div>
            <div class="flex-1">
              <h3 class="!text-xl font-semibold text-gray-900 mb-3">{{ $t('story.step2.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('story.step2.description') }}</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-5">
            <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span class="!text-xl font-bold text-purple-600">3</span>
            </div>
            <div class="flex-1">
              <h3 class="!text-xl font-semibold text-gray-900 mb-3">{{ $t('story.step3.title') }}</h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('story.step3.description') }}</p>
            </div>
          </div>
        </div>
        
        <!-- Right side - Personal experience -->
        <div class="lg:sticky lg:top-8">
          <div class="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl p-8 shadow-lg border border-blue-200">
            <div class="text-center">
              <div class="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h4 class="!text-2xl font-bold text-gray-900 mb-4">{{ $t('story.personal.title') }}</h4>
              <p class="text-gray-700 mb-6 leading-relaxed">{{ $t('story.personal.description') }}</p>
              <div class="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full text-sm font-semibold shadow-md hover:bg-blue-600 transition-colors duration-300">
                {{ $t('story.personal.badge') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
