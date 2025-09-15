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
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/5"></div>
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
        
        <!-- Timeline Steps -->
        <div 
          v-for="step in timelineSteps" 
          :key="step.stepNumber"
          class="w-full h-full flex-shrink-0 snap-start"
        >
          <TimelineCard
            :step-number="step.stepNumber"
            :title="$t(step.titleKey)"
            :description="$t(step.descriptionKey)"
            :preview-points="step.previewPointsKeys.map(key => $t(key))"
            :date="$t(step.dateKey)"
            :background-image="step.backgroundImage"
            :timeline-url="step.timelineUrl"
            :cta-text="$t('common.readMore')"
          />
        </div>
      </div>
      
      <!-- Mobile Navigation Indicators -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        <button
          v-for="step in timelineSteps.length + 1"
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

const {timelineSteps} = useTimelineSteps();

const timelineContainer = ref(null)
const currentStep = ref(1)

// Handle scroll to update current step
const handleScroll = () => {
  if (!timelineContainer.value) return
  
  const container = timelineContainer.value
  const scrollLeft = container.scrollLeft
  const cardWidth = container.clientWidth
  const step = Math.round(scrollLeft / cardWidth) + 1
  
  currentStep.value = Math.min(Math.max(step, 1), timelineSteps.length + 1)
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
    if (deltaX > 0 && currentStep.value < timelineSteps.length + 1) {
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

  console.log(timelineSteps)
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
