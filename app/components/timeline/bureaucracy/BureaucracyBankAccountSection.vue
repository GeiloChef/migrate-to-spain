<template>
  <div>
    <div class="flex items-center gap-3 mb-6">
      <div class="w-6 h-6 md:w-8 md:h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
        2
      </div>
      <h2 class="!text-xl md:!text-2xl font-bold text-gray-900">
        {{ $t('bureaucracy.bankAccount.title') }}
      </h2>
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
        <div class="h-64 rounded-xl overflow-hidden shadow-md">
          <img 
            src="/images/timeline/opening-bank-account.png" 
            alt="Handshake bei Bankkonto-Eröffnung - Geschäftsmann und Bankberater"
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
    
    <!-- Tipp-Box - Card Style -->
    <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200/50 shadow-lg relative overflow-hidden">
      <!-- Background icon -->
      <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center opacity-20">
        <Icon name="heroicons:light-bulb" class="w-10 h-10 text-white" />
      </div>
      <!-- Content -->
      <div class="relative z-10">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-lg">
          Mein Tipp:
        </h3>
        <p class="text-yellow-800 font-medium text-lg">
          {{ $t('bureaucracy.bankAccount.tip') }}
        </p>
      </div>
    </div>
  </div>
</template>
