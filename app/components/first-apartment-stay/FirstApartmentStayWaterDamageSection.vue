<template>
  <div>
    <!-- Header image above the title -->
    <div class="w-full h-32 rounded-xl overflow-hidden shadow-md mb-6">
      <img
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Water damage and flooding - apartment repairs"
        class="w-full h-full object-cover"
      />
    </div>
    
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.waterDamage.title') }}
    </h2>
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('firstApartmentStay.waterDamage.content1') }}
      </p>
      <p class="mb-4">
        {{ $t('firstApartmentStay.waterDamage.content2') }}
      </p>
      <p class="mb-4">
        {{ $t('firstApartmentStay.waterDamage.content3') }}
      </p>
    </div>
  </div>
</template>
