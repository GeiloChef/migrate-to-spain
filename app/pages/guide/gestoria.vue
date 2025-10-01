<template>
  <GuideLayout
    title-key="guide_gestoria.title"
    description-key="guide_gestoria.description"
    mobile-title="Gestoría Guide"
    mobile-description="Complete Gestoría guide"
    hero-image="/images/timeline/bureaucracy-laptop.png"
    hero-image-alt="Gestoría - Administrative support and bureaucracy"
    hero-title-key="guide_gestoria.hero.title"
    hero-description-key="guide_gestoria.hero.description"
  >
        <!-- What is Gestoría -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.what_is.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_gestoria.content.what_is.description') }}
            </p>
            <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-300 p-6 shadow-lg relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
                <Icon name="heroicons:information-circle" class="w-8 h-8 text-white" />
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <p class="text-blue-800 font-medium leading-relaxed">
                  {{ $t('guide_gestoria.content.what_is.note') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- What is and what is not -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.what_is_not.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_gestoria.content.what_is_not.description') }}
            </p>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div v-for="(item, index) in whatIsNot" :key="index" 
                   class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <p class="text-gray-800 font-semibold">{{ $t(`guide_gestoria.content.what_is_not.items.${item}.title`) }}</p>
                  <p class="text-gray-600 text-sm">{{ $t(`guide_gestoria.content.what_is_not.items.${item}.description`) }}</p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-300 p-6 shadow-lg relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
                <Icon name="heroicons:light-bulb" class="w-8 h-8 text-white" />
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <p class="text-blue-800 font-medium leading-relaxed">
                  {{ $t('guide_gestoria.content.what_is_not.rule') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Services -->
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
                {{ $t('guide_gestoria.content.services.title') }}
              </h2>
            </div>
            
            <!-- Foreigners & Daily Life -->
            <div class="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                {{ $t('guide_gestoria.content.services.foreigners.title') }}
              </h3>
              <div class="grid gap-3 mb-4">
                <div v-for="(service, index) in foreignerServices" :key="index" 
                     class="flex items-start space-x-3 p-3 bg-white rounded-lg border border-blue-100 hover:shadow-sm transition-shadow">
                  <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">{{ $t(`guide_gestoria.content.services.foreigners.items.${service}`) }}</span>
                </div>
              </div>
            </div>

            <!-- Work, Taxes & Social Security -->
            <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                {{ $t('guide_gestoria.content.services.work.title') }}
              </h3>
              <div class="grid gap-3 mb-4">
                <div v-for="(service, index) in workServices" :key="index" 
                     class="flex items-start space-x-3 p-3 bg-white rounded-lg border border-green-100 hover:shadow-sm transition-shadow">
                  <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">{{ $t(`guide_gestoria.content.services.work.items.${service}`) }}</span>
                </div>
              </div>
            </div>

            <!-- Real Estate & Vehicles -->
            <div class="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                {{ $t('guide_gestoria.content.services.real_estate.title') }}
              </h3>
              <div class="grid gap-3 mb-4">
                <div v-for="(service, index) in realEstateServices" :key="index" 
                     class="flex items-start space-x-3 p-3 bg-white rounded-lg border border-purple-100 hover:shadow-sm transition-shadow">
                  <div class="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">{{ $t(`guide_gestoria.content.services.real_estate.items.${service}`) }}</span>
                </div>
              </div>
              <p class="text-lg text-gray-700 leading-relaxed">
                <strong>{{ $t('guide_gestoria.content.services.real_estate.tip') }}</strong>
              </p>
            </div>
          </div>
        </div>

        <!-- When is it worth it -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.when_worth_it.title') }}
              </h2>
            </div>
            <div class="grid md:grid-cols-2 gap-4 mb-6">
              <div v-for="(reason, index) in worthItReasons" :key="index" 
                   class="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p class="text-gray-700">{{ $t(`guide_gestoria.content.when_worth_it.reasons.${reason}`) }}</p>
              </div>
            </div>
            <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-300 p-6 shadow-lg relative overflow-hidden">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
                <Icon name="heroicons:light-bulb" class="w-8 h-8 text-white" />
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <p class="text-blue-800 font-medium leading-relaxed">
                  {{ $t('guide_gestoria.content.when_worth_it.when_not') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Costs -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.costs.title') }}
              </h2>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="(cost, index) in costs" :key="index" 
                   class="flex items-start space-x-4 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 hover:shadow-md transition-shadow">
                <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {{ index + 1 }}
                </div>
                <div>
                  <p class="text-gray-800 font-semibold">{{ $t(`guide_gestoria.content.costs.items.${cost}.title`) }}</p>
                  <p class="text-gray-600">{{ $t(`guide_gestoria.content.costs.items.${cost}.price`) }}</p>
                </div>
              </div>
            </div>
            <div class="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border border-blue-300 p-6 shadow-lg relative overflow-hidden mt-6">
              <!-- Background icon -->
              <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
                <Icon name="heroicons:light-bulb" class="w-8 h-8 text-white" />
              </div>
              <!-- Content -->
              <div class="relative z-10">
                <p class="text-blue-800 font-medium leading-relaxed">
                  {{ $t('guide_gestoria.content.costs.important') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- How to work with Gestoría -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.how_to_work.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_gestoria.content.how_to_work.description') }}
            </p>
            <div class="grid gap-4">
              <div v-for="(step, index) in workSteps" :key="index" 
                   class="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:shadow-md transition-shadow">
                <div class="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {{ String.fromCharCode(65 + index) }}
                </div>
                <div>
                  <p class="text-gray-800 font-semibold mb-2">{{ $t(`guide_gestoria.content.how_to_work.steps.${step}.title`) }}</p>
                  <p class="text-gray-600">{{ $t(`guide_gestoria.content.how_to_work.steps.${step}.description`) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quality indicators -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.quality.title') }}
              </h2>
            </div>
            
            <!-- Good indicators -->
            <div class="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4">
                {{ $t('guide_gestoria.content.quality.good.title') }}
              </h3>
              <div class="grid gap-3 mb-4">
                <div v-for="(indicator, index) in goodIndicators" :key="index" 
                     class="flex items-start space-x-3 p-3 bg-white rounded-lg border border-green-100 hover:shadow-sm transition-shadow">
                  <div class="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">{{ $t(`guide_gestoria.content.quality.good.items.${indicator}`) }}</span>
                </div>
              </div>
            </div>

            <!-- Red flags -->
            <div class="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
              <h3 class="text-xl font-bold text-gray-800 mb-4">
                {{ $t('guide_gestoria.content.quality.red_flags.title') }}
              </h3>
              <div class="grid gap-3 mb-4">
                <div v-for="(flag, index) in redFlags" :key="index" 
                     class="flex items-start space-x-3 p-3 bg-white rounded-lg border border-red-100 hover:shadow-sm transition-shadow">
                  <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span class="text-gray-700">{{ $t(`guide_gestoria.content.quality.red_flags.items.${flag}`) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.faq.title') }}
              </h2>
            </div>
            <div class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div v-for="(faq, index) in faqs" :key="index" 
                   class="border-b border-gray-100 last:border-b-0">
                <button 
                  @click="toggleFaq(index)"
                  class="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between cursor-pointer"
                >
                  <span class="font-semibold text-gray-800 text-lg pr-4">
                    {{ $t(`guide_gestoria.content.faq.items.${faq}.question`) }}
                  </span>
                  <Icon 
                    :name="openFaqs.includes(index) ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" 
                    class="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200"
                    :class="{ 'rotate-180': openFaqs.includes(index) }"
                  />
                </button>
                <div 
                  v-show="openFaqs.includes(index)"
                  class="px-6 pb-4 bg-gray-50"
                >
                  <p class="text-gray-700 leading-relaxed text-base">
                    {{ $t(`guide_gestoria.content.faq.items.${faq}.answer`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Conclusion -->
        <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_gestoria.content.conclusion.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_gestoria.content.conclusion.description') }}
            </p>
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  </GuideLayout>
</template>

<script setup>
// Arrays for v-for loops
const whatIsNot = [
  'lawyer',
  'asesoria',
  'notary'
]

const foreignerServices = [
  'nie',
  'empadronamiento',
  'certificado_digital',
  'bank_insurance'
]

const workServices = [
  'autonomo',
  'tax_forms',
  'irpf',
  'social_security'
]

const realEstateServices = [
  'property_purchase',
  'vehicle'
]

const worthItReasons = [
  'time_short',
  'language_barrier',
  'expensive_mistakes',
  'not_present',
  'complex_interfaces'
]

const costs = [
  'nie_organization',
  'empadronamiento',
  'autonomo_care',
  'real_estate_pack',
  'vehicle_registration'
]

const workSteps = [
  'preparation',
  'power_of_attorney',
  'cooperation'
]

const goodIndicators = [
  'transparent_offers',
  'specialization',
  'certification',
  'documented_processes',
  'proactive_communication'
]

const redFlags = [
  'nie_online_guarantee',
  'full_prepayment',
  'keep_originals',
  'blank_signatures',
  'no_invoice'
]

const faqs = [
  'nie_without_me',
  'need_lawyer',
  'how_long',
  'language',
  'online_later'
]

// FAQ Accordion logic
const openFaqs = ref([])

const toggleFaq = (index) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

// SEO
useHead({
  title: 'Gestoría in Spain - Complete Guide',
  meta: [
    { name: 'description', content: 'Complete guide to Gestoría services in Spain. What they do, when they are worth it, and how to find a good one.' }
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
