<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 shadow-lg overflow-hidden">
    <!-- Hero Image mit Text -->
    <div class="relative h-32 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="European map and comparison"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-3 left-3">
        <h3 class="text-white font-bold text-lg">Europäischer Vergleich</h3>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-6">
      <!-- Hauptlinie -->
      <div class="relative mb-8">
        <!-- Linie mit Labels -->
        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-green-600">Günstig</span>
          <span class="text-sm font-medium text-red-600">Teuer</span>
        </div>
        
        <!-- Horizontale Linie -->
        <div class="w-full h-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full relative">
          <!-- Alle Länder mittig auf der Linie verteilt -->
          <div class="absolute -top-2 left-0 w-full">
            <!-- Rumänien - ~450€ (ganz links) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(450) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇷🇴</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Rumänien<br><span class="text-green-300">~450€/Monat</span>
              </div>
            </div>
            
            <!-- Polen - ~550€ (links) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(550) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇵🇱</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Polen<br><span class="text-green-300">~550€/Monat</span>
              </div>
            </div>
            
            <!-- Ungarn - ~650€ (links-mitte) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(650) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇭🇺</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Ungarn<br><span class="text-green-300">~650€/Monat</span>
              </div>
            </div>
            
            <!-- Portugal - ~750€ (mitte-links) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(750) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇵🇹</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Portugal<br><span class="text-yellow-300">~750€/Monat</span>
              </div>
            </div>
            
            <!-- Spanien - ~850€ (mitte) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(850) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇪🇸</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Spanien<br><span class="text-yellow-300">~850€/Monat</span>
              </div>
            </div>
            
            <!-- Italien - ~950€ (mitte-rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(950) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇮🇹</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Italien<br><span class="text-yellow-300">~950€/Monat</span>
              </div>
            </div>
            
            <!-- Deutschland - ~1300€ (rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(1300) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇩🇪</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Deutschland<br><span class="text-red-300">~1300€/Monat</span>
              </div>
            </div>
            
            <!-- Österreich - ~1400€ (rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(1400) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇦🇹</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Österreich<br><span class="text-red-300">~1400€/Monat</span>
              </div>
            </div>
            
            <!-- Norwegen - ~1800€ (rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(1800) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇳🇴</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Norwegen<br><span class="text-red-300">~1800€/Monat</span>
              </div>
            </div>
            
            <!-- Schweiz - ~2000€ (ganz rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(2000) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="text-xs font-bold text-gray-700">🇨🇭</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Schweiz<br><span class="text-red-300">~2000€/Monat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fazit -->
      <div class="p-4 bg-white/60 rounded-lg border border-gray-200/50">
        <p class="text-sm text-gray-700 text-center">
          <strong>Fazit:</strong> Spanien liegt bei Lebenshaltungskosten etwa 20-30% unter dem deutschen Niveau und 
          positioniert sich im mittleren Bereich Europas
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Calculate position based on cost value
const getPosition = (cost: number): number => {
  const minCost = 450; // Romania
  const maxCost = 2000; // Switzerland
  const range = maxCost - minCost;
  
  // Calculate percentage position (0% = left, 100% = right)
  const percentage = ((cost - minCost) / range) * 100;
  
  // Add some padding from edges (5% from left and right)
  const paddedPercentage = 5 + (percentage * 0.9);
  
  return Math.max(0, Math.min(100, paddedPercentage));
};
</script>
