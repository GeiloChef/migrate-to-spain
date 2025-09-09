<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
        2
      </div>
      <h3 class="!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.bankAccount.title') }}
      </h3>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 items-start mb-6">
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('bureaucracy.bankAccount.paragraph1') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.bankAccount.paragraph2') }}
        </p>
        <p class="mb-4">
          {{ $t('bureaucracy.bankAccount.paragraph3') }}
        </p>
      </div>
      <div class="space-y-4">
        <div class="h-48 rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Spanish bank building and banking services"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="!text-lg font-semibold text-gray-900 mb-2">{{ $t('bureaucracy.bankAccount.requirements.title') }}</h3>
          <ul class="!text-sm text-gray-600 space-y-1">
            <li>• {{ $t('bureaucracy.bankAccount.requirements.item1') }}</li>
            <li>• {{ $t('bureaucracy.bankAccount.requirements.item2') }}</li>
            <li>• {{ $t('bureaucracy.bankAccount.requirements.item3') }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Tipp-Box - Full Width -->
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
      <p class="text-yellow-800 font-medium">
        {{ $t('bureaucracy.bankAccount.tip') }}
      </p>
    </div>
  </div>
</template>
