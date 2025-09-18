<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 shadow-lg overflow-hidden">
    <!-- Hero Image mit Text -->
    <div class="relative h-32 overflow-hidden">
      <img 
        src="/images/timeline/european-comparision.png" 
        alt="Europäische Karte - Lebenshaltungskosten Vergleich"
        class="w-full h-full object-cover object-[center_bottom]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-3 left-3">
        <h3 class="text-white font-bold text-lg">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.title') }}</h3>
      </div>
    </div>
    
    <!-- Content -->
    <div class="p-4 md:p-6">
      <!-- Mobile: Vertikale Liste (nur 5 Länder) -->
      <div class="block md:hidden">
        <div class="space-y-3">
          <!-- Rumänien - günstigstes -->
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-green-200 shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🇷🇴</span>
              <div>
                <div class="!text-sm font-medium text-gray-900">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.romania') }}</div>
                <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</div>
              </div>
            </div>
            <div class="!text-lg font-bold text-green-600">~450€</div>
          </div>
          
          <!-- Spanien - Ziel -->
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🇪🇸</span>
              <div>
                <div class="!text-sm font-medium text-gray-900">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.spain') }}</div>
                <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</div>
              </div>
            </div>
            <div class="!text-lg font-bold text-yellow-600">~850€</div>
          </div>
          
          <!-- Italien - ähnlich -->
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-yellow-200 shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🇮🇹</span>
              <div>
                <div class="!text-sm font-medium text-gray-900">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.italy') }}</div>
                <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</div>
              </div>
            </div>
            <div class="!text-lg font-bold text-yellow-600">~950€</div>
          </div>
          
          <!-- Deutschland - Vergleich -->
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🇩🇪</span>
              <div>
                <div class="!text-sm font-medium text-gray-900">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.germany') }}</div>
                <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</div>
              </div>
            </div>
            <div class="!text-lg font-bold text-red-600">~1300€</div>
          </div>
          
          <!-- Schweiz - teuerstes -->
          <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-red-200 shadow-sm">
            <div class="flex items-center gap-3">
              <span class="text-2xl">🇨🇭</span>
              <div>
                <div class="!text-sm font-medium text-gray-900">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.switzerland') }}</div>
                <div class="!text-xs text-gray-500">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</div>
              </div>
            </div>
            <div class="!text-lg font-bold text-red-600">~2000€</div>
          </div>
        </div>
      </div>
      
      <!-- Desktop: Horizontale Linie -->
      <div class="hidden md:block relative mb-8">
        <!-- Linie mit Labels -->
        <div class="flex items-center justify-between mb-4">
          <span class="!text-sm font-medium text-green-600">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.cheap') }}</span>
          <span class="!text-sm font-medium text-red-600">{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.expensive') }}</span>
        </div>
        
        <!-- Horizontale Linie -->
        <div class="w-full h-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full relative">
          <!-- Alle Länder mittig auf der Linie verteilt -->
          <div class="absolute -top-2 left-0 w-full">
            <!-- Rumänien - ~450€ (ganz links) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(450) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇷🇴</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.romania') }}<br><span class="text-green-300">~450€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Polen - ~550€ (links) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(550) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇵🇱</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.poland') }}<br><span class="text-green-300">~550€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Ungarn - ~650€ (links-mitte) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(650) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇭🇺</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.hungary') }}<br><span class="text-green-300">~650€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Portugal - ~750€ (mitte-links) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(750) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇵🇹</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.portugal') }}<br><span class="text-yellow-300">~750€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Spanien - ~850€ (mitte) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(850) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇪🇸</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.spain') }}<br><span class="text-yellow-300">~850€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Italien - ~950€ (mitte-rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(950) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇮🇹</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.italy') }}<br><span class="text-yellow-300">~950€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Deutschland - ~1300€ (rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(1300) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇩🇪</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.germany') }}<br><span class="text-red-300">~1300€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Österreich - ~1400€ (rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(1400) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇦🇹</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.austria') }}<br><span class="text-red-300">~1400€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Norwegen - ~1800€ (rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(1800) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇳🇴</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.norway') }}<br><span class="text-red-300">~1800€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
            
            <!-- Schweiz - ~2000€ (ganz rechts) -->
            <div class="absolute transform -translate-x-1/2 group" :style="{ left: getPosition(2000) + '%' }">
              <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                <span class="!text-xs font-bold text-gray-700">🇨🇭</span>
              </div>
              <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.switzerland') }}<br><span class="text-red-300">~2000€{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.monthly') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Fazit -->
      <div class="mt-4 md:mt-6 p-3 md:p-4 bg-white/60 rounded-lg border border-gray-200/50">
        <p class="!text-xs md:!text-sm text-gray-700 text-center">
          <strong>{{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.conclusion') }}</strong> {{ $t('first-research-feasibility.sections.livingCosts.europeanComparison.conclusionText') }}
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
