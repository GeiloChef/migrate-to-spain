<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.repairs.title') }}
    </h2>
    <div>
      <!-- Round image at the top -->
      <div class="flex justify-center mb-8">
        <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Construction and repair work - water damage repairs"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <!-- Text content below the image -->
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
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
