<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <!-- Content -->
    <div class="space-y-6">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="!text-2xl font-bold text-gray-900">
          {{ $t('propertyPurchase.notaryAppointment.title') }}
        </h3>
      </div>
      
      <div class="space-y-4 text-gray-700 leading-relaxed">
        <p class="mb-4">
          {{ $t('propertyPurchase.notaryAppointment.content1') }}
        </p>
        
        <p class="mb-4">
          {{ $t('propertyPurchase.notaryAppointment.content2') }}
        </p>
        
        <p>
          {{ $t('propertyPurchase.notaryAppointment.content3') }}
        </p>
      </div>
    </div>

    <!-- Success Card with Image -->
    <div class="relative">
      <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-lg">
        <div class="flex items-start gap-4 mb-4">
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-semibold text-green-800 mb-2">Erfolg!</h4>
            <p class="text-green-700 font-medium text-lg">
              {{ $t('propertyPurchase.notaryAppointment.success') }}
            </p>
          </div>
        </div>
        
        <!-- Success Image -->
        <div class="aspect-[4/3] rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Keys to new property"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-300 rounded-full opacity-60"></div>
      <div class="absolute -bottom-1 -left-1 w-4 h-4 bg-emerald-300 rounded-full opacity-40"></div>
    </div>
  </div>
</template>
