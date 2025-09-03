<template>
  <TimelineLayout 
    :previous-step="'/timeline/apartment-search'"
    :previous-step-name="$t('story.timeline.step6.title')"
  >
    <!-- Hero Section -->
    <div class="relative">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Spanish bureaucracy and official documents"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            {{ $t('story.timeline.step7.title') }}
          </div>
          <h2 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Bürokratie & Voraussetzungen
          </h2>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            Die Grundlagen, die man unbedingt erledigt haben muss, bevor man in Spanien käuflich tätig werden kann.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Placeholder Section -->
      <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div class="px-6 py-16 text-center">
          <div class="max-w-2xl mx-auto">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="heroicons:clock" class="w-12 h-12 text-white" />
            </div>
            <h3 class="!text-2xl font-bold text-gray-900 mb-6">
              Bald verfügbar
            </h3>
            <p class="text-gray-700 text-lg leading-relaxed mb-8">
              Dieser Abschnitt wird bald hinzugefügt. Hier erfährst du alles über die notwendigen Voraussetzungen wie NIE, Bankkonto und wichtige Behördengänge.
            </p>
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50">
              <h4 class="font-semibold text-gray-900 mb-4">Was kommt als nächstes?</h4>
              <ul class="text-left space-y-3 text-gray-700">
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>NIE (spanische Steuernummer) beantragen</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Spanisches Bankkonto eröffnen</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Wichtige Behördengänge</span>
                </li>
                <li class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Vertragliche Bestimmungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Bürokratie & Voraussetzungen - Die Grundlagen für den Immobilienkauf in Spanien',
  meta: [
    { name: 'description', content: 'Die notwendigen Voraussetzungen wie NIE, Bankkonto und wichtige Behördengänge, bevor man in Spanien käuflich tätig werden kann.' }
  ]
})
</script>
