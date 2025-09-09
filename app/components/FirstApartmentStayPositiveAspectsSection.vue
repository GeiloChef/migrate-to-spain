<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.positiveAspects.title') }}
    </h2>
    <div class="relative">
      <!-- Floating image on the right -->
      <div class="float-right ml-6 mb-4 w-80 h-64 rounded-xl overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Spanish community and neighborhood - positive aspects"
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
