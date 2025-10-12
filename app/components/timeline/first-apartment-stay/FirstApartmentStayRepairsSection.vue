<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.repairs.title') }}
    </h2>
    <div class="relative">
      <!-- Mobile: Full width centered image -->
      <div class="block md:hidden mb-6">
        <div class="w-full h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src="/images/timeline/first-visit-repair-damage.png"
            alt="Plumbing repair work - water damage repairs"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Desktop: Floating image on the left -->
      <div class="hidden md:block float-left mr-6 mb-4 w-80 h-64 rounded-xl overflow-hidden shadow-md">
        <img
          src="/images/timeline/first-visit-repair-damage.png"
          alt="Plumbing repair work - water damage repairs"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Text flows around the image -->
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('firstApartmentStay.repairs.content1') }}
        </p>
        <p class="mb-4">
          {{ $t('firstApartmentStay.repairs.content2') }}
        </p>
        <p class="mb-4">
          {{ $t('firstApartmentStay.repairs.content3') }}
        </p>
      </div>
      
      <!-- Clear float -->
      <div class="clear-both"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
