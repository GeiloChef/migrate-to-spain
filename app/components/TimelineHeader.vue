<template>
  <div class="border-b border-spain-yellow/30 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
    <div class="max-w-4xl mx-auto px-4 py-4 md:px-6 md:py-6">
      <div class="flex items-center justify-between">
        <!-- Left side: Navigation and Title -->
        <div class="flex items-center gap-3 md:gap-6 min-w-0 flex-1">
          <!-- Hamburger Menu Button -->
          <div class="flex-shrink-0">
            <SidebarMenu />
          </div>
          
          <!-- Title -->
          <div class="min-w-0 flex-1">
            <h1 class="!text-lg md:!text-2xl font-bold text-gray-900 hidden md:block truncate">
              {{ $t('header.title') }}
            </h1>
            <h1 class="!text-base md:!text-xl font-bold text-gray-900 block md:hidden truncate">
              {{ $t('header.mobileTitle') }}
            </h1>
            <p class="text-gray-600 text-xs md:text-sm hidden md:block truncate">{{ $t('header.subtitle') }}</p>
            <p class="text-gray-600 text-xs md:text-sm block md:hidden truncate">{{ $t('header.mobileSubtitle') }}</p>
          </div>
        </div>

        <!-- Right side: Language Switcher -->
        <div class="flex-shrink-0 ml-2">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Timeline header component
</script>
