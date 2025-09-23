<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-4xl mx-auto px-6 py-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900">{{ $t('privacy.title') }}</h1>
            <p class="text-gray-600 mt-2">{{ $t('privacy.subtitle') }}</p>
          </div>
          <NuxtLink 
            to="/" 
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {{ $t('navigation.home') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-white rounded-lg shadow-sm p-8">
        <div class="prose prose-lg max-w-none">
          <h2>{{ $t('privacy.introduction.title') }}</h2>
          <p>{{ $t('privacy.introduction.content') }}</p>

          <h2>{{ $t('privacy.dataCollection.title') }}</h2>
          <p>{{ $t('privacy.dataCollection.content') }}</p>

          <h2>{{ $t('privacy.cookies.title') }}</h2>
          <p>{{ $t('privacy.cookies.content') }}</p>

          <h2>{{ $t('privacy.thirdParty.title') }}</h2>
          <p>{{ $t('privacy.thirdParty.content') }}</p>

          <h2>{{ $t('privacy.rights.title') }}</h2>
          <p>{{ $t('privacy.rights.content') }}</p>

          <h2>{{ $t('privacy.contact.title') }}</h2>
          <p>{{ $t('privacy.contact.content') }}</p>

          <h2>{{ $t('privacy.changes.title') }}</h2>
          <p>{{ $t('privacy.changes.content') }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: 'Datenschutzerklärung - Nach Spanien Auswandern',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung für die Website "Nach Spanien Auswandern - Meine Geschichte"' }
  ]
})
</script>
