<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('hero.regionDecision.conclusion.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('hero.regionDecision.conclusion.paragraph1') }}
        </p>
        <p>
          {{ $t('hero.regionDecision.conclusion.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Murcia region landscape with mountains and Mediterranean coast"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <!-- Entscheidung getroffen -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 shadow-lg text-center">
        <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto mb-4">
          <Icon name="heroicons:check-circle" class="w-8 h-8 text-white" />
        </div>
        <h4 class="font-semibold text-gray-900 text-lg mb-2">{{ $t('hero.regionDecision.conclusion.decision.title') }}</h4>
        <p class="text-gray-700 text-sm">{{ $t('hero.regionDecision.conclusion.decision.description') }}</p>
      </div>

      <!-- Nächste Schritte -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg text-center">
        <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4">
          <Icon name="heroicons:arrow-right" class="w-8 h-8 text-white" />
        </div>
        <h4 class="font-semibold text-gray-900 text-lg mb-2">{{ $t('hero.regionDecision.conclusion.nextSteps.title') }}</h4>
        <p class="text-gray-700 text-sm">{{ $t('hero.regionDecision.conclusion.nextSteps.description') }}</p>
      </div>

      <!-- Fokus -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50 shadow-lg text-center">
        <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4">
          <Icon name="heroicons:home" class="w-8 h-8 text-white" />
        </div>
        <h4 class="font-semibold text-gray-900 text-lg mb-2">{{ $t('hero.regionDecision.conclusion.focus.title') }}</h4>
        <p class="text-gray-700 text-sm">{{ $t('hero.regionDecision.conclusion.focus.description') }}</p>
      </div>
    </div>

    <div class="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50 shadow-lg">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
          <Icon name="heroicons:rocket-launch" class="w-6 h-6 text-white" />
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('hero.regionDecision.conclusion.highlight') }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
