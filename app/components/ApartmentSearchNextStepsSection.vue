<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.nextSteps.title') }}
    </h3>
    
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
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Next steps in the property buying process"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Next Steps Box -->
    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200/50 shadow-lg">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
          <Icon name="heroicons:arrow-right" class="w-6 h-6 text-white" />
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('apartmentSearch.nextSteps.highlight') }}
          </h4>
        </div>
      </div>
    </div>

    <!-- Prerequisites List -->
    <div class="mt-8 grid md:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 text-center">
        <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:identification" class="w-6 h-6 text-white" />
        </div>
        <h4 class="font-semibold text-gray-900 mb-2">{{ $t('apartmentSearch.nextSteps.prerequisites.nie.title') }}</h4>
        <p class="text-gray-700 text-sm">{{ $t('apartmentSearch.nextSteps.prerequisites.nie.description') }}</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 text-center">
        <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:credit-card" class="w-6 h-6 text-white" />
        </div>
        <h4 class="font-semibold text-gray-900 mb-2">{{ $t('apartmentSearch.nextSteps.prerequisites.bankAccount.title') }}</h4>
        <p class="text-gray-700 text-sm">{{ $t('apartmentSearch.nextSteps.prerequisites.bankAccount.description') }}</p>
      </div>

      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50 text-center">
        <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="heroicons:document-text" class="w-6 h-6 text-white" />
        </div>
        <h4 class="font-semibold text-gray-900 mb-2">{{ $t('apartmentSearch.nextSteps.prerequisites.bureaucracy.title') }}</h4>
        <p class="text-gray-700 text-sm">{{ $t('apartmentSearch.nextSteps.prerequisites.bureaucracy.description') }}</p>
      </div>
    </div>
  </div>
</template>
