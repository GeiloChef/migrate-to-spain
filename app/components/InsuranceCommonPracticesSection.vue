<template>
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="!text-4xl font-bold text-gray-900 mb-6">
          {{ $t('insurance.practices.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 border border-indigo-200 shadow-xl">
        <div class="flex items-center mb-6">
          <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
            <UIcon name="i-heroicons-information-circle" class="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 class="!text-2xl font-bold text-indigo-900 mb-2">
              Spanische Versicherungspraxis
            </h3>
            <p class="text-indigo-700">
              Was du über die üblichen Gepflogenheiten wissen solltest
            </p>
          </div>
        </div>
        
        <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p class="text-xl mb-6">
            {{ $t('insurance.practices.content') }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <div class="bg-white bg-opacity-60 rounded-xl p-6 border border-indigo-200">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-heart" class="w-6 h-6 text-red-500 mr-3" />
              <h4 class="!text-lg font-semibold text-gray-900">Lebensversicherung</h4>
            </div>
            <p class="text-gray-700 text-sm">
              Bei Finanzierung fast automatisch dabei - Banken sichern sich so ab
            </p>
          </div>
          
          <div class="bg-white bg-opacity-60 rounded-xl p-6 border border-indigo-200">
            <div class="flex items-center mb-4">
              <UIcon name="i-heroicons-tag" class="w-6 h-6 text-green-500 mr-3" />
              <h4 class="!text-lg font-semibold text-gray-900">Rabatte</h4>
            </div>
            <p class="text-gray-700 text-sm">
              Viele Eigentümer nutzen denselben Anbieter für mehrere Policen
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here
</script>
