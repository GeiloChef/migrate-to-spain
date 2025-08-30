<template>
  <section class="py-20 px-6 bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="!text-4xl font-bold text-spain-navy mb-4">
          {{ $t('story.title') }}
        </h2>
        <p class="!text-xl text-spain-gray-dark max-w-3xl mx-auto">
          {{ $t('story.subtitle') }}
        </p>
      </div>
      
      <!-- Timeline Container with Horizontal Scroll -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-spain-red via-spain-yellow to-spain-red transform -translate-y-1/2 z-0"></div>
        
        <!-- Timeline Steps with Horizontal Scroll - Added padding and adjusted container -->
        <div class="relative z-10 flex gap-8 lg:gap-12 items-start overflow-x-auto pb-12 px-8 scrollbar-hide">
          <!-- Step 1: Der Traum von Spanien -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-red rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-red rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-navy">{{ $t('story.timeline.step1.date') }}</span>
            </div>
            
            <!-- Story Card -->
            <div class="w-80 transform group-hover:scale-105 transition-all duration-500">
              <StoryCard 
                :step-number="1"
                :title="$t('story.timeline.step1.title')"
                :description="$t('story.timeline.step1.description')"
                :preview-points="[
                  $t('story.timeline.step1.preview.point1'),
                  $t('story.timeline.step1.preview.point2'),
                  $t('story.timeline.step1.preview.point3')
                ]"
              />
            </div>
          </div>
          
          <!-- Step 2: Planning Phase -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-yellow rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-yellow rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step2.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Step 3: Erste Schritte - Spanisch lernen -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-orange rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-orange rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-navy">{{ $t('story.timeline.step4.date') }}</span>
            </div>
            
            <!-- Story Card -->
            <div class="w-80 transform group-hover:scale-105 transition-all duration-500">
              <StoryCard 
                :step-number="3"
                :title="$t('story.timeline.step4.title')"
                :description="$t('story.timeline.step4.description')"
                :preview-points="[
                  $t('story.timeline.step4.preview.point1'),
                  $t('story.timeline.step4.preview.point2'),
                  $t('story.timeline.step4.preview.point3')
                ]"
              />
            </div>
          </div>
          
          <!-- Step 4: Implementation -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-red rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-red rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step3.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Step 5: Adaptation -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-yellow rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-yellow rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step5.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Step 6: Integration -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-orange rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-orange rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step6.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Step 7: New Life -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-red rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-red rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step7.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Step 8: Future -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-yellow rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-yellow rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step8.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
          
          <!-- Step 9: Reflection -->
          <div class="flex flex-col items-center group flex-shrink-0">
            <!-- Timeline Dot -->
            <div class="w-8 h-8 bg-spain-orange rounded-full border-4 border-white shadow-lg mb-4 group-hover:scale-125 transition-transform duration-300 relative">
              <div class="absolute inset-0 bg-spain-orange rounded-full animate-ping opacity-20"></div>
            </div>
            
            <!-- Date Badge -->
            <div class="bg-white px-4 py-2 rounded-full shadow-md mb-6 text-center">
              <span class="text-sm font-semibold text-spain-gray-dark">{{ $t('story.timeline.step9.date') }}</span>
            </div>
            
            <!-- Placeholder Card -->
            <div class="w-80 h-64 bg-white/50 rounded-2xl border-2 border-dashed border-spain-gray-light flex items-center justify-center">
              <div class="text-center text-spain-gray-dark">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p class="font-semibold">{{ $t('story.placeholder.title') }}</p>
                <p class="text-sm">{{ $t('story.placeholder.description') }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="text-center mt-8 text-spain-gray-dark">
          <p class="text-sm">← Scroll horizontal um alle Schritte zu sehen →</p>
        </div>
      </div>
      
      <!-- Call to Action -->
      <div class="text-center mt-20">
        <div class="bg-gradient-spain rounded-2xl p-8 shadow-spain-red border border-spain-yellow/50 max-w-2xl mx-auto">
          <h3 class="!text-2xl font-bold text-white mb-4">{{ $t('story.cta.title') }}</h3>
          <p class="text-spain-cream mb-6">{{ $t('story.cta.description') }}</p>
          <button class="bg-white hover:bg-spain-cream text-spain-red font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            {{ $t('story.cta.button') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import the StoryCard component
import StoryCard from './StoryCard.vue'
</script>

<style scoped>
/* Custom animations for timeline */
@keyframes slideInFromBottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}

/* Smooth scrolling */
.overflow-x-auto {
  scroll-behavior: smooth;
}

/* Apply animations to timeline elements */
.timeline-step {
  animation: slideInFromBottom 0.6s ease-out forwards;
}

.timeline-step:nth-child(1) { animation-delay: 0.1s; }
.timeline-step:nth-child(2) { animation-delay: 0.2s; }
.timeline-step:nth-child(3) { animation-delay: 0.3s; }
.timeline-step:nth-child(4) { animation-delay: 0.4s; }
.timeline-step:nth-child(5) { animation-delay: 0.5s; }
.timeline-step:nth-child(6) { animation-delay: 0.6s; }
.timeline-step:nth-child(7) { animation-delay: 0.7s; }
.timeline-step:nth-child(8) { animation-delay: 0.8s; }
.timeline-step:nth-child(9) { animation-delay: 0.9s; }

/* Hover effects for timeline dots */
.timeline-dot:hover {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
