<template>
  <div class="min-h-screen bg-spain-cream">
    <!-- Header -->
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
                {{ $t('privacy.title') }}
              </h1>
              <h1 class="!text-base md:!text-xl font-bold text-gray-900 block md:hidden truncate">
                Datenschutz
              </h1>
              <p class="text-gray-600 text-xs md:text-sm hidden md:block truncate">{{ $t('privacy.subtitle') }}</p>
              <p class="text-gray-600 text-xs md:text-sm block md:hidden truncate">Datenschutzerklärung</p>
            </div>
          </div>

          <!-- Right side: Language Switcher -->
          <div class="flex-shrink-0 ml-2">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-6 py-12">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">{{ $t('privacy.sections.general.title') }}</h2>
          <p class="text-gray-700 leading-relaxed mb-8">{{ $t('privacy.sections.general.content') }}</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">{{ $t('privacy.sections.serverLogs.title') }}</h2>
          <p class="text-gray-700 leading-relaxed mb-8">
            <span v-html="serverLogsContent"></span>
          </p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">{{ $t('privacy.sections.noCookies.title') }}</h2>
          <p class="text-gray-700 leading-relaxed mb-8">{{ $t('privacy.sections.noCookies.content') }}</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">{{ $t('privacy.sections.contact.title') }}</h2>
          <p class="text-gray-700 leading-relaxed">{{ $t('privacy.sections.contact.content') }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Computed property for server logs content with links
const serverLogsContent = computed(() => {
  const content = t('privacy.sections.serverLogs.content')
  const githubPagesLink = t('privacy.sections.serverLogs.githubPagesLink')
  const githubPrivacyLink = t('privacy.sections.serverLogs.githubPrivacyLink')
  
  return content
    .replace('GitHub Pages', `<a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" class="text-spain-red hover:text-red-600 underline">${githubPagesLink}</a>`)
    .replace(githubPrivacyLink, `<a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer" class="text-spain-red hover:text-red-600 underline">${githubPrivacyLink}</a>`)
})

// SEO Meta
useHead({
  title: 'Datenschutzerklärung - Nach Spanien Auswandern',
  meta: [
    { name: 'description', content: 'Datenschutzerklärung für die Website "Nach Spanien Auswandern - Meine Geschichte"' }
  ]
})
</script>
