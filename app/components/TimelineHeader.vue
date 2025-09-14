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
            <h1 class="!text-2xl font-bold text-gray-900">
              {{ $t('header.title') }}
            </h1>
            <p class="text-gray-600 text-sm">{{ $t('header.subtitle') }}</p>
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
