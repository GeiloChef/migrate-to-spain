<template>
  <GuideLayout
    title-key="guide_property_purchase.title"
    description-key="guide_property_purchase.description"
    mobile-title="Property Purchase Guide"
    mobile-description="Complete guide to buying property in Spain"
    hero-image="/images/timeline/couple-visiting-property.png"
    hero-image-alt="Property Purchase in Spain"
    hero-title-key="guide_property_purchase.hero.title"
    hero-description-key="guide_property_purchase.hero.description"
  >

    <!-- Introduction -->
    <div id="introduction" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.introduction.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_property_purchase.content.introduction.description') }}
        </p>
      </div>
    </div>

    <!-- Preparation & Financing -->
    <div id="preparation_financing" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.preparation_financing.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_property_purchase.content.preparation_financing.description') }}
        </p>
        <div class="grid gap-6">
          <div v-for="(item, index) in financingItems" :key="index" 
               class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 relative overflow-hidden">
            <!-- Background number -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t(`guide_property_purchase.content.preparation_financing.${item}.title`) }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ $t(`guide_property_purchase.content.preparation_financing.${item}.description`) }}</p>
            </div>
          </div>
        </div>

        <!-- Property Calculator -->
        <div class="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <div class="flex items-center mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Immobilienrechner</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Input Section -->
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('guide_property_purchase.content.preparation_financing.calculator.property_value') }}
                </label>
                <div class="relative">
                  <input 
                    v-model="formattedPropertyValue"
                    @input="updatePropertyValue"
                    type="text"
                    class="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg font-medium"
                    placeholder="300.000"
                  />
                  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span class="text-gray-500 font-medium">€</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('guide_property_purchase.content.preparation_financing.calculator.equity_percentage') }}
                </label>
                <div class="space-y-3">
                  <!-- Slider -->
                  <div class="relative">
                    <input 
                      v-model.number="equityPercentage"
                      type="range"
                      min="10"
                      max="50"
                      step="5"
                      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                  
                  <!-- Percentage display -->
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-600">10%</span>
                    <div class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                      {{ equityPercentage }}%
                    </div>
                    <span class="text-gray-600">50%</span>
                  </div>
                  
                  <!-- Financing info -->
                  <div class="text-xs text-gray-500 text-center">
                    {{ $t('guide_property_purchase.content.preparation_financing.calculator.financing_info', { equity: equityPercentage, financing: 100 - equityPercentage }) }}
                  </div>
                </div>
              </div>
              
              <div class="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 class="text-sm font-medium text-blue-800 mb-2">{{ $t('guide_property_purchase.content.preparation_financing.calculator.assumptions') }}</h4>
                <ul class="text-sm text-blue-700 space-y-1">
                  <li>• {{ $t('guide_property_purchase.content.preparation_financing.calculator.assumption_1') }}</li>
                  <li>• {{ $t('guide_property_purchase.content.preparation_financing.calculator.assumption_2') }}</li>
                  <li>• {{ $t('guide_property_purchase.content.preparation_financing.calculator.assumption_3') }}</li>
                </ul>
              </div>
            </div>
            
            <!-- Results Section -->
            <div class="space-y-3">
              <!-- Equity Required -->
              <div class="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-sm font-semibold text-green-800">{{ $t('guide_property_purchase.content.preparation_financing.calculator.equity_required') }}</h4>
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                  </div>
                </div>
                <div class="text-xl font-bold text-green-700">{{ formatCurrency(equityRequired) }}</div>
                <div class="text-xs text-green-600 mt-1">{{ equityPercentage }}% {{ $t('guide_property_purchase.content.preparation_financing.calculator.of_property_value') }}</div>
              </div>
              
              <!-- Additional Costs -->
              <div class="p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-sm font-semibold text-amber-800">{{ $t('guide_property_purchase.content.preparation_financing.calculator.additional_costs') }}</h4>
                  <div class="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div class="text-xl font-bold text-amber-700">{{ formatCurrency(additionalCosts) }}</div>
                <div class="text-xs text-amber-600 mt-1">{{ additionalCostsPercentage }}% {{ $t('guide_property_purchase.content.preparation_financing.calculator.of_property_value') }}</div>
              </div>
              
              <!-- Total Required -->
              <div class="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="text-sm font-semibold text-blue-800">{{ $t('guide_property_purchase.content.preparation_financing.calculator.total_required') }}</h4>
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6m0 0v6m0-6l-6 6m6-6l-6 6"></path>
                    </svg>
                  </div>
                </div>
                <div class="text-xl font-bold text-blue-700">{{ formatCurrency(totalRequired) }}</div>
                <div class="text-xs text-blue-600 mt-1">{{ $t('guide_property_purchase.content.preparation_financing.calculator.equity_plus_costs') }}</div>
              </div>
            </div>
          </div>
          
          <!-- Calculator Disclaimer -->
          <div class="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-5 h-5 mt-0.5">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-800 mb-1">{{ $t('guide_property_purchase.content.preparation_financing.calculator.disclaimer.title') }}</h4>
                <p class="text-xs text-gray-600 leading-relaxed">
                  {{ $t('guide_property_purchase.content.preparation_financing.calculator.disclaimer.text') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Purchase Process -->
    <div id="purchase_process" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.purchase_process.title') }}
          </h2>
        </div>
        <div class="space-y-8">
          <div v-for="(step, index) in purchaseSteps" :key="index" 
               class="p-6 bg-white rounded-xl border border-purple-200 shadow-sm relative overflow-hidden">
            <!-- Background icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
              <span class="text-2xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t(`guide_property_purchase.content.purchase_process.${step}.title`) }}</h3>
              <p class="text-gray-700 leading-relaxed mb-4">{{ $t(`guide_property_purchase.content.purchase_process.${step}.description`) }}</p>
              
              <!-- Special content for pre_contract -->
              <div v-if="step === 'pre_contract'" class="space-y-3">
                <div class="p-4 bg-red-50 rounded-lg border border-red-200">
                  <p class="text-red-800 font-semibold">{{ $t('guide_property_purchase.content.purchase_process.pre_contract.buyer_withdrawal') }}</p>
                </div>
                <div class="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p class="text-green-800 font-semibold">{{ $t('guide_property_purchase.content.purchase_process.pre_contract.seller_withdrawal') }}</p>
                </div>
                <div class="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p class="text-blue-800 font-semibold">{{ $t('guide_property_purchase.content.purchase_process.pre_contract.security') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Players -->
    <div id="key_players" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.key_players.title') }}
          </h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="(player, index) in keyPlayers" :key="index" 
               class="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 relative overflow-hidden">
            <!-- Background icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center opacity-20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t(`guide_property_purchase.content.key_players.${player}.title`) }}</h3>
              <p class="text-gray-700 leading-relaxed">{{ $t(`guide_property_purchase.content.key_players.${player}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Taxes & Costs -->
    <div id="taxes_costs" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.taxes_costs.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_property_purchase.content.taxes_costs.description') }}
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          <div v-for="(cost, index) in taxCosts" :key="index" 
               class="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 relative overflow-hidden">
            <!-- Background icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center opacity-20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h3 class="text-lg font-bold text-amber-800 mb-2">{{ $t(`guide_property_purchase.content.taxes_costs.${cost}.title`) }}</h3>
              <p class="text-amber-700 leading-relaxed">{{ $t(`guide_property_purchase.content.taxes_costs.${cost}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Risks & Pitfalls -->
    <div id="risks_pitfalls" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-8">
          <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.risks_pitfalls.title') }}
          </h2>
        </div>
        <div class="space-y-6">
          <div v-for="(risk, index) in risksPitfalls" :key="index" 
               class="p-6 bg-white rounded-xl border border-red-200 shadow-sm relative overflow-hidden">
            <!-- Background warning icon -->
            <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center opacity-20">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
            </div>
            <!-- Content -->
            <div class="relative z-10">
              <h3 class="text-xl font-bold text-red-800 mb-4">{{ $t(`guide_property_purchase.content.risks_pitfalls.${risk}.title`) }}</h3>
              <p class="text-red-700 leading-relaxed">{{ $t(`guide_property_purchase.content.risks_pitfalls.${risk}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- After Purchase -->
    <div id="after_purchase" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
      <div class="px-4 py-8 md:px-6 md:py-16">
        <div class="flex items-start space-x-4 mb-6">
          <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-gray-900">
            {{ $t('guide_property_purchase.content.after_purchase.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
          {{ $t('guide_property_purchase.content.after_purchase.description') }}
        </p>
        
        <!-- Todo List -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-6">
          <div class="flex items-center mb-6">
            <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">Deine To-Do Liste</h3>
          </div>
          
          <div class="space-y-4">
            <div v-for="(step, index) in afterPurchaseSteps" :key="index" 
                 class="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group cursor-pointer">
              <!-- Checkbox -->
              <div class="flex-shrink-0 mt-1">
                <div class="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center group-hover:border-green-500 group-hover:bg-green-500 transition-all duration-300">
                  <!-- Checkmark that appears on hover -->
                  <svg class="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <!-- Content -->
              <div class="flex-1">
                <p class="text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-300">{{ $t(`guide_property_purchase.content.after_purchase.steps.${step}`) }}</p>
              </div>
              <!-- Priority indicator -->
              <div class="flex-shrink-0">
                <span v-if="index < 2" class="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full group-hover:bg-red-200 transition-colors duration-300">
                  {{ $t('guide_property_purchase.content.after_purchase.priority.high') }}
                </span>
                <span v-else-if="index < 4" class="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full group-hover:bg-yellow-200 transition-colors duration-300">
                  {{ $t('guide_property_purchase.content.after_purchase.priority.medium') }}
                </span>
                <span v-else class="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  {{ $t('guide_property_purchase.content.after_purchase.priority.low') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestoría Recommendation -->
        <div class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 relative overflow-hidden">
          <!-- Background icon -->
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <div class="flex items-start space-x-3">
              <div class="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-green-800 mb-2">💡 Pro-Tipp</h4>
                <p class="text-green-700 leading-relaxed">
                  {{ $t('guide_property_purchase.content.after_purchase.gestoria_recommendation') }}
                </p>
              </div>
            </div>
          </div>
        </div>
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
            {{ $t('guide_property_purchase.content.practical_tips.title') }}
          </h2>
        </div>
        
        <!-- Tips Grid -->
        <div class="grid gap-6 md:grid-cols-2">
          <div v-for="(tip, index) in practicalTips" :key="index" 
               class="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-300 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
            <!-- Background gradient on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Content -->
            <div class="relative z-10">
              <!-- Icon and number -->
              <div class="flex items-center mb-4">
                <div class="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
                </div>
                <div class="flex-1">
                  <div class="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" 
                         :style="`transition-delay: ${index * 100}ms`"></div>
                  </div>
                </div>
              </div>
              
              <!-- Tip content -->
              <p class="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {{ $t(`guide_property_purchase.content.practical_tips.tips.${tip}`) }}
              </p>
              
              <!-- Hover indicator -->
              <div class="mt-4 flex items-center text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
                <span class="text-sm font-medium">Wichtiger Tipp</span>
              </div>
            </div>
            
            <!-- Decorative corner -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            {{ $t('guide_property_purchase.content.conclusion.title') }}
          </h2>
        </div>
        <p class="text-lg text-gray-700 mb-6 leading-relaxed">
          {{ $t('guide_property_purchase.content.conclusion.description') }}
        </p>
        <div class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 relative overflow-hidden">
          <!-- Background icon -->
          <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <!-- Content -->
          <div class="relative z-10">
            <p class="text-green-800 font-semibold leading-relaxed">
              {{ $t('guide_property_purchase.content.conclusion.final_thought') }}
            </p>
          </div>
        </div>
        
        <!-- Top spacing for disclaimer -->
        <div class="mt-16">
          <Disclaimer />
        </div>
      </div>
    </div>
  </GuideLayout>
</template>

<script lang="ts" setup>
// Arrays for v-for loops

const financingItems = [
  'equity',
  'additional_costs',
  'mortgage',
  'requirements'
]

// Property Calculator
const propertyValue = ref(300000)
const equityPercentage = ref(25) // Default 25%

// Formatted property value for display
const formattedPropertyValue = ref('300.000')

// Update property value from formatted input
const updatePropertyValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value.replace(/\./g, '') // Remove dots
  const numericValue = parseInt(value) || 0
  propertyValue.value = numericValue
  formattedPropertyValue.value = formatNumber(numericValue)
}

// Format number with thousand separators
const formatNumber = (num: number) => {
  return new Intl.NumberFormat('de-DE').format(num)
}

// Computed values for calculator
const equityRequired = computed(() => {
  return Math.round(propertyValue.value * (equityPercentage.value / 100))
})

const additionalCosts = computed(() => {
  return Math.round(propertyValue.value * 0.125) // 12.5% additional costs
})

const additionalCostsPercentage = computed(() => {
  return Math.round((additionalCosts.value / propertyValue.value) * 100)
})

const totalRequired = computed(() => {
  return equityRequired.value + additionalCosts.value
})

// Format currency function
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

const purchaseSteps = [
  'reservation',
  'pre_contract',
  'main_contract',
  'registration'
]

const keyPlayers = [
  'notary',
  'gestoria',
  'registro',
  'catastro',
  'bank'
]

const taxCosts = [
  'itp',
  'iva',
  'ajd',
  'notary_register',
  'gestoria_costs',
  'plusvalia'
]

const risksPitfalls = [
  'illegal_buildings',
  'outstanding_debts',
  'habitability_certificate',
  'mortgages_registry'
]

const afterPurchaseSteps = [
  'registry',
  'catastro',
  'ibi',
  'utilities',
  'non_resident_tax'
]

const practicalTips = [
  'nie_number',
  'bank_account',
  'debt_certificates',
  'read_contracts',
  'plan_buffer',
  'use_professionals'
]

// SEO
useHead({
  title: 'Property Purchase Guide - Buy Your Dream Home in Spain',
  meta: [
    { name: 'description', content: 'Complete guide to buying property in Spain. Learn about financing, purchase process, taxes, and key players.' }
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

/* Slider styling */
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3B82F6;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3B82F6;
  cursor: pointer;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
</style>
