<template>
  <div>
    <h2 class="!text-2xl font-bold text-gray-900 mb-4 px-8">
      {{ $t('apartmentSearch.onSite.title') }}
    </h2>
    
    <div class="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-0 mb-8">
      <div class="grid md:grid-cols-2 gap-8 items-center p-4 md:p-8">
        <!-- Mobile: Image first, Desktop: Text first -->
        <div class="order-2 md:order-1 space-y-6 text-gray-700 leading-relaxed">
          <p class="!text-lg">
            {{ $t('apartmentSearch.onSite.paragraph1') }}
          </p>
          <p class="!text-lg">
            {{ $t('apartmentSearch.onSite.paragraph2') }}
          </p>
        </div>
        <div class="order-1 md:order-2 h-full rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/images/timeline/murcia-painted.png" 
            alt="Murcia Aquarellmalerei - Stadtansicht mit Fluss und Kirchturm"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20 rounded-3xl p-0 mb-8">
      <div class="grid md:grid-cols-2 gap-8 items-start p-4 md:p-8">
        <div class="h-full rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/images/timeline/couple-visiting-property.png" 
            alt="Paar bei Wohnungsbesichtigung mit Maklerin - Besichtigungsprozess"
            class="w-full h-full object-cover"
          />
        </div>
        
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <h3 class="!text-lg font-semibold text-gray-900 mb-4 text-xl">
            {{ $t('apartmentSearch.onSite.viewingProcess.title') }}
          </h3>
          <p class="!text-lg">
            {{ $t('apartmentSearch.onSite.viewingProcess.description') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Warning Box -->
    <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-0 border border-red-200/50 shadow-xl relative overflow-hidden">
      <!-- Background icon -->
      <div class="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center opacity-20">
        <Icon name="heroicons:exclamation-triangle" class="w-10 h-10 text-white" />
      </div>
      <!-- Content -->
      <div class="relative z-10 p-4 md:p-8">
        <h3 class="!text-lg font-semibold text-gray-900 mb-3 text-xl">
          Wichtiger Hinweis
        </h3>
        <p class="text-gray-700 leading-relaxed text-lg">
          Von Privatkäufen würde ich übrigens eher abraten – das spanische Immobilienrecht ist nicht ohne, und ein Makler sorgt zumindest für etwas Sicherheit im Prozess.
        </p>
      </div>
    </div>


  </div>
</template>
