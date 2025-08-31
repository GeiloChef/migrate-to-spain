<template>
  <div class="min-h-screen bg-white">
    <!-- Simple Header -->
    <div class="border-b border-gray-200 bg-gray-50/50">
      <div class="max-w-4xl mx-auto px-6 py-6">
        <div class="flex items-center gap-4">
          <NuxtLink 
            to="/" 
            class="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
          >
            <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          </NuxtLink>
          <div>
            <h1 class="!text-2xl font-bold text-gray-900">
              {{ $t('timeline.step1.title') }}
            </h1>
            <p class="text-gray-600 text-sm">{{ $t('timeline.step1.date') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Content -->
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Introduction -->
      <div class="mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
          {{ $t('story.timeline.step1.hero.badge') }}
        </div>
        <h2 class="!text-3xl font-bold text-gray-900 mb-6 leading-tight">
          {{ $t('story.timeline.step1.hero.title') }}
        </h2>
        <p class="!text-lg text-gray-700 leading-relaxed mb-8">
          {{ $t('story.timeline.step1.hero.subtitle') }}
        </p>
        
        <!-- Simple Image Placeholder -->
        <div class="w-full h-64 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-gray-200 flex items-center justify-center mb-8">
          <div class="text-center text-gray-500">
            <Icon name="heroicons:photo" class="w-12 h-12 mx-auto mb-2 opacity-40" />
            <p class="text-sm">{{ $t('story.timeline.step1.hero.imagePlaceholder') }}</p>
          </div>
        </div>
      </div>

      <!-- Content Sections -->
      <div class="prose prose-lg max-w-none">
        <!-- Section 1: The Beginning -->
        <section class="mb-16">
          <h3 class="!text-2xl font-semibold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.beginning.title') }}
          </h3>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>{{ $t('story.timeline.step1.sections.beginning.paragraph1') }}</p>
            <p>{{ $t('story.timeline.step1.sections.beginning.paragraph2') }}</p>
          </div>
        </section>

        <!-- Section 2: Personal Turning Point -->
        <section class="mb-16">
          <h3 class="!text-2xl font-semibold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.turningPoint.title') }}
          </h3>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>{{ $t('story.timeline.step1.sections.turningPoint.paragraph1') }}</p>
            <p>{{ $t('story.timeline.step1.sections.turningPoint.paragraph2') }}</p>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p class="font-medium text-gray-900 mb-2">{{ $t('story.timeline.step1.sections.turningPoint.question') }}</p>
              <p class="text-blue-700 font-medium">{{ $t('story.timeline.step1.sections.turningPoint.answer') }}</p>
            </div>
          </div>
        </section>

        <!-- Section 3: First Research -->
        <section class="mb-16">
          <h3 class="!text-2xl font-semibold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.research.title') }}
          </h3>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>{{ $t('story.timeline.step1.sections.research.paragraph1') }}</p>
            <p>{{ $t('story.timeline.step1.sections.research.paragraph2') }}</p>
          </div>
        </section>

        <!-- Section 4: Fears and Doubts -->
        <section class="mb-16">
          <h3 class="!text-2xl font-semibold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.fears.title') }}
          </h3>
          <p class="text-gray-600 mb-8">
            {{ $t('story.timeline.step1.sections.fears.subtitle') }}
          </p>
          
          <div class="space-y-6 mb-8">
            <div class="border-l-4 border-red-200 pl-4">
              <h4 class="font-medium text-gray-900 mb-2">
                {{ $t('story.timeline.step1.sections.fears.fear1.title') }}
              </h4>
              <p class="text-gray-600">{{ $t('story.timeline.step1.sections.fears.fear1.description') }}</p>
            </div>
            
            <div class="border-l-4 border-yellow-200 pl-4">
              <h4 class="font-medium text-gray-900 mb-2">
                {{ $t('story.timeline.step1.sections.fears.fear2.title') }}
              </h4>
              <p class="text-gray-600">{{ $t('story.timeline.step1.sections.fears.fear2.description') }}</p>
            </div>
            
            <div class="border-l-4 border-blue-200 pl-4">
              <h4 class="font-medium text-gray-900 mb-2">
                {{ $t('story.timeline.step1.sections.fears.fear3.title') }}
              </h4>
              <p class="text-gray-600">{{ $t('story.timeline.step1.sections.fears.fear3.description') }}</p>
            </div>
          </div>
          
          <p class="text-gray-600 italic text-center">
            {{ $t('story.timeline.step1.sections.fears.conclusion') }}
          </p>
        </section>

        <!-- Section 5: The First Step -->
        <section class="mb-16">
          <h3 class="!text-2xl font-semibold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.firstStep.title') }}
          </h3>
          <p class="text-gray-700 leading-relaxed mb-8">
            {{ $t('story.timeline.step1.sections.firstStep.description') }}
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 class="font-medium text-gray-900 mb-3">
                {{ $t('story.timeline.step1.sections.firstStep.option1.title') }}
              </h4>
              <p class="text-gray-600">{{ $t('story.timeline.step1.sections.firstStep.option1.description') }}</p>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 class="font-medium text-gray-900 mb-3">
                {{ $t('story.timeline.step1.sections.firstStep.option2.title') }}
              </h4>
              <p class="text-gray-600">{{ $t('story.timeline.step1.sections.firstStep.option2.description') }}</p>
            </div>
          </div>
        </section>
      </div>

      <!-- Simple Navigation -->
      <div class="flex justify-between items-center pt-12 border-t border-gray-200">
        <div></div>
        <NuxtLink 
          to="/timeline/first-research-feasibility" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          {{ $t('story.navigation.nextStep') }}
          <Icon name="heroicons:arrow-right" class="w-4 h-4" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'The Dream of Spain - Timeline Step 1',
  meta: [
    { name: 'description', content: 'Discover how the dream of moving to Spain began - the first thoughts, wishes, and fears that started this journey.' }
  ]
})
</script>
