<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.glutenFree.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('discoveringSpain.glutenFree.paragraph1') }}
        </p>
        <p>
          {{ $t('discoveringSpain.glutenFree.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Spanish supermarket with gluten-free products"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    
    <div class="mt-8 grid md:grid-cols-2 gap-6">
      <div class="bg-green-50 rounded-xl p-6 border border-green-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:building-storefront" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900 text-lg">
            {{ $t('discoveringSpain.glutenFree.restaurants.title') }}
          </h4>
        </div>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.glutenFree.restaurants.description') }}
        </p>
      </div>
      
      <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div class="flex items-center gap-3 mb-3">
          <div class="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Icon name="heroicons:shopping-cart" class="w-5 h-5 text-white" />
          </div>
          <h4 class="font-semibold text-gray-900 text-lg">
            {{ $t('discoveringSpain.glutenFree.supermarkets.title') }}
          </h4>
        </div>
        <p class="text-gray-700">
          {{ $t('discoveringSpain.glutenFree.supermarkets.description') }}
        </p>
      </div>
    </div>
  </div>
</template>
