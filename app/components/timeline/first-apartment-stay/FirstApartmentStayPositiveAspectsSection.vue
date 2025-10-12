<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.positiveAspects.title') }}
    </h2>
    <div class="relative">
      <!-- Mobile: Full width centered image -->
      <div class="block md:hidden mb-6">
        <div class="w-full h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/timeline/first-visit-friendly.neighbors.png"
            alt="Friendly neighbors welcoming - positive aspects"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Desktop: Floating image on the right -->
      <div class="hidden md:block float-right ml-6 mb-4 w-80 h-64 rounded-xl overflow-hidden shadow-md">
        <img
          src="/images/timeline/first-visit-friendly.neighbors.png"
          alt="Friendly neighbors welcoming - positive aspects"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Text flows around the image -->
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('firstApartmentStay.positiveAspects.content1') }}
        </p>
        <p class="mb-4">
          {{ $t('firstApartmentStay.positiveAspects.content2') }}
        </p>
      </div>
      
      <!-- Clear float -->
      <div class="clear-both"></div>
    </div>
  </div>
</template>
