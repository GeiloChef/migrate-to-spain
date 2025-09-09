<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('regionDecision.conclusion.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('regionDecision.conclusion.paragraph1') }}
        </p>
        <p>
          {{ $t('regionDecision.conclusion.paragraph2') }}
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
        <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-2">{{ $t('regionDecision.conclusion.decision.title') }}</h3>
        <p class="text-gray-700 text-sm">{{ $t('regionDecision.conclusion.decision.description') }}</p>
      </div>

      <!-- Nächste Schritte -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg text-center">
        <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4">
          <Icon name="heroicons:arrow-right" class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-2">{{ $t('regionDecision.conclusion.nextSteps.title') }}</h3>
        <p class="text-gray-700 text-sm">{{ $t('regionDecision.conclusion.nextSteps.description') }}</p>
      </div>

      <!-- Fokus -->
      <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200/50 shadow-lg text-center">
        <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4">
          <Icon name="heroicons:home" class="w-8 h-8 text-white" />
        </div>
        <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-2">{{ $t('regionDecision.conclusion.focus.title') }}</h3>
        <p class="text-gray-700 text-sm">{{ $t('regionDecision.conclusion.focus.description') }}</p>
      </div>
    </div>
  </div>
</template>
