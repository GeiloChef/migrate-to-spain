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

    <!-- Phone Lock Screen with Push Notification -->
    <div class="relative">
      <!-- Phone Frame -->
      <div class="w-64 mx-auto bg-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl">
        <!-- Lock Screen -->
        <div class="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 rounded-[2rem] overflow-hidden relative aspect-[9/19.5]">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-20">
            <div class="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
          </div>
          
          <!-- Status Bar -->
          <div class="relative z-10 px-6 py-3 flex justify-between items-center text-white text-sm">
            <span>9:41</span>
            <div class="flex items-center gap-1">
              <div class="w-4 h-2 bg-white/60 rounded-sm"></div>
              <div class="w-4 h-2 bg-white/60 rounded-sm"></div>
              <div class="w-4 h-2 bg-white/60 rounded-sm"></div>
            </div>
            <span>100%</span>
          </div>
          
          <!-- Lock Screen Content -->
          <div class="relative z-10 px-4 py-6 text-center text-white">
            <div class="text-4xl font-thin mb-1">9:41</div>
            <div class="text-sm opacity-90">Montag, 20. Juni</div>
          </div>
          
          <!-- Push Notification -->
          <div class="absolute bottom-16 left-3 right-3 z-20">
            <div class="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-2xl">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-xs">Gestoría</div>
                  <div class="text-xs text-gray-500">vor 2 Min</div>
                </div>
              </div>
              <p class="text-gray-800 text-xs leading-relaxed">
                👉 "Felicidades – ab jetzt gehört sie dir."
              </p>
            </div>
          </div>
          
          <!-- Home Indicator -->
          <div class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-white/30 rounded-full"></div>
        </div>
      </div>
      
      <!-- Decorative elements -->
      <div class="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </div>
    </div>
  </div>
</template>
