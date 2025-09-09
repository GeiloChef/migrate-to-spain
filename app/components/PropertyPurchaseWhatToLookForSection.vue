<template>
  <div>
    <!-- Header -->
    <div class="flex items-center gap-3 mb-8">
      <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('propertyPurchase.whatToLookFor.title') }}
      </h3>
    </div>
    
    <!-- Introduction -->
    <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 mb-8 border border-indigo-100">
      <p class="text-indigo-800 text-lg leading-relaxed">
        {{ $t('propertyPurchase.whatToLookFor.content') }}
      </p>
    </div>
    
    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <!-- Haus vs. Wohnung -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-gray-900">
            {{ $t('propertyPurchase.houseVsApartment.title') }}
          </h3>
        </div>
        
        <p class="text-gray-700 mb-4">
          {{ $t('propertyPurchase.houseVsApartment.content1') }}
        </p>
        
        <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 class="!text-sm font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <svg class="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            {{ $t('propertyPurchase.houseVsApartment.consTitle') }}
          </h4>
          <ul class="!text-sm text-gray-700 space-y-2">
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">•</span>
              <span>{{ $t('propertyPurchase.houseVsApartment.cons1') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">•</span>
              <span>{{ $t('propertyPurchase.houseVsApartment.cons2') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">•</span>
              <span>{{ $t('propertyPurchase.houseVsApartment.cons3') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-orange-500 mt-1">•</span>
              <span>{{ $t('propertyPurchase.houseVsApartment.cons4') }}</span>
            </li>
          </ul>
        </div>
        
        <p class="text-gray-700 mt-4">
          {{ $t('propertyPurchase.houseVsApartment.content2') }}
        </p>
      </div>

      <!-- Nachbarschaft -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-gray-900">
            {{ $t('propertyPurchase.neighborhood.title') }}
          </h4>
        </div>
        
        <!-- Neighborhood Image -->
        <div class="mb-4">
          <div class="aspect-[16/9] rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Spanish neighborhood with shops and cafes"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p class="text-gray-700 mb-4">
          {{ $t('propertyPurchase.neighborhood.content1') }}
        </p>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="!text-sm text-blue-700 font-medium">
                {{ $t('propertyPurchase.neighborhood.tip') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gebäude & Wohnung -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-gray-900">
            {{ $t('propertyPurchase.buildingAndApartment.title') }}
          </h3>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Gebäude & Substanz -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 class="!text-lg font-semibold text-green-800">
                {{ $t('propertyPurchase.buildingAndApartment.subtitle1') }}
              </h4>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item3') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item4') }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Wohnung & Ausstattung -->
          <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h4 class="!text-lg font-semibold text-blue-800">
                {{ $t('propertyPurchase.buildingAndApartment.subtitle2') }}
              </h4>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item5') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item6') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item7') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.buildingAndApartment.item8') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Preis & laufende Kosten -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-gray-900">
            {{ $t('propertyPurchase.priceAndRunningCosts.title') }}
          </h4>
        </div>
        
        <!-- Price & Costs Image -->
        <div class="mb-4">
          <div class="aspect-[16/9] rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Spanish property costs and expenses"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p class="text-gray-700 mb-4">
          {{ $t('propertyPurchase.priceAndRunningCosts.content1') }}
        </p>
        
        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="!text-sm text-yellow-700 font-medium">
                {{ $t('propertyPurchase.priceAndRunningCosts.warning') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Rechtliches & Orga -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-gray-900">
            {{ $t('propertyPurchase.legalAndOrganization.title') }}
          </h3>
        </div>
        
        <!-- Legal & Organization Image -->
        <div class="mb-4">
          <div class="aspect-[16/9] rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Legal documents and contracts"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div class="space-y-4">
          <h4 class="!text-lg font-medium text-gray-800">
            {{ $t('propertyPurchase.legalAndOrganization.subtitle1') }}
          </h4>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start gap-3">
              <svg class="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ $t('propertyPurchase.legalAndOrganization.item1') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ $t('propertyPurchase.legalAndOrganization.item2') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <svg class="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>{{ $t('propertyPurchase.legalAndOrganization.item3') }}</span>
            </li>
          </ul>
          
          <!-- Tipp-Box unter dem Text -->
          <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="!text-sm text-green-700 font-medium">
                  {{ $t('propertyPurchase.legalAndOrganization.tip') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Persönliche Kriterien -->
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:col-span-2">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="!text-xl font-semibold text-gray-900">
            {{ $t('propertyPurchase.personalCriteria.title') }}
          </h3>
        </div>
        
        <p class="text-gray-700 mb-6">
          {{ $t('propertyPurchase.personalCriteria.content1') }}
        </p>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Wohnqualität & Ausstattung -->
          <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h4 class="!text-lg font-semibold text-purple-800">
                {{ $t('propertyPurchase.personalCriteria.subtitle1') }}
              </h4>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.personalCriteria.item1') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.personalCriteria.item2') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.personalCriteria.item3') }}</span>
              </li>
            </ul>
          </div>
          
          <!-- Lifestyle & Komfort -->
          <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-5 border border-pink-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 class="!text-lg font-semibold text-pink-800">
                {{ $t('propertyPurchase.personalCriteria.subtitle2') }}
              </h4>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.personalCriteria.item4') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.personalCriteria.item5') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-gray-700 text-sm">{{ $t('propertyPurchase.personalCriteria.item6') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
