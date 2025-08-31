<template>
  <div class="mb-16" id="arbeit">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <span class="text-green-600 font-bold text-xl">2</span>
      </div>
      <h3 class="!text-3xl font-bold text-gray-900">
        Arbeit
      </h3>
    </div>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        Natürlich war Arbeit für mich ein zentrales Thema. Schließlich bin ich wie die meisten von meinem Einkommen abhängig. Meine Recherche zeigte mir schnell: Im Prinzip gibt es für mich zwei Optionen.
      </p>
      
      <!-- Hero Image für den Arbeitsbereich -->
      <div class="w-full h-64 rounded-xl overflow-hidden mb-8 shadow-lg">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Team working remotely and in office - work options"
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
          <h4 class="font-semibold text-gray-900 mb-4 text-lg">Option 1: Remote Work aus Deutschland</h4>
          <div class="space-y-3 flex-grow">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Höheres deutsches Gehaltsniveau</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Sicherheit, weil man beim deutschen Arbeitgeber bleibt</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Sozialversicherungssystem bleibt gleich</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Flexibilität: man kann reisen, ohne sofort in Spanien alle Systeme umzustellen</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p class="text-sm text-amber-800">
              <strong>Achtung:</strong> 183-Tage-Regel → sobald ich zu lange in Spanien bleibe, wird es steuerlich kompliziert
            </p>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
          <h4 class="font-semibold text-gray-900 mb-4 text-lg">Option 2: Arbeiten direkt in Spanien</h4>
          <div class="space-y-3 flex-grow">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Leichter, sich vor Ort zu integrieren</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Steuerlich einfacher (ein Land, ein System)</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-sm text-gray-700">Lokale Netzwerke und Jobmöglichkeiten</span>
            </div>
          </div>
          <div class="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
            <p class="text-sm text-red-800">
              <strong>Nachteil:</strong> Gehälter in Spanien liegen im Schnitt deutlich unter deutschen. 2025: Spanien ~28.000€ vs. Deutschland ~46.000€
            </p>
          </div>
        </div>
      </div>
      
      <!-- Verbesserte Entscheidungsbox -->
      <div class="mt-8 relative rounded-xl overflow-hidden shadow-lg">
        <!-- Hintergrundbild mit Opacity -->
        <div class="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Decision making and planning"
            class="w-full h-full object-cover opacity-15"
          />
        </div>
        <!-- Content mit semi-transparentem Hintergrund -->
        <div class="relative p-8 bg-white/95 backdrop-blur-sm text-center">
          <div class="inline-flex items-center gap-3 px-4 py-2 bg-blue-100/80 rounded-full text-blue-800 text-sm font-medium mb-4 border border-blue-200/50">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            Meine Entscheidung
          </div>
          <h4 class="font-bold text-gray-900 mb-3 text-xl">Remote-Work als Übergangslösung</h4>
          <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Als Übergang starte ich mit Remote-Work. Das half mir ungemein – ich konnte vor Ort alles regeln (Bankkonto, Gestoría, Wohnung etc.), ohne jedes Mal Urlaub nehmen zu müssen. Und ja, es sparte mir eine Menge Geld für Flüge.
          </p>
          <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 rounded-lg text-blue-700 text-sm">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" />
            </svg>
            Reminder: Wer Remote aus Spanien arbeitet, sollte die 183-Tage-Regel im Auge behalten
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props or logic needed for this component
</script>
