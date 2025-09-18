<template>
  <TimelineLayout 
    :next-step="'/timeline/first-research-feasibility'"
    :next-step-name="$t('story.timeline.step2.title')"
  >
    <!-- Hero Section with Full-Size Image -->
    <div class="relative -mt-6 md:-mt-12">
      <!-- Full-Size Background Image -->
      <div class="w-full h-[300px] md:h-[500px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1557930335-abd211a9cd43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Sunset at the beach - typical Spain feeling"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-4 md:p-8 lg:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-white/30">
            {{ $t('the-dream-of-spain.hero.badge') }}
          </div>
          <h1 class="!text-3xl md:!text-5xl lg:!text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {{ $t('the-dream-of-spain.title') }}
          </h1>
          <p class="!text-base md:!text-xl lg:!text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('the-dream-of-spain.hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Story Text -->
    <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: The Beginning -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <h2 class="!text-xl md:!text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            {{ $t('the-dream-of-spain.sections.beginning.title') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div class="space-y-3 md:space-y-4 text-gray-700 leading-relaxed">
              <p class="mb-3 md:mb-4 text-sm md:text-base">{{ $t('the-dream-of-spain.sections.beginning.paragraph1') }}</p>
              <p class="text-sm md:text-base">{{ $t('the-dream-of-spain.sections.beginning.paragraph2') }}</p>
            </div>
            <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="/images/timeline/beginning-dream-office.png" 
                alt="Mann im Büro träumt von Spanien - Regen draußen, Strand im Gedanken"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2: Personal Turning Point -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <h2 class="!text-xl md:!text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            {{ $t('the-dream-of-spain.sections.turningPoint.title') }}
          </h2>
          <div class="grid gap-6 md:gap-8 items-center mb-4 md:mb-6">
            <div class="space-y-3 md:space-y-4 text-gray-700 leading-relaxed">
              <p class="mb-3 md:mb-4 text-sm md:text-base">{{ $t('the-dream-of-spain.sections.turningPoint.paragraph1') }}</p>
              <p class="text-sm md:text-base">{{ $t('the-dream-of-spain.sections.turningPoint.paragraph2') }}</p>
            </div>
          </div>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-4 md:p-6 my-6 md:my-8 rounded-r-lg">
            <p class="font-medium text-gray-900 mb-2 text-base md:text-lg">{{ $t('the-dream-of-spain.sections.turningPoint.question') }}</p>
            <p class="text-orange-700 font-medium text-base md:text-lg">{{ $t('the-dream-of-spain.sections.turningPoint.answer') }}</p>
          </div>
        </div>
      </div>

      <!-- Section 3: First Research -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <h2 class="!text-xl md:!text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            {{ $t('the-dream-of-spain.sections.research.title') }}
          </h2>
          <div class="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div class="h-48 md:h-64 rounded-xl overflow-hidden shadow-md order-2 md:order-1">
              <img 
                src="/images/timeline/comida-sin-gluten.png" 
                alt="Spanischer Supermarkt mit glutenfreien Produkten - Tortillas, Brot, Kekse und Kuchen"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="space-y-3 md:space-y-4 text-gray-700 leading-relaxed order-1 md:order-2">
              <p class="mb-3 md:mb-4 text-sm md:text-base">{{ $t('the-dream-of-spain.sections.research.paragraph1') }}</p>
              <p class="text-sm md:text-base">{{ $t('the-dream-of-spain.sections.research.paragraph2') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Fears and Doubts -->
      <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
        <div class="px-4 py-8 md:px-6 md:py-16">
          <h2 class="!text-xl md:!text-2xl font-bold text-gray-900 mb-4 md:mb-6">
            {{ $t('the-dream-of-spain.sections.fears.title') }}
          </h2>
          <div class="grid gap-6 md:gap-8 items-center mb-6 md:mb-8">
            <div class="space-y-3 md:space-y-4 text-gray-700 leading-relaxed">
              <p class="text-base md:text-lg text-gray-700">
                {{ $t('the-dream-of-spain.sections.fears.subtitle') }}
              </p>
            </div>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 md:p-6 border border-red-100 hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-red-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Icon name="heroicons:question-mark-circle" class="w-5 h-5 md:w-6 md:h-6 text-red-600" />
              </div>
              <h3 class="!text-base md:!text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                {{ $t('the-dream-of-spain.sections.fears.fear1.title') }}
              </h3>
              <p class="text-gray-700 leading-relaxed text-sm md:text-base">{{ $t('the-dream-of-spain.sections.fears.fear1.description') }}</p>
            </div>
            
            <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 md:p-6 border border-yellow-100 hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Icon name="heroicons:language" class="w-5 h-5 md:w-6 md:h-6 text-yellow-600" />
              </div>
              <h3 class="!text-base md:!text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                {{ $t('the-dream-of-spain.sections.fears.fear2.title') }}
              </h3>
              <p class="text-gray-700 leading-relaxed text-sm md:text-base">{{ $t('the-dream-of-spain.sections.fears.fear2.description') }}</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 md:p-6 border border-blue-100 hover:shadow-md transition-all duration-300">
              <div class="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Icon name="heroicons:language" class="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <h3 class="!text-base md:!text-lg font-semibold text-gray-900 mb-2 md:mb-3">
                {{ $t('the-dream-of-spain.sections.fears.fear3.title') }}
              </h3>
              <p class="text-gray-700 leading-relaxed text-sm md:text-base">{{ $t('the-dream-of-spain.sections.fears.fear3.description') }}</p>
              </div>
            </div>
          
          <p class="text-gray-600 italic text-center text-base md:text-lg">
            {{ $t('the-dream-of-spain.sections.fears.conclusion') }}
          </p>
        </div>
      </div>

    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'The Dream of Spain - Timeline Step 1',
  meta: [
    { name: 'description', content: 'Discover how the dream of moving to Spain began - the first thoughts, wishes, and fears that started this journey.' }
  ]
})
</script>
