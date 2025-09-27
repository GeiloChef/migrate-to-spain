<template>
  <div class="text-center">
    <div class="mb-8">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-6">
        <Icon name="heroicons:check" class="w-10 h-10 text-white" />
      </div>
      <h2 class="!text-2xl font-bold text-gray-900 mb-4">
        {{ $t('apartmentSearch.success.title') }}
      </h2>
      <p class="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
        {{ $t('apartmentSearch.success.description') }}
      </p>
    </div>

    <!-- Success Image -->
    <div class="max-w-2xl mx-auto">
      <div class="h-80 rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Successfully purchased apartment in Spain"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Celebration Elements -->
    <div class="mt-8 flex justify-center gap-4">
      <div class="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
      <div class="w-3 h-3 bg-green-500 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
      <div class="w-3 h-3 bg-green-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
    </div>
  </div>
</template>
