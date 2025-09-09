<template>
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.practices.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p class="!text-xl mb-6">
          {{ $t('insurance.practices.content') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-heart" class="w-6 h-6 text-red-500 mr-3" />
            <h3 class="!text-lg font-semibold text-gray-900">Lebensversicherung</h3>
          </div>
          <p class="text-gray-700 text-sm">
            Bei Finanzierung fast automatisch dabei - Banken sichern sich so ab.
          </p>
        </div>
        
        <div class="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
          <div class="flex items-center mb-4">
            <UIcon name="i-heroicons-tag" class="w-6 h-6 text-green-500 mr-3" />
            <h3 class="!text-lg font-semibold text-gray-900">Rabatte</h3>
          </div>
          <p class="text-gray-700 text-sm">
            Viele Eigentümer nutzen denselben Anbieter für mehrere Policen.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>
