<template>
  <TimelineLayout
    :title="$t('story.timeline.step3.title')"
    :date="$t('story.timeline.step3.date')"
    :previous-step="'/timeline/first-research-feasibility'"
    :next-step="'/timeline/spanien-entdecken'"
  >
    <!-- Hero Section -->
    <LearningSpanishHeroSection />

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
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
  title: 'Erste Schritte: Spanisch lernen - Timeline Step 3',
  meta: [
    { name: 'description', content: 'Warum Spanisch lernen so wichtig ist und wie ich es angegangen bin - von Duolingo bis zu Büchern und Karteikarten.' }
  ]
})
</script>
