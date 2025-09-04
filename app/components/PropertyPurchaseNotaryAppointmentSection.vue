<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('propertyPurchase.notaryAppointment.title') }}
    </h3>
    <div class="space-y-4 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('propertyPurchase.notaryAppointment.content1') }}
      </p>
      
      <p class="mb-4">
        {{ $t('propertyPurchase.notaryAppointment.content2') }}
      </p>
      
      <div class="bg-green-50 border-l-4 border-green-400 p-6 my-8">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-green-700 font-medium">
              {{ $t('propertyPurchase.notaryAppointment.success') }}
            </p>
          </div>
        </div>
      </div>
      
      <p>
        {{ $t('propertyPurchase.notaryAppointment.content3') }}
      </p>
    </div>
  </div>
</template>
