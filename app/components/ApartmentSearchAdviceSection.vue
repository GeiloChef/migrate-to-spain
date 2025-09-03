<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.advice.title') }}
    </h3>
    
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('apartmentSearch.advice.paragraph1') }}
        </p>
        <p>
          {{ $t('apartmentSearch.advice.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Taking time to make the right decision"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Advice Cards -->
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Patience -->
      <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:clock" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900">
            Geduld ist der Schlüssel
          </h4>
        </div>
        <p class="text-gray-700 leading-relaxed">
          Mehrere Aufenthalte einplanen und sich Zeit lassen. Der Druck, "jetzt sofort etwas zu kaufen", ist selten ein guter Ratgeber.
        </p>
      </div>

      <!-- Spain won't run away -->
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 shadow-lg">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:map-pin" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900">
            Spanien läuft einem nicht davon
          </h4>
        </div>
        <p class="text-gray-700 leading-relaxed">
          Die richtige Wohnung wartet meistens auf den, der bereit ist, ein bisschen Geduld mitzubringen.
        </p>
      </div>
    </div>
  </div>
</template>
