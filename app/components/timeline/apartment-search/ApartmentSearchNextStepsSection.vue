<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.nextSteps.title') }}
    </h2>
    
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('apartmentSearch.nextSteps.paragraph1') }}
        </p>
        <p>
          {{ $t('apartmentSearch.nextSteps.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="/images/timeline/bureaucracy-laptop.png" 
          alt="Arbeitsplatz mit Laptop und Papieren - Bürokratie und nächste Schritte"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Next Steps Box -->
    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200/50 shadow-lg relative overflow-hidden">
      <!-- Background icon -->
      <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
        <Icon name="heroicons:arrow-right" class="w-10 h-10 text-white" />
      </div>
      <!-- Content -->
      <div class="relative z-10">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('apartmentSearch.nextSteps.highlight') }}
        </h3>
      </div>
    </div>

    <!-- Prerequisites List -->
    <div class="mt-8 grid md:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 text-center">
        <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:identification" class="w-6 h-6 text-white" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('apartmentSearch.nextSteps.prerequisites.nie.title') }}</h3>
        <p class="text-gray-700 text-sm">{{ $t('apartmentSearch.nextSteps.prerequisites.nie.description') }}</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 text-center">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:credit-card" class="w-6 h-6 text-white" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('apartmentSearch.nextSteps.prerequisites.bankAccount.title') }}</h3>
        <p class="text-gray-700 text-sm">{{ $t('apartmentSearch.nextSteps.prerequisites.bankAccount.description') }}</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 text-center">
        <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:document-text" class="w-6 h-6 text-white" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('apartmentSearch.nextSteps.prerequisites.bureaucracy.title') }}</h3>
        <p class="text-gray-700 text-sm">{{ $t('apartmentSearch.nextSteps.prerequisites.bureaucracy.description') }}</p>
      </div>
    </div>
  </div>
</template>
