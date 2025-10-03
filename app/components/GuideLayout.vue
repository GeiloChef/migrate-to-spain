<template>
  <div class="min-h-screen bg-spain-cream pb-0 md:pb-12">
    <GuideHeader 
      :title-key="titleKey"
      :description-key="descriptionKey"
      :mobile-title="mobileTitle"
      :mobile-description="mobileDescription"
    />

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto lg:mr-80 rounded-b-3xl shadow-2xl mt-8">
      <!-- Hero Section -->
      <div class="relative -mt-6 md:mt-0">
        <!-- Background Image -->
        <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
          <img 
            :src="heroImage" 
            :alt="heroImageAlt"
            class="w-full h-full object-cover"
          />
          <!-- Dark Overlay for Better Text Readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
          <div class="text-white max-w-4xl">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
              Guide
            </div>
            <h1 class="!text-3xl md:!text-4xl lg:!text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
              {{ $t(heroTitleKey) }}
            </h1>
            <p v-if="showDescription !== false" class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              {{ $t(heroDescriptionKey) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
        <slot />
      </div>
    </div>
    
    <!-- Table of Contents -->
    <TableOfContents />
    
    <!-- Back to Top Button -->
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
interface Props {
  titleKey: string
  descriptionKey: string
  mobileTitle: string
  mobileDescription: string
  heroImage: string
  heroImageAlt: string
  heroTitleKey: string
  heroDescriptionKey: string
  showDescription?: boolean
}

defineProps<Props>()
</script>
