<template>
  <div class="mb-16" id="steuern">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
        <span class="text-purple-600 font-bold text-xl">3</span>
      </div>
      <h3 class="!text-3xl font-bold text-gray-900">
        Steuern & Gehaltsabrechnung
      </h3>
    </div>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p>
        Steuern waren das nächste dicke Thema – immerhin will man ja nicht in eine Falle tappen. Hier zeige ich dir eine detaillierte Gehaltsabrechnung für 2.500€ Brutto im Vergleich Deutschland vs. Spanien.
      </p>
      
      <!-- Gehaltsabrechnung Vergleich -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
            </svg>
          </div>
          <h4 class="font-semibold text-gray-900 text-xl">Gehaltsabrechnung: 2.500€ Brutto</h4>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Deutschland -->
          <div class="bg-white rounded-xl p-6 border border-blue-200 shadow-sm flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <span class="text-lg font-semibold text-gray-900">Deutschland</span>
              <span class="text-sm text-gray-500">2025</span>
            </div>
            
            <!-- Bruttogehalt -->
            <div class="mb-4 p-3 bg-blue-50 rounded-lg">
              <div class="text-2xl font-bold text-blue-600">2.500,00€</div>
              <div class="text-sm text-gray-600">Bruttogehalt</div>
            </div>
            
            <!-- Abzüge -->
            <div class="space-y-3 mb-4 flex-grow">
              <h5 class="font-medium text-gray-900 text-sm">Abzüge:</h5>
              
              <!-- Lohnsteuer -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Lohnsteuer (ca. 15%)</span>
                <span class="font-semibold text-red-600">-375,00€</span>
              </div>
              
              <!-- Kirchensteuer (optional) -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Kirchensteuer (9% von LSt)</span>
                <span class="font-semibold text-red-600">-33,75€</span>
              </div>
              
              <!-- Krankenversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Krankenversicherung (7,3%)</span>
                <span class="font-semibold text-red-600">-182,50€</span>
              </div>
              
              <!-- Pflegeversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Pflegeversicherung (1,525%)</span>
                <span class="font-semibold text-red-600">-38,13€</span>
              </div>
              
              <!-- Rentenversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Rentenversicherung (9,6%)</span>
                <span class="font-semibold text-red-600">-240,00€</span>
              </div>
              
              <!-- Arbeitslosenversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Arbeitslosenversicherung (1,2%)</span>
                <span class="font-semibold text-red-600">-30,00€</span>
              </div>
              
              <!-- Solidaritätszuschlag -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Solidaritätszuschlag (5,5%)</span>
                <span class="font-semibold text-red-600">-20,63€</span>
              </div>
            </div>
            
            <!-- Gesamte Abzüge -->
            <div class="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <div class="flex justify-between items-center">
                <span class="font-medium text-gray-900">Gesamte Abzüge:</span>
                <span class="text-xl font-bold text-red-600">-919,01€</span>
              </div>
            </div>
            
            <!-- Nettogehalt -->
            <div class="p-4 bg-green-50 rounded-lg border border-green-200 mt-auto">
              <div class="text-2xl font-bold text-green-600">1.580,99€</div>
              <div class="text-sm text-gray-600">Nettogehalt</div>
              <div class="text-xs text-gray-500 mt-1">Abzüge: 36,8% vom Brutto</div>
            </div>
          </div>
          
          <!-- Spanien -->
          <div class="bg-white rounded-xl p-6 border border-purple-200 shadow-sm flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <span class="text-lg font-semibold text-gray-900">Spanien</span>
              <span class="text-sm text-gray-500">2025</span>
            </div>
            
            <!-- Bruttogehalt -->
            <div class="mb-4 p-3 bg-purple-50 rounded-lg">
              <div class="text-2xl font-bold text-purple-600">2.500,00€</div>
              <div class="text-sm text-gray-600">Bruttogehalt</div>
            </div>
            
            <!-- Abzüge -->
            <div class="space-y-3 mb-4 flex-grow">
              <h5 class="font-medium text-gray-900 text-sm">Abzüge:</h5>
              
              <!-- IRPF (Einkommensteuer) -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">IRPF (ca. 12%)</span>
                <span class="font-semibold text-red-600">-300,00€</span>
              </div>
              
              <!-- Krankenversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Krankenversicherung (6,35%)</span>
                <span class="font-semibold text-red-600">-158,75€</span>
              </div>
              
              <!-- Rentenversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Rentenversicherung (6,35%)</span>
                <span class="font-semibold text-red-600">-158,75€</span>
              </div>
              
              <!-- Arbeitslosenversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Arbeitslosenversicherung (1,55%)</span>
                <span class="font-semibold text-red-600">-38,75€</span>
              </div>
              
              <!-- Berufsausbildung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Berufsausbildung (0,6%)</span>
                <span class="font-semibold text-red-600">-15,00€</span>
              </div>
              
              <!-- Unfallversicherung -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-600">Unfallversicherung (0,2%)</span>
                <span class="font-semibold text-red-600">-5,00€</span>
              </div>
              
              <!-- Leerzeile für Soli-Zuschlag -->
              <div class="flex justify-between items-center py-2 border-b border-gray-100">
                <span class="text-sm text-gray-400">Solidaritätszuschlag</span>
                <span class="text-sm text-gray-400">-</span>
              </div>
            </div>
            
            <!-- Gesamte Abzüge -->
            <div class="mb-4 p-3 bg-red-50 rounded-lg border border-red-200">
              <div class="flex justify-between items-center">
                <span class="font-medium text-gray-900">Gesamte Abzüge:</span>
                <span class="text-xl font-bold text-red-600">-676,25€</span>
              </div>
            </div>
            
            <!-- Nettogehalt -->
            <div class="p-4 bg-green-50 rounded-lg border border-green-200 mt-auto">
              <div class="text-2xl font-bold text-green-600">1.823,75€</div>
              <div class="text-sm text-gray-600">Nettogehalt</div>
              <div class="text-xs text-gray-500 mt-1">Abzüge: 27,1% vom Brutto</div>
            </div>
          </div>
        </div>
        
                 <!-- Zusammenfassung -->
         <div class="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
           <div class="flex items-center gap-3 mb-4">
             <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
               <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                 <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
               </svg>
             </div>
             <h4 class="font-semibold text-gray-900 text-lg">Zusammenfassung</h4>
           </div>
           
           <!-- Vergleichszahlen -->
           <div class="grid md:grid-cols-3 gap-4 text-sm mb-4">
             <div class="text-center">
               <div class="text-lg font-bold text-blue-600">1.580,99€</div>
               <div class="text-gray-600">Deutschland Netto</div>
             </div>
             <div class="text-center">
               <div class="text-lg font-bold text-purple-600">1.823,75€</div>
               <div class="text-gray-600">Spanien Netto</div>
             </div>
             <div class="text-center">
               <div class="text-lg font-bold text-green-600">+242,76€</div>
               <div class="text-gray-600">Differenz (Spanien)</div>
             </div>
           </div>
           
           <!-- Kurze Erklärung -->
           <div class="text-gray-700 text-sm space-y-2">
             <p>
               <strong>Fazit:</strong> Bei 2.500€ Brutto bleibt in Spanien etwa 15% mehr Netto übrig als in Deutschland. 
               Die Abzüge sind in Deutschland deutlich höher (36,8% vs. 27,1% vom Brutto).
             </p>
             <p>
               <strong>Wichtiger Hinweis:</strong> In Spanien ist es deutlich schwieriger, ein Gehalt von 2.500€ Brutto zu erreichen. 
               Das Durchschnittsgehalt liegt bei etwa 1.800€ Brutto, während es in Deutschland bei etwa 3.200€ liegt.
             </p>
             <p class="text-xs text-gray-600">
               <strong>Hinweis:</strong> Diese Berechnung ist ein Beispiel. Die tatsächlichen Abzüge hängen von vielen Faktoren ab. 
               Beratung durch einen Steuerberater ist empfehlenswert.
             </p>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Keine zusätzliche Logik benötigt
</script>
