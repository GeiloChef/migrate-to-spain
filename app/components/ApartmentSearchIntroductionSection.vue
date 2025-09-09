<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('apartmentSearch.introduction.title') }}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('apartmentSearch.introduction.paragraph1') }}
        </p>
        <p>
          {{ $t('apartmentSearch.introduction.paragraph2') }}
        </p>
      </div>
      <div class="h-full rounded-xl overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Modern apartment building in Spain"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
    

  </div>
</template>
