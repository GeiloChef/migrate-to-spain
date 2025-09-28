<template>
  <div class="min-h-screen bg-spain-cream pb-0 md:pb-12">
    <!-- Header Section -->
    <div class="border-b border-spain-yellow/30 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
      <div class="max-w-4xl mx-auto px-4 py-4 md:px-6 md:py-6">
        <div class="flex items-center justify-between">
          <!-- Left side: Navigation and Title -->
          <div class="flex items-center gap-3 md:gap-6 min-w-0 flex-1">
            <!-- Back Button -->
            <div class="flex-shrink-0">
              <NuxtLink to="/guide" class="flex items-center justify-center w-10 h-10 rounded-full bg-spain-yellow/20 hover:bg-spain-yellow/30 transition-colors duration-300">
                <Icon name="heroicons:arrow-left" class="w-5 h-5 text-spain-yellow/80" />
              </NuxtLink>
            </div>
            
            <!-- Title -->
            <div class="min-w-0 flex-1">
              <h1 class="!text-lg md:!text-2xl font-bold text-gray-900 hidden md:block truncate">
                {{ $t('guide_nie.title') }}
              </h1>
              <h1 class="!text-base md:!text-xl font-bold text-gray-900 block md:hidden truncate">
                NIE Number Guide
              </h1>
              <p class="text-gray-600 text-xs md:text-sm hidden md:block truncate">{{ $t('guide_nie.description') }}</p>
              <p class="text-gray-600 text-xs md:text-sm block md:hidden truncate">Complete NIE application guide</p>
            </div>
          </div>

          <!-- Right side: Language Switcher -->
          <div class="flex-shrink-0 ml-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto rounded-b-3xl shadow-2xl mt-8">
      <!-- Hero Section -->
      <div class="relative -mt-6 md:mt-0">
        <!-- Background Image -->
        <div class="w-full h-[300px] md:h-[400px] md:rounded-t-3xl overflow-hidden shadow-2xl">
          <img 
            src="/images/timeline/bureaucracy-laptop.png" 
            alt="NIE Application - Documents and laptop"
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
              {{ $t('guide_nie.title') }}
            </h1>
            <p class="!text-base md:!text-lg lg:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
              {{ $t('guide_nie.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="prose prose-base md:prose-lg max-w-none text-gray-800 leading-relaxed">
        <!-- What is NIE -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_nie.content.what_is.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_nie.content.what_is.description') }}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              <strong>{{ $t('guide_nie.content.what_is.note') }}</strong>
            </p>
          </div>
        </div>

        <!-- Why needed -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_nie.content.why_needed.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_nie.content.why_needed.intro') }}
            </p>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div v-for="(example, index) in examples" :key="index" 
                   class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p class="text-gray-700">{{ $t(`guide_nie.content.why_needed.examples.${example}`) }}</p>
              </div>
            </div>
            <p class="text-lg text-gray-700 leading-relaxed">
              <strong>{{ $t('guide_nie.content.why_needed.conclusion') }}</strong>
            </p>
          </div>
        </div>

        <!-- Where to apply -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_nie.content.where_to_apply.title') }}
              </h2>
            </div>
            
            <!-- In Spain -->
            <div class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                {{ $t('guide_nie.content.where_to_apply.in_spain.title') }}
              </h3>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.in_spain.description') }}
              </p>
              <div class="bg-amber-50 p-4 rounded-lg mb-4 border-l-4 border-amber-400">
                <p class="text-amber-800 font-semibold">
                  {{ $t('guide_nie.content.where_to_apply.in_spain.appointment') }}
                </p>
              </div>
              <h4 class="text-lg font-semibold text-gray-800 mb-3">
                {{ $t('guide_nie.content.where_to_apply.in_spain.documents.title') }}
              </h4>
              <ul class="list-disc list-inside space-y-2 mb-4 text-lg text-gray-700">
                <li v-for="(doc, index) in documents" :key="index">
                  {{ $t(`guide_nie.content.where_to_apply.in_spain.documents.items.${doc}`) }}
                </li>
              </ul>
              <p class="text-lg text-gray-700 leading-relaxed">
                <strong>{{ $t('guide_nie.content.where_to_apply.in_spain.processing_time') }}</strong>
              </p>
            </div>

            <!-- Consulate -->
            <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                {{ $t('guide_nie.content.where_to_apply.consulate.title') }}
              </h3>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.consulate.description') }}
              </p>
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="bg-white p-4 rounded-lg border border-green-200">
                  <p class="text-green-800 font-semibold">
                    <strong>Vorteil:</strong> {{ $t('guide_nie.content.where_to_apply.consulate.pros') }}
                  </p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-red-200">
                  <p class="text-red-800 font-semibold">
                    <strong>Nachteil:</strong> {{ $t('guide_nie.content.where_to_apply.consulate.cons') }}
                  </p>
                </div>
              </div>
              <p class="text-lg text-gray-700 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.consulate.note') }}
              </p>
            </div>

            <!-- Power of Attorney -->
            <div class="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                {{ $t('guide_nie.content.where_to_apply.power_of_attorney.title') }}
              </h3>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.power_of_attorney.description') }}
              </p>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.power_of_attorney.process') }}
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg border border-green-200">
                  <p class="text-green-800 font-semibold">
                    <strong>Vorteil:</strong> {{ $t('guide_nie.content.where_to_apply.power_of_attorney.pros') }}
                  </p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-red-200">
                  <p class="text-red-800 font-semibold">
                    <strong>Nachteil:</strong> {{ $t('guide_nie.content.where_to_apply.power_of_attorney.cons') }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Online -->
            <div class="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                {{ $t('guide_nie.content.where_to_apply.online.title') }}
              </h3>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.online.description') }}
              </p>
              <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                {{ $t('guide_nie.content.where_to_apply.online.in_spain') }}
              </p>
              <div class="bg-white p-4 rounded-lg border border-red-200">
                <p class="text-red-800 font-semibold">
                  {{ $t('guide_nie.content.where_to_apply.online.warning') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Validity -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_nie.content.validity.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_nie.content.validity.description') }}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              <strong>{{ $t('guide_nie.content.validity.note') }}</strong>
            </p>
          </div>
        </div>

        <!-- Tips -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_nie.content.tips.title') }}
              </h2>
            </div>
            <div class="grid gap-4">
              <div v-for="(tip, index) in tips" :key="index" 
                   class="flex items-start space-x-4 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 hover:shadow-md transition-shadow">
                <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {{ index + 1 }}
                </div>
                <p class="text-gray-700 leading-relaxed">{{ $t(`guide_nie.content.tips.items.${tip}`) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_nie.content.conclusion.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_nie.content.conclusion.description') }}
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              <strong>{{ $t('guide_nie.content.conclusion.final_note') }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Arrays for v-for loops
const examples = [
  'immobilien',
  'finanzen', 
  'arbeit',
  'alltag',
  'studium'
]

const documents = [
  'form',
  'passport',
  'purpose',
  'payment'
]

const tips = [
  'early',
  'appointments',
  'copies',
  'language'
]

// SEO
useHead({
  title: 'NIE Number Guide - Complete Application Guide',
  meta: [
    { name: 'description', content: 'Complete guide on how to apply for your NIE number in Spain. Everything you need to know about the foreigner identification number.' }
  ]
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceSlow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-delay {
  animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-bounce-slow {
  animation: bounceSlow 2s infinite;
}
</style>