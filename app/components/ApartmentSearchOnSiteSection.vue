<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.onSite.title') }}
    </h3>
    
    <div class="grid md:grid-cols-2 gap-8 items-center mb-8">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('apartmentSearch.onSite.paragraph1') }}
        </p>
        <p>
          {{ $t('apartmentSearch.onSite.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Murcia cityscape with Mediterranean architecture"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Feature Cards -->
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <!-- Market -->
      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:chart-bar" class="w-4 h-4 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900">
            {{ $t('apartmentSearch.onSite.market.title') }}
          </h4>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ $t('apartmentSearch.onSite.market.description') }}
        </p>
      </div>

      <!-- Viewings -->
      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:eye" class="w-4 h-4 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900">
            {{ $t('apartmentSearch.onSite.viewings.title') }}
          </h4>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ $t('apartmentSearch.onSite.viewings.description') }}
        </p>
      </div>

      <!-- Process -->
      <div class="bg-white rounded-xl p-6 shadow-md border border-gray-200/50">
        <div class="flex items-center gap-3 mb-3">
          <div class="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:clipboard-document-list" class="w-4 h-4 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900">
            {{ $t('apartmentSearch.onSite.process.title') }}
          </h4>
        </div>
        <p class="text-gray-700 text-sm leading-relaxed">
          {{ $t('apartmentSearch.onSite.process.description') }}
        </p>
      </div>
    </div>

    <!-- Highlight Box -->
    <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50 shadow-lg">
      <div class="flex items-start gap-4">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
          <Icon name="heroicons:heart" class="w-6 h-6 text-white" />
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900 mb-3 text-lg">
            {{ $t('apartmentSearch.onSite.highlight') }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
