<template>
  <GuideLayout
    title-key="guide_apartment.title"
    description-key="guide_apartment.description"
    mobile-title="Apartment Search Guide"
    mobile-description="Complete guide to finding apartments in Spain"
    hero-image="/images/timeline/couple-visiting-property.png"
    hero-image-alt="Apartment Search in Spain"
    hero-title-key="guide_apartment.hero.title"
    hero-description-key="guide_apartment.hero.description"
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
          {{ $t('guide_apartment.content.table_of_contents.title') }}
        </h2>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="(item, index) in tableOfContents" :key="index" 
             @click="() => scrollToSection(item)"
             class="flex items-center space-x-3 p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover:shadow-md group">
          <span class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 transition-colors">
            {{ index + 1 }}
          </span>
          <span class="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{{ $t('guide_apartment.content.table_of_contents.items.' + item) }}</span>
        </div>
      </div>
    </div>
        <!-- Overview -->
        <div id="overview" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.overview.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_apartment.content.overview.description') }}
            </p>
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="(approach, index) in searchApproaches" :key="index" 
                   class="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center text-lg font-bold">
                    {{ index + 1 }}
                  </div>
                  <h3 class="text-xl font-bold text-gray-800">{{ $t(`guide_apartment.content.overview.approaches.${approach}.title`) }}</h3>
                </div>
                <p class="text-gray-700 leading-relaxed">{{ $t(`guide_apartment.content.overview.approaches.${approach}.description`) }}</p>
              </div>
            </div>
            <div class="mt-6 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200 shadow-sm relative">
              <div class="absolute top-4 right-4 w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div class="pr-12">
                <h4 class="text-lg font-bold text-amber-800 mb-2">Pro-Tipp</h4>
                <p class="text-amber-700 leading-relaxed">
                  {{ $t('guide_apartment.content.overview.tip') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Regional Differences -->
        <div id="regional_differences" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.regional_differences.title') }}
              </h2>
            </div>
            
            <div class="grid gap-6">
              <div v-for="(region, index) in regions" :key="index" 
                   class="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{{ index + 1 }}</span>
                  {{ $t(`guide_apartment.content.regional_differences.regions.${region}.title`) }}
                </h3>
                <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                  {{ $t(`guide_apartment.content.regional_differences.regions.${region}.description`) }}
                </p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-white p-4 rounded-lg border border-green-200">
                    <p class="text-green-800 font-semibold">
                      <strong>{{ $t('guide_apartment.content.regional_differences.pros') }}:</strong> {{ $t(`guide_apartment.content.regional_differences.regions.${region}.pros`) }}
                    </p>
                  </div>
                  <div class="bg-white p-4 rounded-lg border border-red-200">
                    <p class="text-red-800 font-semibold">
                      <strong>{{ $t('guide_apartment.content.regional_differences.cons') }}:</strong> {{ $t(`guide_apartment.content.regional_differences.regions.${region}.cons`) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p class="text-blue-800 font-semibold">
                {{ $t('guide_apartment.content.regional_differences.note') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Online Platforms -->
        <div id="online_platforms" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.online_platforms.title') }}
              </h2>
            </div>
            
            <!-- Major Portals -->
            <div class="mb-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.online_platforms.major_portals.title') }}</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="(portal, index) in majorPortals" :key="index" 
                     class="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 class="font-bold text-gray-800 mb-2">{{ $t(`guide_apartment.content.online_platforms.major_portals.portals.${portal}.name`) }}</h4>
                  <p class="text-gray-700 text-sm">{{ $t(`guide_apartment.content.online_platforms.major_portals.portals.${portal}.description`) }}</p>
                </div>
              </div>
            </div>

            <!-- Filter Tips -->
            <div class="mb-8">
              <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.online_platforms.filter_tips.title') }}</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">{{ $t('guide_apartment.content.online_platforms.filter_tips.keywords.title') }}</h4>
                  <div class="space-y-2">
                    <div v-for="(keyword, index) in keywords" :key="index" 
                         class="flex items-center space-x-2">
                      <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span class="text-gray-700">{{ $t('guide_apartment.content.online_platforms.filter_tips.keywords.items.' + keyword) }}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">{{ $t('guide_apartment.content.online_platforms.filter_tips.notifications.title') }}</h4>
                  <p class="text-gray-700 text-sm mb-3">{{ $t('guide_apartment.content.online_platforms.filter_tips.notifications.description') }}</p>
                  <div class="bg-amber-50 p-3 rounded-lg">
                    <p class="text-amber-800 text-sm font-medium">{{ $t('guide_apartment.content.online_platforms.filter_tips.notifications.tip') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Local Methods -->
        <div id="local_methods" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.local_methods.title') }}
              </h2>
            </div>
            
            <div class="grid gap-6">
              <div v-for="(method, index) in localMethods" :key="index" 
                   class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <h3 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{{ index + 1 }}</span>
                  {{ $t(`guide_apartment.content.local_methods.methods.${method}.title`) }}
                </h3>
                <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                  {{ $t(`guide_apartment.content.local_methods.methods.${method}.description`) }}
                </p>
                <div v-if="method === 'real_estate_agents'" class="bg-white p-4 rounded-lg border border-green-200">
                  <h4 class="font-semibold text-gray-800 mb-2">{{ $t('guide_apartment.content.local_methods.methods.real_estate_agents.tips.title') }}</h4>
                  <ul class="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    <li v-for="(tip, tipIndex) in realEstateTips" :key="tipIndex">
                      {{ $t('guide_apartment.content.local_methods.methods.real_estate_agents.tips.items.' + tip) }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Reading Listings -->
        <div id="reading_listings" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.reading_listings.title') }}
              </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.reading_listings.checklist.title') }}</h3>
                <div class="space-y-3">
                  <div v-for="(item, index) in listingChecklist" :key="index" 
                       class="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div class="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {{ index + 1 }}
                    </div>
                    <span class="text-gray-700">{{ $t('guide_apartment.content.reading_listings.checklist.items.' + item) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.reading_listings.scoring.title') }}</h3>
                <p class="text-gray-700 mb-4">{{ $t('guide_apartment.content.reading_listings.scoring.description') }}</p>
                <div class="space-y-2">
                  <div v-for="(criteria, index) in scoringCriteria" :key="index" 
                       class="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span class="text-gray-700">{{ $t('guide_apartment.content.reading_listings.scoring.criteria.' + criteria) }}</span>
                    <div class="flex space-x-1">
                      <div v-for="i in 5" :key="i" 
                           class="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Viewing Checklist -->
        <div id="viewing_checklist" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.viewing_checklist.title') }}
              </h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="(phase, index) in viewingPhases" :key="index" 
                   class="p-6 bg-white rounded-xl shadow-md">
                <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <span class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{{ index + 1 }}</span>
                  {{ $t(`guide_apartment.content.viewing_checklist.phases.${phase}.title`) }}
                </h3>
                <div class="space-y-2">
                  <div v-for="(item, itemIndex) in viewingChecklist[phase]" :key="itemIndex" 
                       class="flex items-start space-x-2">
                    <div class="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span class="text-gray-700 text-sm">{{ $t('guide_apartment.content.viewing_checklist.phases.' + phase + '.items.' + item) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Dossier -->
        <div id="search_dossier" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.search_dossier.title') }}
              </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.search_dossier.documents.title') }}</h3>
                <div class="space-y-3">
                  <div v-for="(doc, index) in requiredDocuments" :key="index" 
                       class="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div class="flex-shrink-0 w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {{ index + 1 }}
                    </div>
                    <span class="text-gray-700">{{ $t('guide_apartment.content.search_dossier.documents.items.' + doc) }}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.search_dossier.spanish_template.title') }}</h3>
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p class="text-gray-700 text-sm font-mono leading-relaxed">{{ $t('guide_apartment.content.search_dossier.spanish_template.text') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Red Flags -->
        <div id="red_flags" class="bg-gradient-to-br from-gray-50 to-red-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.red_flags.title') }}
              </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="(flag, index) in redFlags" :key="index" 
                   class="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    ⚠️
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-red-800 mb-2">{{ $t(`guide_apartment.content.red_flags.flags.${flag}.title`) }}</h3>
                    <p class="text-red-700">{{ $t(`guide_apartment.content.red_flags.flags.${flag}.description`) }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-400">
              <p class="text-red-800 font-semibold">
                {{ $t('guide_apartment.content.red_flags.warning') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Budget Planning -->
        <div id="budget_planning" class="bg-gradient-to-br from-spain-cream to-spain-yellow/20">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.budget_planning.title') }}
              </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.budget_planning.costs.title') }}</h3>
                <div class="space-y-3">
                  <div v-for="(cost, index) in costCategories" :key="index" 
                       class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                    <span class="text-gray-700">{{ $t('guide_apartment.content.budget_planning.costs.items.' + cost) }}</span>
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">{{ $t('guide_apartment.content.budget_planning.spreadsheet.title') }}</h3>
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p class="text-gray-700 text-sm mb-3">{{ $t('guide_apartment.content.budget_planning.spreadsheet.description') }}</p>
                  <div class="grid grid-cols-2 gap-2 text-xs">
                    <div v-for="(field, index) in spreadsheetFields" :key="index" 
                         class="p-2 bg-white rounded border border-gray-200 text-center">
                      {{ $t('guide_apartment.content.budget_planning.spreadsheet.fields.' + field) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Glossary -->
        <div id="glossary" class="bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div class="px-4 py-8 md:px-6 md:py-16">
            <div class="flex items-start space-x-4 mb-8">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">
                {{ $t('guide_apartment.content.glossary.title') }}
              </h2>
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div v-for="(term, index) in glossaryTerms" :key="index" 
                   class="p-4 bg-white rounded-lg border border-gray-200">
                <div class="flex items-start space-x-3">
                  <div class="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">
                    {{ index + 1 }}
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-800">{{ $t(`guide_apartment.content.glossary.terms.${term}.term`) }}</h3>
                    <p class="text-gray-700 text-sm">{{ $t(`guide_apartment.content.glossary.terms.${term}.definition`) }}</p>
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
                {{ $t('guide_apartment.content.conclusion.title') }}
              </h2>
            </div>
            <p class="text-lg text-gray-700 mb-6 leading-relaxed">
              {{ $t('guide_apartment.content.conclusion.description') }}
            </p>
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  </GuideLayout>
</template>

<script lang="ts" setup>
// Arrays for v-for loops
const tableOfContents = [
  'overview',
  'regional_differences',
  'online_platforms',
  'local_methods',
  'reading_listings',
  'viewing_checklist',
  'search_dossier',
  'red_flags',
  'budget_planning',
  'glossary'
]

const searchApproaches = [
  'online_portals',
  'real_estate_agents',
  'private_networks'
]

const regions = [
  'big_cities',
  'medium_cities',
  'coast',
  'islands'
]

const majorPortals = [
  'idealista',
  'fotocasa',
  'habitaclia',
  'pisos',
  'yaencontre',
  'tucasa',
  'milanuncios',
  'badi',
  'spotahome',
  'housing_anywhere'
]

const keywords = [
  'long_term',
  'utilities_included',
  'no_commission',
  'furnished',
  'unfurnished',
  'air_conditioning',
  'heating',
  'garage',
  'storage'
]

const localMethods = [
  'real_estate_agents',
  'neighborhood_bars',
  'facebook_whatsapp'
]

const realEstateTips = [
  'visit_offices',
  'search_description',
  'internal_listings',
  'whatsapp_lists'
]

const listingChecklist = [
  'address_location',
  'floor_plan_sqm',
  'orientation',
  'floor_elevator',
  'heating_cooling',
  'utilities_included',
  'furniture_condition',
  'photos_vs_reality',
  'energy_certificate',
  'duration_notes'
]

const scoringCriteria = [
  'location',
  'noise',
  'light',
  'condition',
  'costs',
  'home_office'
]

const viewingPhases = [
  'before_visit',
  'during_visit',
  'after_visit'
]

const viewingChecklist = {
  before_visit: [
    'qualify_phone',
    'test_commute',
    'prepare_questions'
  ],
  during_visit: [
    'smell_humidity',
    'windows_insulation',
    'water_pressure',
    'electricity_outlets',
    'kitchen_bathroom',
    'air_conditioning',
    'noise_level',
    'community',
    'mobile_internet',
    'sunlight'
  ],
  after_visit: [
    'clarify_questions',
    'request_documents',
    'make_decision'
  ]
}

const requiredDocuments = [
  'id_passport',
  'nie',
  'income_proof',
  'cover_letter',
  'references',
  'liquidity_proof'
]

const redFlags = [
  'owner_abroad',
  'advance_payment',
  'unclear_costs',
  'pressure_hurry',
  'no_personal_meeting',
  'no_receipt',
  'images_address_dont_match'
]

const costCategories = [
  'rent',
  'electricity',
  'water',
  'gas',
  'internet',
  'waste',
  'community',
  'air_conditioning',
  'commuting',
  'parking',
  'furniture',
  'repairs'
]

const spreadsheetFields = [
  'link',
  'address',
  'price',
  'sqm_rooms',
  'floor_elevator',
  'orientation',
  'heating_cooling',
  'furnished',
  'energy_certificate',
  'utilities_included',
  'contact',
  'status',
  'score',
  'notes'
]

const glossaryTerms = [
  'long_term_rental',
  'utilities_included',
  'furnished',
  'unfurnished',
  'elevator',
  'garage',
  'storage',
  'deposit',
  'guarantee',
  'community',
  'energy_certificate'
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
  title: 'Apartment Search Guide - Find Your Perfect Home in Spain',
  meta: [
    { name: 'description', content: 'Complete guide to finding apartments in Spain. Learn where to search, how to read listings, and avoid common pitfalls.' }
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

