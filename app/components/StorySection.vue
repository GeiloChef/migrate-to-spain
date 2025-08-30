<template>
  <section class="py-20 px-6 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="!text-4xl font-bold text-spain-navy mb-4">
          {{ $t('story.title') }}
        </h2>
        <p class="!text-xl text-spain-gray-dark max-w-3xl mx-auto">
          {{ $t('story.subtitle') }}
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left side - Story steps -->
        <div class="space-y-8">
          <div class="relative">
            <div class="flex items-start">
              <div class="w-16 h-16 bg-spain-red rounded-full flex items-center justify-center flex-shrink-0 mr-6 shadow-spain-red">
                <span class="!text-2xl font-bold text-white">1</span>
              </div>
              <div class="flex-1 pt-2">
                <h3 class="!text-2xl font-bold text-spain-navy mb-3">{{ $t('story.step1.title') }}</h3>
                <p class="text-spain-gray-dark leading-relaxed text-lg">{{ $t('story.step1.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="flex items-start">
              <div class="w-16 h-16 bg-spain-yellow rounded-full flex items-center justify-center flex-shrink-0 mr-6 shadow-spain-yellow">
                <span class="!text-2xl font-bold text-spain-navy">2</span>
              </div>
              <div class="flex-1 pt-2">
                <h3 class="!text-2xl font-bold text-spain-navy mb-3">{{ $t('story.step2.title') }}</h3>
                <p class="text-spain-gray-dark leading-relaxed text-lg">{{ $t('story.step2.description') }}</p>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <div class="flex items-start">
              <div class="w-16 h-16 bg-spain-red rounded-full flex items-center justify-center flex-shrink-0 mr-6 shadow-spain-red">
                <span class="!text-2xl font-bold text-white">3</span>
              </div>
              <div class="flex-1 pt-2">
                <h3 class="!text-2xl font-bold text-spain-navy mb-3">{{ $t('story.step3.title') }}</h3>
                <p class="text-spain-gray-dark leading-relaxed text-lg">{{ $t('story.step3.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right side - Personal experience -->
        <div class="lg:sticky lg:top-8">
          <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/30 rounded-2xl p-8 shadow-spain-yellow border border-spain-yellow/40">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-spain rounded-full flex items-center justify-center mx-auto mb-6 shadow-spain-red">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h4 class="!text-2xl font-bold text-spain-navy mb-4">{{ $t('story.personal.title') }}</h4>
              <p class="text-spain-gray-dark mb-6 leading-relaxed">{{ $t('story.personal.description') }}</p>
              <UButton 
                size="lg" 
                variant="solid"
                class="bg-spain-red hover:bg-spain-red-dark text-white cursor-pointer font-semibold shadow-spain-red hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {{ $t('story.personal.badge') }}
              </UButton>
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
