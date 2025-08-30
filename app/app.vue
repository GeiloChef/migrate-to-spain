<template>
  <UApp>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <!-- Language Switcher -->
      <div class="absolute top-6 right-6 z-20">
        <div class="flex space-x-2">
          <button 
            @click="$i18n.setLocale('en')" 
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              $i18n.locale === 'en' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'bg-white/20 text-white hover:bg-white/30'
            ]"
          >
            EN
          </button>
          <button 
            @click="$i18n.setLocale('de')" 
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              $i18n.locale === 'de' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'bg-white/20 text-white hover:bg-white/30'
            ]"
          >
            DE
          </button>
          <button 
            @click="$i18n.setLocale('es')" 
            :class="[
              'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
              $i18n.locale === 'es' 
                ? 'bg-white text-gray-900 shadow-lg' 
                : 'bg-white/20 text-white hover:bg-white/30'
            ]"
          >
            ES
          </button>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Beautiful Spanish landscape with mountains and Mediterranean sea"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-black/40"></div>
        </div>
        
        <!-- Animated Content -->
        <div class="relative z-10 text-center text-white px-12 md:px-20 lg:px-32 max-w-6xl mx-auto">
          <h1 class="!text-8xl md:!text-9xl lg:!text-10xl font-black !mb-16 animate-fade-in-up tracking-tight">
            <span class="block animate-slide-in-left">{{ $t('hero.title.line1') }}</span>
            <span class="block animate-slide-in-right">{{ $t('hero.title.line2') }}</span>
          </h1>
          
          <p class="text-xl md:text-2xl !mb-16 animate-fade-in-up-delay max-w-4xl mx-auto leading-relaxed">
            {{ $t('hero.subtitle') }}
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up-delay-2">
            <UButton 
              size="lg" 
              color="white" 
              variant="solid"
              class="text-gray-900 font-semibold px-8 py-4 text-lg bg-white hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              {{ $t('hero.buttons.primary') }}
            </UButton>
            <UButton 
              size="lg" 
              variant="outline" 
              class="border-2 border-white text-white font-semibold px-8 py-4 text-lg bg-white/10 backdrop-blur-sm hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              {{ $t('hero.buttons.secondary') }}
            </UButton>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div class="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

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
/* Custom animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slide-in-right {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

.animate-slide-in-left {
  animation: slide-in-left 1.2s ease-out forwards;
}

.animate-slide-in-right {
  animation: slide-in-right 1.2s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-up-delay {
  animation: fade-in-up 1s ease-out 0.6s forwards;
  opacity: 0;
}

.animate-fade-in-up-delay-2 {
  animation: fade-in-up 1s ease-out 0.9s forwards;
  opacity: 0;
}

/* Responsive text sizing */
@media (max-width: 768px) {
  .text-8xl {
    font-size: 4.5rem;
  }
  .text-9xl {
    font-size: 5rem;
  }
  .text-10xl {
    font-size: 6rem;
  }
}
</style>
