<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('gestoria.whyGestoria.title') }}
    </h2>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('gestoria.whyGestoria.intro') }}
      </p>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Gestoría Card -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop&crop=center" 
            alt="Gestoría Office" 
            class="w-full h-32 object-cover"
          />
          <div class="p-6">
            <h3 class="!text-lg font-semibold text-gray-900 mb-3">
              {{ $t('gestoria.whyGestoria.gestoria.title') }}
            </h3>
            <p class="text-gray-700">
              {{ $t('gestoria.whyGestoria.gestoria.description') }}
            </p>
          </div>
        </div>

        <!-- Fachanwalt Card -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop&crop=center" 
            alt="Lawyer Office" 
            class="w-full h-32 object-cover"
          />
          <div class="p-6">
            <h3 class="!text-lg font-semibold text-gray-900 mb-3">
              {{ $t('gestoria.whyGestoria.lawyer.title') }}
            </h3>
            <p class="text-gray-700">
              {{ $t('gestoria.whyGestoria.lawyer.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Kosten Vergleich -->
      <div>
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">
          {{ $t('gestoria.whyGestoria.costs.title') }}
        </h3>
        <p class="text-gray-700">
          {{ $t('gestoria.whyGestoria.costs.content') }}
        </p>
      </div>

      <h3 class="!text-lg font-semibold text-gray-900 mb-3">
        Meine Entscheidung
      </h3>
      <p class="mb-4">
        {{ $t('gestoria.whyGestoria.conclusion') }}
      </p>
    </div>
  </div>
</template>

