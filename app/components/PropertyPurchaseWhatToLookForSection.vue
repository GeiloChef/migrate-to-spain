<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('propertyPurchase.whatToLookFor.title') }}
    </h3>
    <div class="space-y-8 text-gray-700 leading-relaxed">
      <p class="mb-8">
        {{ $t('propertyPurchase.whatToLookFor.content') }}
      </p>

      <!-- Haus vs. Wohnung -->
      <div class="space-y-4">
        <h4 class="!text-xl font-semibold text-gray-900">
          {{ $t('propertyPurchase.houseVsApartment.title') }}
        </h4>
        <p class="mb-4">
          {{ $t('propertyPurchase.houseVsApartment.content1') }}
        </p>
        
        <div class="bg-red-50 border-l-4 border-red-400 p-6 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h5 class="text-sm font-medium text-red-800">
                {{ $t('propertyPurchase.houseVsApartment.consTitle') }}
              </h5>
              <div class="mt-2 text-sm text-red-700">
                <ul class="list-disc pl-5 space-y-1">
                  <li>{{ $t('propertyPurchase.houseVsApartment.cons1') }}</li>
                  <li>{{ $t('propertyPurchase.houseVsApartment.cons2') }}</li>
                  <li>{{ $t('propertyPurchase.houseVsApartment.cons3') }}</li>
                  <li>{{ $t('propertyPurchase.houseVsApartment.cons4') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <p>
          {{ $t('propertyPurchase.houseVsApartment.content2') }}
        </p>
      </div>

      <!-- Nachbarschaft -->
      <div class="space-y-4">
        <h4 class="!text-xl font-semibold text-gray-900">
          {{ $t('propertyPurchase.neighborhood.title') }}
        </h4>
        <p class="mb-4">
          {{ $t('propertyPurchase.neighborhood.content1') }}
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-blue-700 font-medium">
                {{ $t('propertyPurchase.neighborhood.tip') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gebäude & Wohnung -->
      <div class="space-y-4">
        <h4 class="!text-xl font-semibold text-gray-900">
          {{ $t('propertyPurchase.buildingAndApartment.title') }}
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h5 class="!text-lg font-medium text-gray-800">
              {{ $t('propertyPurchase.buildingAndApartment.subtitle1') }}
            </h5>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item1') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item2') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item3') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item4') }}
              </li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <h5 class="!text-lg font-medium text-gray-800">
              {{ $t('propertyPurchase.buildingAndApartment.subtitle2') }}
            </h5>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item5') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item6') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item7') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.buildingAndApartment.item8') }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Preis & laufende Kosten -->
      <div class="space-y-4">
        <h4 class="!text-xl font-semibold text-gray-900">
          {{ $t('propertyPurchase.priceAndRunningCosts.title') }}
        </h4>
        <p class="mb-4">
          {{ $t('propertyPurchase.priceAndRunningCosts.content1') }}
        </p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-6">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                {{ $t('propertyPurchase.priceAndRunningCosts.warning') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Rechtliches & Orga -->
      <div class="space-y-4">
        <h4 class="!text-xl font-semibold text-gray-900">
          {{ $t('propertyPurchase.legalAndOrganization.title') }}
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h5 class="!text-lg font-medium text-gray-800">
              {{ $t('propertyPurchase.legalAndOrganization.subtitle1') }}
            </h5>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.legalAndOrganization.item1') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.legalAndOrganization.item2') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.legalAndOrganization.item3') }}
              </li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <div class="bg-green-50 border-l-4 border-green-400 p-6">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-green-700 font-medium">
                    {{ $t('propertyPurchase.legalAndOrganization.tip') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Persönliche Kriterien -->
      <div class="space-y-4">
        <h4 class="!text-xl font-semibold text-gray-900">
          {{ $t('propertyPurchase.personalCriteria.title') }}
        </h4>
        <p class="mb-6">
          {{ $t('propertyPurchase.personalCriteria.content1') }}
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h5 class="!text-lg font-medium text-gray-800">
              {{ $t('propertyPurchase.personalCriteria.subtitle1') }}
            </h5>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.personalCriteria.item1') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.personalCriteria.item2') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.personalCriteria.item3') }}
              </li>
            </ul>
          </div>
          
          <div class="space-y-4">
            <h5 class="!text-lg font-medium text-gray-800">
              {{ $t('propertyPurchase.personalCriteria.subtitle2') }}
            </h5>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.personalCriteria.item4') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.personalCriteria.item5') }}
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ $t('propertyPurchase.personalCriteria.item6') }}
              </li>
            </ul>
          </div>
        </div>
        
        <p class="mt-6">
          {{ $t('propertyPurchase.personalCriteria.content2') }}
        </p>
      </div>
    </div>
  </div>
</template>
