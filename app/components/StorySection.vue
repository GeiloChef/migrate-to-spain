<template>
  <section class="py-20 px-6 bg-gradient-to-br from-spain-cream to-spain-yellow/20">
    <div>
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
        
        <!-- Timeline Steps with Horizontal Scroll - No y-axis padding, only horizontal -->
        <div class="relative z-10 flex gap-8 lg:gap-12 items-start overflow-x-auto px-8 scrollbar-hide">
          
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
          
          <!-- Step 5: Die Entscheidung für eine Region -->
          <TimelineStep :step-number="5" :date="$t('story.timeline.step5.date')">
            <StoryCard 
              :step-number="5"
              :title="$t('story.timeline.step5.title')"
              :description="$t('story.timeline.step5.description')"
              :preview-points="[
                $t('story.timeline.step5.preview.point1'),
                $t('story.timeline.step5.preview.point2'),
                $t('story.timeline.step5.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 6: Der konkrete Plan: Wohnung kaufen -->
          <TimelineStep :step-number="6" :date="$t('story.timeline.step6.date')">
            <StoryCard 
              :step-number="6"
              :title="$t('story.timeline.step6.title')"
              :description="$t('story.timeline.step6.description')"
              :preview-points="[
                $t('story.timeline.step6.preview.point1'),
                $t('story.timeline.step6.preview.point2'),
                $t('story.timeline.step6.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 7: Bürokratie & Formalitäten -->
          <TimelineStep :step-number="7" :date="$t('story.timeline.step7.date')">
            <StoryCard 
              :step-number="7"
              :title="$t('story.timeline.step7.title')"
              :description="$t('story.timeline.step7.description')"
              :preview-points="[
                $t('story.timeline.step7.preview.point1'),
                $t('story.timeline.step7.preview.point2'),
                $t('story.timeline.step7.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 8: Der Immobilienkauf -->
          <TimelineStep :step-number="8" :date="$t('story.timeline.step8.date')">
            <StoryCard 
              :step-number="8"
              :title="$t('story.timeline.step8.title')"
              :description="$t('story.timeline.step8.description')"
              :preview-points="[
                $t('story.timeline.step8.preview.point1'),
                $t('story.timeline.step8.preview.point2'),
                $t('story.timeline.step8.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 9: Gestoría – Hilfe im Behördendschungel -->
          <TimelineStep :step-number="9" :date="$t('story.timeline.step9.date')">
            <StoryCard 
              :step-number="9"
              :title="$t('story.timeline.step9.title')"
              :description="$t('story.timeline.step9.description')"
              :preview-points="[
                $t('story.timeline.step9.preview.point1'),
                $t('story.timeline.step9.preview.point2'),
                $t('story.timeline.step9.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 10: Sicherheiten & Versicherungen -->
          <TimelineStep :step-number="10" :date="$t('story.timeline.step10.date')">
            <StoryCard 
              :step-number="10"
              :title="$t('story.timeline.step10.title')"
              :description="$t('story.timeline.step10.description')"
              :preview-points="[
                $t('story.timeline.step10.preview.point1'),
                $t('story.timeline.step10.preview.point2'),
                $t('story.timeline.step10.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 11: Der erste Aufenthalt in der eigenen Wohnung -->
          <TimelineStep :step-number="11" :date="$t('story.timeline.step11.date')">
            <StoryCard 
              :step-number="11"
              :title="$t('story.timeline.step11.title')"
              :description="$t('story.timeline.step11.description')"
              :preview-points="[
                $t('story.timeline.step11.preview.point1'),
                $t('story.timeline.step11.preview.point2'),
                $t('story.timeline.step11.preview.point3')
              ]"
            />
          </TimelineStep>
          
          <!-- Step 12: Ausblick: Die endgültige Migration -->
          <TimelineStep :step-number="12" :date="$t('story.timeline.step12.date')">
            <StoryCard 
              :step-number="12"
              :title="$t('story.timeline.step12.title')"
              :description="$t('story.timeline.step12.description')"
              :preview-points="[
                $t('story.timeline.step12.preview.point1'),
                $t('story.timeline.step12.preview.point2'),
                $t('story.timeline.step12.preview.point3')
              ]"
            />
          </TimelineStep>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="text-center mt-8 text-spain-gray-dark">
          <p class="text-sm">← Scroll horizontal um alle Schritte zu sehen →</p>
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
