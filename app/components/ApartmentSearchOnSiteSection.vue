<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-4 px-8">
      {{ $t('apartmentSearch.onSite.title') }}
    </h3>
    
    <div class="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 mb-8">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p class="text-lg">
            {{ $t('apartmentSearch.onSite.paragraph1') }}
          </p>
          <p class="text-lg">
            {{ $t('apartmentSearch.onSite.paragraph2') }}
          </p>
        </div>
        <div class="h-full rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Murcia cityscape with Mediterranean architecture"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="bg-gradient-to-br from-spain-cream to-spain-yellow/20 rounded-3xl p-8 mb-8">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="h-full rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Property viewing process"
            class="w-full h-full object-cover"
          />
        </div>
        
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <h4 class="font-semibold text-gray-900 mb-4 text-xl">
            Wie läuft die Besichtigung ab?
          </h4>
          <p class="text-lg">
            Die Besichtigungen selbst liefen ziemlich ähnlich ab: Erst ein kurzer Austausch über die Maklergebühren (ja, in Spanien zahlt die oft der Käufer – was in Deutschland unüblich ist), dann eine kleine Unterschrift, dass man im Falle eines Kaufs diese Gebühren akzeptiert. Anschließend ging es in die Wohnung. Am Ende war es nicht viel anders als bei einer Mietbesichtigung in Deutschland: durchgehen, Fragen stellen, und versuchen, sich den Alltag dort vorzustellen.

            Und ehrlich gesagt wusste ich meist schon in den ersten 30 bis 40 Sekunden, ob es passen könnte oder nicht. Dieses Bauchgefühl hat mich selten getäuscht.
          </p>
        </div>
      </div>
    </div>

    <!-- Warning Box -->
    <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-3xl p-8 border border-red-200/50 shadow-xl">
      <div class="flex items-start gap-6">
        <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
          <Icon name="heroicons:exclamation-triangle" class="w-6 h-6 text-white" />
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900 mb-3 text-xl">
            Wichtiger Hinweis
          </h4>
          <p class="text-gray-700 leading-relaxed text-lg">
            Von Privatkäufen würde ich übrigens eher abraten – das spanische Immobilienrecht ist nicht ohne, und ein Makler sorgt zumindest für etwas Sicherheit im Prozess.
          </p>
        </div>
      </div>
    </div>


  </div>
</template>
