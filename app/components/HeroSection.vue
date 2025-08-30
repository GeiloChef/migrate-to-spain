<template>
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
      <h1 class="!text-6xl md:!text-7xl lg:!text-8xl font-black !mb-16 animate-fade-in-up tracking-tight">
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
</template>

<script setup>
// Component logic can be added here if needed
</script>

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
</style>
