<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-200 py-20">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #6b7280 2px, transparent 2px), radial-gradient(circle at 75% 75%, #3b82f6 2px, transparent 2px); background-size: 60px 60px;"></div>
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse"></div>
    <div class="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 animate-pulse" style="animation-delay: 2s;"></div>

    <div class="relative px-6 max-w-7xl mx-auto">
      <!-- Simple Title Section -->
      <div class="text-left mb-6">
        <h2 class="!text-2xl font-bold text-gray-900 mb-6">
          {{ $t('learning-spanish.sections.duolingo.title') }}
        </h2>
      </div>

      <!-- Main Content Grid - 2 Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <!-- Left Side: Text Content -->
        <div class="text-gray-700 leading-relaxed text-base space-y-4">
          <p>{{ $t('learning-spanish.sections.duolingo.paragraph1') }}</p>
          <p>{{ $t('learning-spanish.sections.duolingo.paragraph2') }}</p>
          <p>{{ $t('learning-spanish.sections.duolingo.paragraph3') }}</p>
        </div>

        <!-- Right Side: Interactive Phone Experience -->
        <div class="flex justify-center items-center h-full">
          <!-- Phone Container with 3D Effect -->
          <div class="group cursor-pointer">
            <div class="relative transform group-hover:rotate-y-12 transition-transform duration-700">
              <!-- Phone Frame -->
              <div class="w-48 h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[1.5rem] p-2 md:p-3 shadow-xl relative">
                <!-- Screen with App Interface -->
                <div class="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-[1rem] p-3 md:p-4 flex flex-col relative overflow-hidden">
                  <!-- App Header -->
                  <div class="flex items-center justify-between mb-3 md:mb-4">
                    <div class="flex items-center gap-2 md:gap-3">
                      <div class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center">
                        <span class="text-green-500 text-sm md:text-base lg:text-lg font-bold">D</span>
                      </div>
                      <span class="text-white font-semibold text-sm md:text-base lg:text-lg">Duolingo</span>
                    </div>
                  </div>
                  
                  <!-- Progress Section -->
                  <div class="bg-white/20 rounded-xl p-2 md:p-3 lg:p-4 mb-3 md:mb-4 backdrop-blur-sm">
                    <div class="flex items-center justify-between mb-1 md:mb-2 lg:mb-3">
                      <span class="text-white text-xs md:text-sm lg:text-base font-medium">Goal</span>
                      <span class="text-white text-xs md:text-sm lg:text-base">75%</span>
                    </div>
                    <div class="w-full bg-white/30 rounded-full h-2 md:h-3 lg:h-4 overflow-hidden">
                      <div class="bg-gradient-to-r from-green-400 to-emerald-400 h-2 md:h-3 lg:h-4 rounded-full transition-all duration-1000 group-hover:w-full" style="width: 75%"></div>
                    </div>
                  </div>
                  
                  <!-- Lesson Card -->
                  <div class="bg-white/20 rounded-xl p-2 md:p-3 lg:p-4 backdrop-blur-sm">
                    <div class="text-center">
                      <div class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-1 md:mb-2 lg:mb-3">
                        <span class="text-white text-sm md:text-base lg:text-xl">🇪🇸</span>
                      </div>
                      <p class="text-white font-semibold text-xs md:text-sm lg:text-base">¡Buen trabajo!</p>
                    </div>
                  </div>
                  
                  <!-- Floating Icons -->
                  <div class="absolute top-2 right-2 md:top-3 md:right-3 lg:top-4 lg:right-4 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-yellow-400 rounded-full animate-ping"></div>
                  <div class="absolute bottom-2 left-2 md:bottom-3 md:left-3 lg:bottom-4 lg:left-4 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <!-- Glow Effects -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-[1.5rem] blur-lg -z-10 group-hover:blur-xl transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
