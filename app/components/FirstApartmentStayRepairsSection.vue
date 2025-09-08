<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.repairs.title') }}
    </h3>
    <div class="relative">
      <!-- Floating round image on the left with shape-outside -->
      <div class="float-left mr-6 mb-4 w-80 h-80 rounded-full overflow-hidden shadow-lg round-image">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Construction and repair work - water damage repairs"
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Text flows around the round image -->
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

<style scoped>
.round-image {
  shape-outside: circle(50%);
  shape-margin: 1rem;
}
</style>
