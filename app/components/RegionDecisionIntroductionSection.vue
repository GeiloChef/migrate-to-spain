<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('regionDecision.introduction.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('regionDecision.introduction.paragraph1') }}
        </p>
        <p>
          {{ $t('regionDecision.introduction.paragraph2') }}
        </p>
      </div>
      <div class="h-[400px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/images/timeline/man-searching-for-region-spain.png" 
          alt="Mann studiert Karte bei Sonnenuntergang - Von der Theorie zur Praxis"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
