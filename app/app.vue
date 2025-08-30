<template>
  <UApp>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <!-- Language Switcher -->
      <LanguageSwitcher />

      <!-- Hero Section -->
      <HeroSection />

      <!-- Features Section -->
      <section class="py-20 px-6 bg-white">
        <div class="max-w-6xl mx-auto">
          <h2 class="!text-4xl font-bold text-center text-gray-900 mb-16">
            {{ $t('features.title') }}
          </h2>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center group">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="!text-xl font-semibold text-gray-900 mb-3">{{ $t('features.visa.title') }}</h3>
              <p class="text-gray-600">{{ $t('features.visa.description') }}</p>
            </div>
            
            <div class="text-center group">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 class="!text-xl font-semibold text-gray-900 mb-3">{{ $t('features.cities.title') }}</h3>
              <p class="text-gray-600">{{ $t('features.cities.description') }}</p>
            </div>
            
            <div class="text-center group">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 class="!text-xl font-semibold text-gray-900 mb-3">{{ $t('features.cost.title') }}</h3>
              <p class="text-gray-600">{{ $t('features.cost.description') }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </UApp>
</template>

<style scoped>
/* Component-specific styles can be added here if needed */
</style>
