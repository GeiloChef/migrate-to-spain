<template>
  <TimelineLayout
    :previous-step="'/timeline/first-research-feasibility'"
    :next-step="'/timeline/discovering-spain'"
    :previous-step-name="$t('first-research-feasibility.title')"
    :next-step-name="$t('discovering-spain.title')"
  >
    <!-- Hero Section -->
    <TimelineLearningSpanishHeroSection />

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Introduction Section -->
      <TimelineLearningSpanishIntroductionSection />

      <!-- Duolingo Section -->
      <TimelineLearningSpanishDuolingoSection />

      <!-- Books Section -->
      <TimelineLearningSpanishBooksSection />

      <!-- Flashcards Section -->
      <TimelineLearningSpanishFlashcardsSection />

      <!-- Lingolia Section -->
      <TimelineLearningSpanishLingoliaSection />

      <!-- Speaking Section -->
      <TimelineLearningSpanishSpeakingSection />

      <!-- Current Status Section -->
      <TimelineLearningSpanishCurrentStatusSection />
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: () => $t('learning-spanish.title') + ' - Timeline Step 3',
  meta: [
    { name: 'description', content: () => $t('learning-spanish.description') }
  ]
})
</script>
