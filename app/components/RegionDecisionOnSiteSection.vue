<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('regionDecision.onSite.title') }}
    </h2>
    <!-- Bildercarousel für Murcia -->
    <div class="w-full mb-8 flex flex-col justify-center">
      <div class="pb-4">
        <UCarousel
          :items="murciaImages"
          loop
          autoplay
          :ui="{ 
            container: 'w-full relative',
            wrapper: 'w-full',
            item: 'basis-1/2 h-72 flex-shrink-0',
            dot: 'bg-spain-yellow data-[state=active]:bg-spain-red',
            arrows: {
              wrapper: 'absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none',
              base: 'pointer-events-auto'
            }
            
          }"
          class="w-full"
          :dots="false"
        >
          <template #default="{ item }">
            <div class="h-72 rounded-xl overflow-hidden shadow-lg">
              <img 
                :src="item.src" 
                :alt="item.alt"
                class="w-full h-full object-cover"
              />
            </div>
          </template>
        </UCarousel>
      </div>
    </div>
    
    <!-- Text auf voller Breite -->
    <div class="w-full mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('regionDecision.onSite.paragraph1') }}
        </p>
        <p>
          {{ $t('regionDecision.onSite.paragraph2') }}
        </p>
      </div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Glutenfreies Essen -->
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:heart" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-lg font-semibold text-gray-900 text-lg">{{ $t('regionDecision.onSite.glutenFree.title') }}</h3>
            <p class="!text-sm text-gray-600">{{ $t('regionDecision.onSite.glutenFree.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ $t('regionDecision.onSite.glutenFree.description') }}</p>
      </div>

      <!-- Umland erkunden -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:map" class="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 class="!text-lg font-semibold text-gray-900 text-lg">{{ $t('regionDecision.onSite.exploration.title') }}</h3>
            <p class="!text-sm text-gray-600">{{ $t('regionDecision.onSite.exploration.subtitle') }}</p>
          </div>
        </div>
        <p class="text-gray-700">{{ $t('regionDecision.onSite.exploration.description') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const murciaImages = [
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Murcia traditionelle Straßen und Architektur'
  },
  {
    src: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Murcia Kathedrale und historisches Zentrum'
  },
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Murcia Plaza und öffentliche Plätze'
  },
  {
    src: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Murcia Umgebung und Landschaft'
  }
]
</script>
