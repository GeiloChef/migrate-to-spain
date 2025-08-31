<template>
  <div class="min-h-screen bg-spain-cream">
    <!-- Simple Header -->
    <div class="border-b border-spain-yellow/30 bg-white/90 backdrop-blur-sm">
      <div class="max-w-4xl mx-auto px-6 py-6">
        <div class="flex items-center gap-4">
          <NuxtLink 
            to="/" 
            class="text-gray-700 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-spain-yellow/20"
          >
            <Icon name="heroicons:arrow-left" class="w-5 h-5" />
          </NuxtLink>
          <div>
            <h1 class="!text-2xl font-bold text-gray-900">
              {{ $t('story.timeline.step1.title') }}
            </h1>
            <p class="text-gray-600 text-sm">{{ $t('story.timeline.step1.date') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Story Content -->
    <div class="max-w-4xl mx-auto px-6 py-12 mt-24 rounded-b-3xl shadow-2xl">
      <!-- Hero Section with Full-Size Image -->
      <div class="relative -mx-6 -mt-12 mb-16">
        <!-- Full-Size Background Image -->
        <div class="w-full h-[500px] rounded-t-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1557930335-abd211a9cd43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Sunset at the beach - typical Spain feeling"
            class="w-full h-full object-cover"
          />
          <!-- Dark Overlay for Better Text Readability -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-end p-8 md:p-12">
          <div class="text-white max-w-4xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
              {{ $t('story.timeline.step1.hero.badge') }}
            </div>
            <h2 class="!text-5xl md:!text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              {{ $t('story.timeline.step1.hero.title') }}
            </h2>
            <p class="!text-xl md:!text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              {{ $t('story.timeline.step1.hero.subtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Story Text -->
      <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <!-- Section 1: The Beginning -->
        <div class="mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.beginning.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p class="mb-4">{{ $t('story.timeline.step1.sections.beginning.paragraph1') }}</p>
              <p>{{ $t('story.timeline.step1.sections.beginning.paragraph2') }}</p>
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Mediterranean lifestyle and culture"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Section 2: Personal Turning Point -->
        <div class="mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.turningPoint.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 items-center mb-6">
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p class="mb-4">{{ $t('story.timeline.step1.sections.turningPoint.paragraph1') }}</p>
              <p>{{ $t('story.timeline.step1.sections.turningPoint.paragraph2') }}</p>
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Gluten-free food and healthy eating"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div class="bg-orange-50 border-l-4 border-orange-400 p-6 my-8 rounded-r-lg">
            <p class="font-medium text-gray-900 mb-2 text-lg">{{ $t('story.timeline.step1.sections.turningPoint.question') }}</p>
            <p class="text-orange-700 font-medium text-lg">{{ $t('story.timeline.step1.sections.turningPoint.answer') }}</p>
          </div>
        </div>

        <!-- Section 3: First Research -->
        <div class="mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.research.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Spanish supermarket with gluten-free products"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p class="mb-4">{{ $t('story.timeline.step1.sections.research.paragraph1') }}</p>
              <p>{{ $t('story.timeline.step1.sections.research.paragraph2') }}</p>
            </div>
          </div>
        </div>

        <!-- Section 4: Fears and Doubts -->
        <div class="mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.fears.title') }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div class="space-y-4 text-gray-700 leading-relaxed">
              <p class="text-lg text-gray-700">
                {{ $t('story.timeline.step1.sections.fears.subtitle') }}
              </p>
            </div>
            <div class="h-64 rounded-xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Night thoughts and contemplation"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:question-mark-circle" class="w-6 h-6 text-red-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-3 text-lg">
                {{ $t('story.timeline.step1.sections.fears.fear1.title') }}
              </h4>
              <p class="text-gray-700 leading-relaxed">{{ $t('story.timeline.step1.sections.fears.fear1.description') }}</p>
            </div>
            
            <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:heart" class="w-6 h-6 text-yellow-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-3 text-lg">
                {{ $t('story.timeline.step1.sections.fears.fear2.title') }}
              </h4>
              <p class="text-gray-700 leading-relaxed">{{ $t('story.timeline.step1.sections.fears.fear2.description') }}</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all duration-300">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="heroicons:language" class="w-6 h-6 text-blue-600" />
              </div>
              <h4 class="font-semibold text-gray-900 mb-3 text-lg">
                {{ $t('story.timeline.step1.sections.fears.fear3.title') }}
              </h4>
              <p class="text-gray-700 leading-relaxed">{{ $t('story.timeline.step1.sections.fears.fear3.description') }}</p>
            </div>
          </div>
          
          <p class="text-gray-600 italic text-center text-lg">
            {{ $t('story.timeline.step1.sections.fears.conclusion') }}
          </p>
        </div>

        <!-- Section 5: The First Step -->
        <div class="mb-12">
          <h3 class="!text-2xl font-bold text-gray-900 mb-6">
            {{ $t('story.timeline.step1.sections.firstStep.title') }}
          </h3>
          <p class="text-lg mb-8 text-gray-700">
            {{ $t('story.timeline.step1.sections.firstStep.description') }}
          </p>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <h4 class="font-semibold text-gray-900 mb-3 text-lg">
                {{ $t('story.timeline.step1.sections.firstStep.option1.title') }}
              </h4>
              <p class="text-gray-700">{{ $t('story.timeline.step1.sections.firstStep.option1.description') }}</p>
            </div>
            
            <div class="bg-red-50 rounded-xl p-6 border border-red-200">
              <h4 class="font-semibold text-gray-900 mb-3 text-lg">
                {{ $t('story.timeline.step1.sections.firstStep.option2.title') }}
              </h4>
              <p class="text-gray-700">{{ $t('story.timeline.step1.sections.firstStep.option2.description') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Navigation -->
              <div class="flex justify-between items-center pt-12 border-t border-spain-yellow/30">
        <div></div>
        <NuxtLink 
          to="/timeline/first-research-feasibility" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors shadow-sm"
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
