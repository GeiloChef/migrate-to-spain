<template>
  <div class="border-b border-spain-yellow/30 bg-white/90 backdrop-blur-sm">
    <div class="max-w-4xl mx-auto px-6 py-6">
      <div class="flex items-center justify-between">
        <!-- Left side: Navigation and Title -->
        <div class="flex items-center gap-6">
          <!-- Hamburger Menu Button -->
          <SidebarMenu />
          
          <!-- Title -->
          <div>
            <h1 class="!text-2xl font-bold text-gray-900 hidden md:block">
              {{ $t('header.title') }}
            </h1>
            <h1 class="!text-xl font-bold text-gray-900 block md:hidden">
              {{ $t('header.mobileTitle') }}
            </h1>
            <p class="text-gray-600 text-sm hidden md:block">{{ $t('header.subtitle') }}</p>
            <p class="text-gray-600 text-sm block md:hidden">{{ $t('header.mobileSubtitle') }}</p>
          </div>
        </div>

        <!-- Right side: Language Switcher -->
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>

<script setup>
// Timeline header component
</script>
