<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('firstApartmentStay.keyLearnings.title') }}
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 leading-relaxed">
      <div class="bg-white/50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">
          {{ $t('firstApartmentStay.keyLearnings.insurance.title') }}
        </h3>
        <p class="mb-4">
          {{ $t('firstApartmentStay.keyLearnings.insurance.content') }}
        </p>
      </div>
      
      <div class="bg-white/50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">
          {{ $t('firstApartmentStay.keyLearnings.neighbors.title') }}
        </h3>
        <p class="mb-4">
          {{ $t('firstApartmentStay.keyLearnings.neighbors.content') }}
        </p>
      </div>
      
      <div class="bg-white/50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">
          {{ $t('firstApartmentStay.keyLearnings.patience.title') }}
        </h3>
        <p class="mb-4">
          {{ $t('firstApartmentStay.keyLearnings.patience.content') }}
        </p>
      </div>
      
      <div class="bg-white/50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">
          {{ $t('firstApartmentStay.keyLearnings.spanish.title') }}
        </h3>
        <p class="mb-4">
          {{ $t('firstApartmentStay.keyLearnings.spanish.content') }}
        </p>
      </div>
      
      <div class="bg-white/50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3">
          {{ $t('firstApartmentStay.keyLearnings.cockroaches.title') }}
        </h3>
        <p class="mb-4">
          {{ $t('firstApartmentStay.keyLearnings.cockroaches.content') }}
        </p>
      </div>
    </div>
  </div>
</template>
