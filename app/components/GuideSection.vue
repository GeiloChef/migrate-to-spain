<template>
  <section class="py-20 px-6 bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="!text-4xl font-bold text-spain-navy mb-4">
          {{ $t('guide.title') }}
        </h2>
        <p class="!text-xl text-spain-gray-dark max-w-3xl mx-auto">
          {{ $t('guide.subtitle') }}
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Visa & Legal -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-spain-red transition-all duration-300 border border-spain-yellow/30 hover:border-spain-red/50">
          <div class="w-16 h-16 bg-spain-red/10 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-spain-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-spain-navy mb-3">{{ $t('guide.visa.title') }}</h3>
          <p class="text-spain-gray-dark mb-4">{{ $t('guide.visa.description') }}</p>
          <ul class="space-y-2 text-sm text-spain-gray-dark">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-spain-yellow-dark mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ $t('guide.visa.checklist1') }}
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-spain-yellow-dark mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ $t('guide.visa.checklist2') }}
            </li>
          </ul>
        </div>

        <!-- Housing -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-spain-yellow transition-all duration-300 border border-spain-yellow/30 hover:border-spain-yellow/70">
          <div class="w-16 h-16 bg-spain-yellow/10 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-spain-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-spain-navy mb-3">{{ $t('guide.housing.title') }}</h3>
          <p class="text-spain-gray-dark mb-4">{{ $t('guide.housing.description') }}</p>
          <ul class="space-y-2 text-sm text-spain-gray-dark">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-spain-yellow-dark mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ $t('guide.housing.checklist1') }}
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-spain-yellow-dark mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ $t('guide.housing.checklist2') }}
            </li>
          </ul>
        </div>

        <!-- Daily Life -->
        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-spain-red transition-all duration-300 border border-spain-yellow/30 hover:border-spain-red/50">
          <div class="w-16 h-16 bg-spain-orange/10 rounded-2xl flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-spain-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-spain-navy mb-3">{{ $t('guide.daily.title') }}</h3>
          <p class="text-spain-gray-dark mb-4">{{ $t('guide.daily.description') }}</p>
          <ul class="space-y-2 text-sm text-spain-gray-dark">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-spain-yellow-dark mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ $t('guide.daily.checklist1') }}
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-spain-yellow-dark mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              {{ $t('guide.daily.checklist2') }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-spain rounded-2xl p-8 shadow-spain-red border border-spain-yellow/50 max-w-2xl mx-auto">
          <h3 class="!text-2xl font-bold text-white mb-4">{{ $t('guide.cta.title') }}</h3>
          <p class="text-spain-cream mb-6">{{ $t('guide.cta.description') }}</p>
          <button class="bg-white hover:bg-spain-cream text-spain-red font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            {{ $t('guide.cta.button') }}
          </button>
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
