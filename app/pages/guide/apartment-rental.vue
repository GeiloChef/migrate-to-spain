<template>
  <GuideLayout
    title-key="guide_apartment_rental.title"
    description-key="guide_apartment_rental.description"
    mobile-title="Apartment Rental Guide"
    mobile-description="Complete guide to renting apartments in Spain"
    hero-image="/images/timeline/couple-visiting-property.png"
    hero-image-alt="Apartment Rental in Spain"
    hero-title-key="guide_apartment_rental.hero.title"
    hero-description-key="guide_apartment_rental.hero.description"
  >
    <!-- Table of Contents -->
    <div class="bg-gradient-to-br from-gray-50 to-blue-50/30 px-4 py-6 md:px-6 md:py-8">
      <div class="flex items-start space-x-4 mb-6">
        <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-gray-900">
          {{ $t('guide_apartment_rental.content.table_of_contents.title') }}
        </h2>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="(item, index) in tableOfContents" :key="index" 
             @click="() => scrollToSection(item)"
             class="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover:shadow-md group">
          <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 transition-colors">
            {{ index + 1 }}
          </span>
          <span class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{{ $t('guide_apartment_rental.content.table_of_contents.items.' + item) }}</span>
        </div>
      </div>
    </div>

    <!-- Preparation -->
    <div id="preparation" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.preparation.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.preparation.description') }}
        </p>
        <div class="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 relative overflow-hidden">
          <!-- Background icon -->
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center opacity-20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <p class="text-amber-800 font-semibold leading-relaxed">
              {{ $t('guide_apartment_rental.content.preparation.why_important') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Rental Types -->
    <div id="rental_types" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.rental_types.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.rental_types.description') }}
        </p>
        <div class="grid gap-6">
          <div v-for="(type, index) in rentalTypes" :key="index" 
               class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 relative overflow-hidden">
            <!-- Background number -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t(`guide_apartment_rental.content.rental_types.types.${type}.title`) }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ $t(`guide_apartment_rental.content.rental_types.types.${type}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Deposit and Security -->
    <div id="deposit_security" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.deposit_security.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.deposit_security.description') }}
        </p>
        <div class="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 relative overflow-hidden">
          <!-- Background warning icon -->
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center opacity-20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <p class="text-red-800 font-semibold leading-relaxed">
              {{ $t('guide_apartment_rental.content.deposit_security.guarantor') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Rental Contract -->
    <div id="rental_contract" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.rental_contract.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.rental_contract.description') }}
        </p>
        <div class="space-y-6">
          <div class="p-6 bg-white rounded-xl border border-amber-200 shadow-sm relative overflow-hidden">
            <!-- Background icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center opacity-20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h4 class="text-lg font-bold text-amber-800 mb-2">Wichtig</h4>
              <p class="text-amber-700 leading-relaxed">
                {{ $t('guide_apartment_rental.content.rental_contract.utilities_important') }}
              </p>
            </div>
          </div>
          <div class="p-6 bg-white rounded-xl border border-amber-200 shadow-sm relative overflow-hidden">
            <!-- Background icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center opacity-20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h4 class="text-lg font-bold text-amber-800 mb-2">Inventarliste</h4>
              <p class="text-amber-700 leading-relaxed">
                {{ $t('guide_apartment_rental.content.rental_contract.inventory') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Costs -->
    <div id="additional_costs" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.additional_costs.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.additional_costs.description') }}
        </p>
        <div class="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 relative overflow-hidden">
          <!-- Background icon -->
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center opacity-20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <p class="text-amber-800 font-semibold leading-relaxed">
              {{ $t('guide_apartment_rental.content.additional_costs.conclusion') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Move-in Protocol -->
    <div id="move_in_protocol" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.move_in_protocol.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.move_in_protocol.description') }}
        </p>
        <div class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 relative overflow-hidden">
          <!-- Background icon -->
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <h4 class="text-lg font-bold text-green-800 mb-2">Dokumentation</h4>
            <p class="text-green-700 leading-relaxed">
              {{ $t('guide_apartment_rental.content.move_in_protocol.documentation') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Repairs -->
    <div id="repairs" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.repairs.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ $t('guide_apartment_rental.content.repairs.description') }}
        </p>
      </div>
    </div>

    <!-- Termination -->
    <div id="termination" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.termination.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ $t('guide_apartment_rental.content.termination.description') }}
        </p>
      </div>
    </div>

    <!-- Special Conditions -->
    <div id="special_conditions" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.special_conditions.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 leading-relaxed">
          {{ $t('guide_apartment_rental.content.special_conditions.description') }}
        </p>
      </div>
    </div>

    <!-- Practical Tips -->
    <div id="practical_tips" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.practical_tips.title') }}
          </h2>
        </div>
        <div class="grid gap-4">
          <div v-for="(tip, index) in practicalTips" :key="index" 
               class="flex items-start space-x-4 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 hover:shadow-md transition-shadow">
            <div class="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {{ index + 1 }}
            </div>
            <p class="text-gray-700 leading-relaxed">{{ $t(`guide_apartment_rental.content.practical_tips.tips.${tip}`) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Common Mistakes -->
    <div id="common_mistakes" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.common_mistakes.title') }}
          </h2>
        </div>
        <div class="space-y-6">
          <div v-for="(mistake, index) in commonMistakes" :key="index" 
               class="p-6 bg-white rounded-xl border border-red-200 shadow-sm relative overflow-hidden">
            <!-- Background warning icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center opacity-20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 class="text-red-800 font-semibold mb-2">Fehler:</h4>
                  <p class="text-red-700 text-sm">{{ $t(`guide_apartment_rental.content.common_mistakes.mistakes.${mistake}.mistake`) }}</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 class="text-green-800 font-semibold mb-2">Vermeiden:</h4>
                  <p class="text-green-700 text-sm">{{ $t(`guide_apartment_rental.content.common_mistakes.mistakes.${mistake}.avoid`) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conclusion -->
    <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_apartment_rental.content.conclusion.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_apartment_rental.content.conclusion.description') }}
        </p>
        <Disclaimer />
      </div>
    </div>
  </GuideLayout>
</template>

<script lang="ts" setup>
// Arrays for v-for loops
const tableOfContents = [
  'preparation',
  'rental_types',
  'deposit_security',
  'rental_contract',
  'additional_costs',
  'move_in_protocol',
  'repairs',
  'termination',
  'special_conditions',
  'practical_tips',
  'common_mistakes'
]

const rentalTypes = [
  'long_term',
  'short_term',
  'room_rental'
]

const practicalTips = [
  'be_quick',
  'have_documents',
  'never_pay_without_contract',
  'negotiate',
  'use_whatsapp'
]

const commonMistakes = [
  'cash_deposit',
  'no_protocol',
  'not_reading_contract',
  'assuming_utilities',
  'only_online'
]

// Scroll to section function
const scrollToSection = (sectionId: string) => {
  console.log('Scrolling to section:', sectionId) // Debug log
  const element = document.getElementById(sectionId)
  console.log('Element found:', element) // Debug log
  if (element) {
    // Add a small offset to account for any fixed headers
    const offset = 80
    const elementPosition = element.offsetTop - offset
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  } else {
    console.error('Element not found:', sectionId)
  }
}

// SEO
useHead({
  title: 'Apartment Rental Guide - Rent Your Perfect Home in Spain',
  meta: [
    { name: 'description', content: 'Complete guide to renting apartments in Spain. Learn about documents, contracts, deposits, and handover protocols.' }
  ]
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceSlow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out 0.2s both;
}

.animate-slide-up-delay {
  animation: slideUp 0.8s ease-out 0.4s both;
}

.animate-bounce-slow {
  animation: bounceSlow 2s infinite;
}
</style>
