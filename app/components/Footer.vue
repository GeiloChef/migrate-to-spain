<template>
  <footer class="bg-gray-900 text-white py-6 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Copyright -->
        <p class="text-gray-400 text-sm">
          © {{ currentYear }} {{ $t('footer.allRightsReserved') }}
        </p>

        <!-- Links -->
        <div class="flex space-x-6">
          <NuxtLink 
            to="/privacy" 
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
          >
            {{ $t('footer.links.privacy') }}
          </NuxtLink>
          <NuxtLink 
            to="/imprint" 
            class="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
          >
            {{ $t('footer.links.imprint') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
