<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.arrival.title') }}
    </h2>
    <div class="relative">
      <!-- Mobile: Full width centered image -->
      <div class="block md:hidden mb-6">
        <div class="w-full h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Spanish apartment interior with furniture - first day"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Desktop: Floating image on the left -->
      <div class="hidden md:block float-left mr-6 mb-4 w-80 h-64 rounded-xl overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Spanish apartment interior with furniture - first day"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Text flows around the image -->
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('firstApartmentStay.arrival.content1') }}
        </p>
        <p class="mb-4">
          {{ $t('firstApartmentStay.arrival.content2') }}
        </p>
        <p class="mb-4">
          {{ $t('firstApartmentStay.arrival.content3') }}
        </p>
      </div>
      
      <!-- Clear float -->
      <div class="clear-both"></div>
    </div>
  </div>
</template>
