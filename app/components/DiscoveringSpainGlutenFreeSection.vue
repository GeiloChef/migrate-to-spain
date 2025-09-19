<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.glutenFree.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('discoveringSpain.glutenFree.paragraph1') }}
        </p>
        <p>
          {{ $t('discoveringSpain.glutenFree.paragraph2') }}
        </p>
      </div>
      <div class="h-[400px] rounded-xl overflow-hidden shadow-md">
        <img 
          src="/images/timeline/comida-sin-gluten-2.png" 
          alt="Glutenfreie Produkte im Supermarkt - Tortillas, Brot, Kekse"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="bg-green-50 rounded-xl p-6 border border-green-200 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center opacity-20">
          <Icon name="heroicons:building-storefront" class="w-8 h-8 text-white" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-3">
            {{ $t('discoveringSpain.glutenFree.restaurants.title') }}
          </h3>
          <p class="text-gray-700">
            {{ $t('discoveringSpain.glutenFree.restaurants.description') }}
          </p>
        </div>
      </div>
      
      <div class="bg-blue-50 rounded-xl p-6 border border-blue-200 relative overflow-hidden">
        <!-- Background icon -->
        <div class="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center opacity-20">
          <Icon name="heroicons:shopping-cart" class="w-8 h-8 text-white" />
        </div>
        <!-- Content -->
        <div class="relative z-10">
          <h3 class="!text-lg font-semibold text-gray-900 text-lg mb-3">
            {{ $t('discoveringSpain.glutenFree.supermarkets.title') }}
          </h3>
          <p class="text-gray-700">
            {{ $t('discoveringSpain.glutenFree.supermarkets.description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
