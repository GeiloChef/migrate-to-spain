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
          <TimelineStep :step-number="1" :date="$t('story.timeline.step1.date')">
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
          </TimelineStep>
          
          <!-- Step 2: Erste Recherchen & Machbarkeit -->
          <TimelineStep :step-number="2" :date="$t('story.timeline.step2.date')">
            <StoryCard 
              :step-number="2"
              :title="$t('story.timeline.step2.title')"
              :description="$t('story.timeline.step2.description')"
              :preview-points="[
                $t('story.timeline.step2.preview.point1'),
                $t('story.timeline.step2.preview.point2'),
                $t('story.timeline.step2.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 3: Erste Schritte - Spanisch lernen -->
          <TimelineStep :step-number="3" :date="$t('story.timeline.step3.date')">
            <StoryCard 
              :step-number="3"
              :title="$t('story.timeline.step3.title')"
              :description="$t('story.timeline.step4.description')"
              :preview-points="[
                $t('story.timeline.step3.preview.point1'),
                $t('story.timeline.step3.preview.point2'),
                $t('story.timeline.step3.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 4: Spanien entdecken -->
          <TimelineStep :step-number="4" :date="$t('story.timeline.step4.date')">
            <StoryCard 
              :step-number="4"
              :title="$t('story.timeline.step4.title')"
              :description="$t('story.timeline.step4.description')"
              :preview-points="[
                $t('story.timeline.step4.preview.point1'),
                $t('story.timeline.step4.preview.point2'),
                $t('story.timeline.step4.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 5: Adaptation -->
          <TimelineStep :step-number="5" :date="$t('story.timeline.step5.date')">
            <TimelinePlaceholder />
          </TimelineStep>
          
          <!-- Step 6: Integration -->
          <TimelineStep :step-number="6" :date="$t('story.timeline.step6.date')">
            <TimelinePlaceholder />
          </TimelineStep>
          
          <!-- Step 7: New Life -->
          <TimelineStep :step-number="7" :date="$t('story.timeline.step7.date')">
            <TimelinePlaceholder />
          </TimelineStep>
          
          <!-- Step 8: Future -->
          <TimelineStep :step-number="8" :date="$t('story.timeline.step8.date')">
            <TimelinePlaceholder />
          </TimelineStep>
          
          <!-- Step 9: Reflection -->
          <TimelineStep :step-number="9" :date="$t('story.timeline.step9.date')">
            <TimelinePlaceholder />
          </TimelineStep>
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
// Import components
import StoryCard from './StoryCard.vue'
import TimelineStep from './TimelineStep.vue'
import TimelinePlaceholder from './TimelinePlaceholder.vue'
</script>

<style scoped>
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
</style>
