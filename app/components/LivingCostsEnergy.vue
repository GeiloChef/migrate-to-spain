<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
    <!-- Hero Image mit Text -->
    <div class="relative h-32 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Electricity meter and power lines"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-3 left-3">
        <h3 class="text-white font-bold text-lg">Energie</h3>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- Deutschland Berechnung -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">Deutschland - Monatsberechnung</h4>
          
          <!-- Verbrauchsannahmen -->
          <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h5 class="font-medium text-gray-700 mb-2 text-sm">Verbrauchsannahmen (2-Personen-Haushalt):</h5>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• Monatlicher Verbrauch: 250 kWh</li>
              <li>• Durchschnittspreis: 0,40€/kWh</li>
              <li>• Grundgebühr: 15€/Monat</li>
            </ul>
          </div>
          
          <!-- Berechnung -->
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="text-sm text-gray-700">Stromverbrauch (250 kWh × 0,40€)</div>
              <div class="text-lg font-bold text-red-600">100,00€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="text-sm text-gray-700">Grundgebühr</div>
              <div class="text-lg font-bold text-red-600">15,00€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
              <div class="text-sm font-medium text-gray-700">Gesamtkosten pro Monat</div>
              <div class="text-xl font-bold text-red-600">115,00€</div>
            </div>
          </div>
        </div>

        <!-- Spanien Berechnung -->
        <div>
          <h4 class="font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">Spanien - Monatsberechnung</h4>
          
          <!-- Verbrauchsannahmen -->
          <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <h5 class="font-medium text-gray-700 mb-2 text-sm">Verbrauchsannahmen (2-Personen-Haushalt):</h5>
            <ul class="text-xs text-gray-600 space-y-1">
              <li>• Monatlicher Verbrauch: 250 kWh</li>
              <li>• Tagstrom: 0,30€/kWh (70% des Verbrauchs)</li>
              <li>• Nachtstrom: 0,20€/kWh (30% des Verbrauchs)</li>
              <li>• Potencia: 5€/kW/Monat (bei 3,5 kW)</li>
            </ul>
          </div>
          
          <!-- Berechnung -->
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="text-sm text-gray-700">Tagstrom (175 kWh × 0,30€)</div>
              <div class="text-lg font-bold text-blue-600">52,50€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="text-sm text-gray-700">Nachtstrom (75 kWh × 0,20€)</div>
              <div class="text-lg font-bold text-blue-600">15,00€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
              <div class="text-sm text-gray-700">Potencia (3,5 kW × 5€)</div>
              <div class="text-lg font-bold text-blue-600">17,50€</div>
            </div>
            <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
              <div class="text-sm font-medium text-gray-700">Gesamtkosten pro Monat</div>
              <div class="text-xl font-bold text-green-600">85,00€</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wichtiger Hinweis -->
      <div class="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
        <div class="flex items-start gap-3">
          <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div>
            <p class="text-sm text-amber-800 font-medium mb-1">Wichtiger Hinweis</p>
            <p class="text-xs text-amber-700">
              Dies ist ein rein rechnerisches Beispiel für einen durchschnittlichen 2-Personen-Haushalt. 
              Die tatsächlichen Kosten können je nach Verbrauchsverhalten, Anbieter, Region und Jahreszeit stark abweichen. 
              In Spanien können die Kosten durch optimale Nutzung der Nachtstromzeiten weiter reduziert werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
