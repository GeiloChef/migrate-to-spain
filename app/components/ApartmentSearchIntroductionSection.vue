<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.introduction.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('apartmentSearch.introduction.paragraph1') }}
        </p>
        <p>
          {{ $t('apartmentSearch.introduction.paragraph2') }}
        </p>
      </div>
      <div class="hidden md:block h-[400px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/images/timeline/desk-with-papers.png" 
          alt="Arbeitsplatz mit Dokumenten und Laptop - Von der Entscheidung zur Tat"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    

  </div>
</template>
