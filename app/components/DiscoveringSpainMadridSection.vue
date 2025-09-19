<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('discoveringSpain.madrid.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('discoveringSpain.madrid.paragraph1') }}
        </p>
        <p>
          {{ $t('discoveringSpain.madrid.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Madrid cityscape with modern architecture"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    
    <div class="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200/50 shadow-lg relative overflow-hidden">
      <!-- Background icon with opacity -->
      <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center opacity-20">
        <Icon name="heroicons:chat-bubble-left-right" class="w-10 h-10 text-white" />
      </div>
      <!-- Content -->
      <div class="relative z-10">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          {{ $t('discoveringSpain.madrid.highlight') }}
        </h3>
      </div>
    </div>
  </div>
</template>
