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
                {{ $t('imprint.title') }}
              </h1>
              <h1 class="!text-base md:!text-xl font-bold text-gray-900 block md:hidden truncate">
                Impressum
              </h1>
              <p class="text-gray-600 text-xs md:text-sm hidden md:block truncate">{{ $t('imprint.subtitle') }}</p>
              <p class="text-gray-600 text-xs md:text-sm block md:hidden truncate">Rechtliche Hinweise</p>
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
          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">Angaben gemäß § 5 TMG</h2>
          <div class="text-gray-700 leading-relaxed mb-8">
            <p class="font-semibold mb-2">Felix Dziatkowski</p>
            <p>Bachgasse 2</p>
            <p>64720 Michelstadt</p>
            <br>
            <p><strong>E-Mail:</strong> 
              <canvas ref="emailCanvas" class="inline-block ml-1" width="180" height="20"></canvas>
            </p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <div class="text-gray-700 leading-relaxed mb-8">
            <p class="font-semibold mb-2">Felix Dziatkowski</p>
            <p>Bachgasse 2</p>
            <p>64720 Michelstadt</p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">Haftung für Inhalte</h2>
          <p class="text-gray-700 leading-relaxed mb-8">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">Haftung für Links</h2>
          <p class="text-gray-700 leading-relaxed mb-8">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>

          <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b border-spain-yellow/30 pb-3">Urheberrecht</h2>
          <p class="text-gray-700 leading-relaxed">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
const emailCanvas = ref<HTMLCanvasElement>()

// Generate email as image on mount
onMounted(() => {
  if (emailCanvas.value) {
    const canvas = emailCanvas.value
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
      // Set font and color
      ctx.font = '14px system-ui, -apple-system, sans-serif'
      ctx.fillStyle = '#374151'
      
      // Draw the email text
      ctx.fillText('kontakt@dziatkowski.de', 0, 15)
    }
  }
})

// SEO Meta
useHead({
  title: 'Impressum - Nach Spanien Auswandern',
  meta: [
    { name: 'description', content: 'Impressum und rechtliche Hinweise für die Website "Nach Spanien Auswandern - Meine Geschichte"' }
  ]
})
</script>
