<template>
  <TimelineLayout
    :previous-step="'/timeline/first-research-feasibility'"
    :next-step="'/timeline/discovering-spain'"
    :previous-step-name="$t('first-research-feasibility.title')"
    :next-step-name="$t('discovering-spain.title')"
  >
    <!-- Hero Section -->
    <LearningSpanishHeroSection />

    <!-- Main Content -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Introduction Section -->
      <LearningSpanishIntroductionSection />

      <!-- Duolingo Section -->
      <LearningSpanishDuolingoSection />

      <!-- Books Section -->
      <LearningSpanishBooksSection />

      <!-- Flashcards Section -->
      <LearningSpanishFlashcardsSection />

      <!-- Lingolia Section -->
      <LearningSpanishLingoliaSection />

      <!-- Speaking Section -->
      <LearningSpanishSpeakingSection />

      <!-- Current Status Section -->
      <LearningSpanishCurrentStatusSection />
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
