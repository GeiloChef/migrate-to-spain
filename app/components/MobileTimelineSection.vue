<template>
  <section class="block md:hidden">
    <!-- Mobile Timeline Container with Full Screen Cards -->
    <div class="relative h-screen overflow-hidden">
      <!-- Timeline Steps Container with Scroll Snap -->
      <div 
        ref="timelineContainer"
        class="flex h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        @scroll="handleScroll"
      >
        
        <!-- Intro Page -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <div class="relative w-full h-full overflow-hidden">
            <!-- Background Image -->
            <div class="absolute inset-0 w-full h-full">
              <div 
                class="w-full h-full bg-cover bg-center bg-no-repeat"
                style="background-image: url('https://plus.unsplash.com/premium_photo-1754558564572-cbd1a5efe62a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              ></div>
              <!-- Dark Overlay for Better Text Readability -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10"></div>
            </div>
            
            <!-- Content -->
            <div class="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-8">
              <!-- Main Title -->
              <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                {{ $t('story.title') }}
              </h1>
              
              <!-- Subtitle -->
              <p class="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed drop-shadow-md">
                {{ $t('story.mobileIntro.subtitle') }}
              </p>
              
            </div>
          </div>
        </div>
        
        <!-- Step 1: Der Traum von Spanien -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="1"
            :title="$t('story.timeline.step1.title')"
            :description="$t('story.timeline.step1.description')"
            :preview-points="[
              $t('story.timeline.step1.preview.point1'),
              $t('story.timeline.step1.preview.point2'),
              $t('story.timeline.step1.preview.point3')
            ]"
            :date="$t('story.timeline.step1.date')"
            background-image="/images/timeline/dream-of-spain.png"
            :timeline-url="'/timeline/the-dream-of-spain'"
          />
        </div>
        
        <!-- Step 2: Erste Recherchen & Machbarkeit -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="2"
            :title="$t('story.timeline.step2.title')"
            :description="$t('story.timeline.step2.description')"
            :preview-points="[
              $t('story.timeline.step2.preview.point1'),
              $t('story.timeline.step2.preview.point2'),
              $t('story.timeline.step2.preview.point3')
            ]"
            :date="$t('story.timeline.step2.date')"
            background-image="/images/timeline/first-research-hero.png"
            :timeline-url="'/timeline/first-research-feasibility'"
          />
        </div>
        
        <!-- Step 3: Erste Schritte - Spanisch lernen -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="3"
            :title="$t('story.timeline.step3.title')"
            :description="$t('story.timeline.step3.description')"
            :preview-points="[
              $t('story.timeline.step3.preview.point1'),
              $t('story.timeline.step3.preview.point2'),
              $t('story.timeline.step3.preview.point3')
            ]"
            :date="$t('story.timeline.step3.date')"
            background-image="/images/timeline/learning-spanish.png"
            :timeline-url="'/timeline/learning-spanish'"
          />
        </div>
        
        <!-- Step 4: Spanien entdecken -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="4"
            :title="$t('story.timeline.step4.title')"
            :description="$t('story.timeline.step4.description')"
            :preview-points="[
              $t('story.timeline.step4.preview.point1'),
              $t('story.timeline.step4.preview.point2'),
              $t('story.timeline.step4.preview.point3')
            ]"
            :date="$t('story.timeline.step4.date')"
            background-image="https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            :timeline-url="'/timeline/discovering-spain'"
          />
        </div>
        
        <!-- Step 5: Die Entscheidung für eine Region -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="5"
            :title="$t('story.timeline.step5.title')"
            :description="$t('story.timeline.step5.description')"
            :preview-points="[
              $t('story.timeline.step5.preview.point1'),
              $t('story.timeline.step5.preview.point2'),
              $t('story.timeline.step5.preview.point3')
            ]"
            :date="$t('story.timeline.step5.date')"
            background-image="/images/timeline/region-decision.png"
            :timeline-url="'/timeline/region-decision'"
          />
        </div>
        
        <!-- Step 6: Der konkrete Plan: Wohnung kaufen -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="6"
            :title="$t('story.timeline.step6.title')"
            :description="$t('story.timeline.step6.description')"
            :preview-points="[
              $t('story.timeline.step6.preview.point1'),
              $t('story.timeline.step6.preview.point2'),
              $t('story.timeline.step6.preview.point3')
            ]"
            :date="$t('story.timeline.step6.date')"
            background-image="/images/timeline/visiting-a-property.png"
            :timeline-url="'/timeline/apartment-search'"
          />
        </div>
        
        <!-- Step 7: Bürokratie & Formalitäten -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="7"
            :title="$t('story.timeline.step7.title')"
            :description="$t('story.timeline.step7.description')"
            :preview-points="[
              $t('story.timeline.step7.preview.point1'),
              $t('story.timeline.step7.preview.point2'),
              $t('story.timeline.step7.preview.point3')
            ]"
            :date="$t('story.timeline.step7.date')"
            background-image="/images/timeline/bureaucracy-laptop.png"
            :timeline-url="'/timeline/bureaucracy-prerequisites'"
          />
        </div>
        
        <!-- Step 8: Der Immobilienkauf -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="8"
            :title="$t('story.timeline.step8.title')"
            :description="$t('story.timeline.step8.description')"
            :preview-points="[
              $t('story.timeline.step8.preview.point1'),
              $t('story.timeline.step8.preview.point2'),
              $t('story.timeline.step8.preview.point3')
            ]"
            :date="$t('story.timeline.step8.date')"
            background-image="/images/timeline/couple-visiting-property.png"
            :timeline-url="'/timeline/property-purchase'"
          />
        </div>
        
        <!-- Step 9: Gestoría – Hilfe im Behördendschungel -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="9"
            :title="$t('story.timeline.step9.title')"
            :description="$t('story.timeline.step9.description')"
            :preview-points="[
              $t('story.timeline.step9.preview.point1'),
              $t('story.timeline.step9.preview.point2'),
              $t('story.timeline.step9.preview.point3')
            ]"
            :date="$t('story.timeline.step9.date')"
            background-image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            :timeline-url="'/timeline/gestoria'"
          />
        </div>
        
        <!-- Step 10: Sicherheiten & Versicherungen -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="10"
            :title="$t('story.timeline.step10.title')"
            :description="$t('story.timeline.step10.description')"
            :preview-points="[
              $t('story.timeline.step10.preview.point1'),
              $t('story.timeline.step10.preview.point2'),
              $t('story.timeline.step10.preview.point3')
            ]"
            :date="$t('story.timeline.step10.date')"
            background-image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            :timeline-url="'/timeline/insurance'"
          />
        </div>
        
        <!-- Step 11: Der erste Aufenthalt in der eigenen Wohnung -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="11"
            :title="$t('story.timeline.step11.title')"
            :description="$t('story.timeline.step11.description')"
            :preview-points="[
              $t('story.timeline.step11.preview.point1'),
              $t('story.timeline.step11.preview.point2'),
              $t('story.timeline.step11.preview.point3')
            ]"
            :date="$t('story.timeline.step11.date')"
            background-image="https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            :timeline-url="'/timeline/first-apartment-stay'"
          />
        </div>
        
        <!-- Step 12: Ausblick: Die endgültige Migration -->
        <div class="w-full h-full flex-shrink-0 snap-start">
          <MobileTimelineCard
            :step-number="12"
            :title="$t('story.timeline.step12.title')"
            :description="$t('story.timeline.step12.description')"
            :preview-points="[
              $t('story.timeline.step12.preview.point1'),
              $t('story.timeline.step12.preview.point2'),
              $t('story.timeline.step12.preview.point3')
            ]"
            :date="$t('story.timeline.step12.date')"
            background-image="https://images.unsplash.com/photo-1741795854922-87217b375e79?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            :timeline-url="'/timeline/final-migration'"
          />
        </div>
      </div>
      
      <!-- Mobile Navigation Indicators -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        <button
          v-for="step in 13"
          :key="step"
          :class="[
            'w-2 h-2 rounded-full transition-all duration-300',
            currentStep === step 
              ? 'bg-spain-red w-6' 
              : 'bg-white/50 hover:bg-white/70'
          ]"
          @click="goToStep(step)"
        />
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const timelineContainer = ref(null)
const currentStep = ref(1)

// Handle scroll to update current step
const handleScroll = () => {
  if (!timelineContainer.value) return
  
  const container = timelineContainer.value
  const scrollLeft = container.scrollLeft
  const cardWidth = container.clientWidth
  const step = Math.round(scrollLeft / cardWidth) + 1
  
  currentStep.value = Math.min(Math.max(step, 1), 13)
}

// Navigate to specific step
const goToStep = (step) => {
  if (!timelineContainer.value) return
  
  const container = timelineContainer.value
  const cardWidth = container.clientWidth
  container.scrollTo({
    left: (step - 1) * cardWidth,
    behavior: 'smooth'
  })
}

// Touch/swipe handling
let startX = 0
let startY = 0
let isScrolling = false

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX
  startY = e.touches[0].clientY
  isScrolling = false
}

const handleTouchMove = (e) => {
  if (!isScrolling) {
    const deltaX = Math.abs(e.touches[0].clientX - startX)
    const deltaY = Math.abs(e.touches[0].clientY - startY)
    isScrolling = deltaX > deltaY
  }
}

const handleTouchEnd = (e) => {
  if (!isScrolling || !timelineContainer.value) return
  
  const endX = e.changedTouches[0].clientX
  const deltaX = startX - endX
  const threshold = 50
  
  if (Math.abs(deltaX) > threshold) {
    if (deltaX > 0 && currentStep.value < 13) {
      // Swipe left - next step
      goToStep(currentStep.value + 1)
    } else if (deltaX < 0 && currentStep.value > 1) {
      // Swipe right - previous step
      goToStep(currentStep.value - 1)
    }
  }
}

onMounted(() => {
  if (timelineContainer.value) {
    timelineContainer.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    timelineContainer.value.addEventListener('touchmove', handleTouchMove, { passive: true })
    timelineContainer.value.addEventListener('touchend', handleTouchEnd, { passive: true })
  }
})

onUnmounted(() => {
  if (timelineContainer.value) {
    timelineContainer.value.removeEventListener('touchstart', handleTouchStart)
    timelineContainer.value.removeEventListener('touchmove', handleTouchMove)
    timelineContainer.value.removeEventListener('touchend', handleTouchEnd)
  }
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-start {
  scroll-snap-align: start;
}
</style>
