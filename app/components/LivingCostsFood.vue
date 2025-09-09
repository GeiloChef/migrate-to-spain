<template>
  <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
    <!-- Hero Image mit Text -->
    <div class="relative h-32 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Fresh fruits and vegetables market"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-3 left-3">
        <h3 class="text-white font-bold text-lg">Lebensmittel</h3>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Fleisch -->
        <div class="bg-red-50 rounded-lg p-4 border border-red-200">
          <h3 class="!text-lg font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-red-600">Fleisch</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Deutschland</div>
                <div class="!text-xs text-gray-500">Schweinefleisch, Rind</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-red-600">8-12€/kg</div>
                <div class="!text-xs text-gray-500">Schwein, Rind</div>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded border border-green-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Spanien</div>
                <div class="!text-xs text-gray-500">Jamón, Chorizo, Lamm</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-green-600">5-9€/kg</div>
                <div class="!text-xs text-gray-500">20-30% günstiger</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Obst & Gemüse -->
        <div class="bg-green-50 rounded-lg p-4 border border-green-200">
          <h3 class="!text-lg font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-green-600">Obst & Gemüse</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Deutschland</div>
                <div class="!text-xs text-gray-500">Import, Supermarkt</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-red-600">2-4€/kg</div>
                <div class="!text-xs text-gray-500">Tomaten, Äpfel</div>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded border border-green-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Spanien</div>
                <div class="!text-xs text-gray-500">Frisch, regional</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-green-600">0,8-2€/kg</div>
                <div class="!text-xs text-gray-500">50-60% günstiger</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Süßigkeiten -->
        <div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
          <h3 class="!text-lg font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-yellow-600">Süßigkeiten</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Deutschland</div>
                <div class="!text-xs text-gray-500">Markenprodukte</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-red-600">2-4€/Packung</div>
                <div class="!text-xs text-gray-500">Schokolade, Kekse</div>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded border border-yellow-200">
              <div>
                <div class="!text-sm font-medium text-gray-700">Spanien</div>
                <div class="!text-xs text-gray-500">Lokale Spezialitäten</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-yellow-600">1,5-3€/Packung</div>
                <div class="!text-xs text-gray-500">20-30% günstiger</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Glutenfreies Essen -->
        <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h3 class="!text-lg font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-blue-600">Glutenfreies Essen</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Deutschland</div>
                <div class="!text-xs text-gray-500">Spezialprodukte</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-red-600">3-6€/Packung</div>
                <div class="!text-xs text-gray-500">Brot, Nudeln</div>
              </div>
            </div>
            <div class="flex items-center justify-between p-3 bg-white rounded border border-blue-100">
              <div>
                <div class="!text-sm font-medium text-gray-700">Spanien</div>
                <div class="!text-xs text-gray-500">Große Auswahl</div>
              </div>
              <div class="text-right">
                <div class="!text-lg font-bold text-blue-600">2,5-5€/Packung</div>
                <div class="!text-xs text-gray-500">15-25% günstiger</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>
