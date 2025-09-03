<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('bureaucracy.introduction.title') }}
    </h3>
    <div class="grid md:grid-cols-2 gap-8 items-center mb-6">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('bureaucracy.introduction.paragraph1') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.introduction.paragraph2') }}
        </p>
      </div>
      <div class="h-64 rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Official documents and paperwork"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    
    <!-- Tip Box - Full Width -->
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <p class="text-yellow-800 font-medium">
        {{ $t('bureaucracy.introduction.tip') }}
      </p>
    </div>
  </div>
</template>
