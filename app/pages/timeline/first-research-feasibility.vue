<template>
  <TimelineLayout 
    :title="$t('story.timeline.step2.title')"
    :date="$t('story.timeline.step2.date')"
    :previous-step="'/timeline/the-dream-of-spain'"
    :next-step="'/timeline/discovering-spain'"
  >
    <!-- Hero Section -->
    <div class="relative -mx-6 -mt-12 mb-16">
      <!-- Background Image -->
      <div class="w-full h-[400px] rounded-t-3xl overflow-hidden shadow-2xl">
        <img 
          src="/images/timeline/research-planning.svg" 
          alt="Research and planning - documents and laptop"
          class="w-full h-full object-cover"
        />
        <!-- Dark Overlay for Better Text Readability -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex items-end p-8 md:p-12">
        <div class="text-white max-w-4xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
            Recherche-Phase
          </div>
          <h2 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Erste Recherchen & Machbarkeit
          </h2>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            Nachdem ich den grundlegenden Gedanken gefasst hatte – Spanien könnte wirklich mein neues Zuhause werden – war es an der Zeit, einen echten Plan zu schmieden. Der Traum allein reicht eben nicht.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Einführung -->
      <div class="mb-16">
        <h3 class="!text-3xl font-bold text-gray-900 mb-8">
          Der Weg zur Umsetzung
        </h3>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p class="mb-4">
            Nachdem ich also den grundlegenden Gedanken gefasst hatte – Spanien könnte wirklich mein neues Zuhause werden – und die Vorteile, die ich darin sah, meine anfänglichen Ängste überstiegen, war es an der Zeit, einen echten Plan zu schmieden. Der Traum allein reicht eben nicht. Ich wollte verstehen: Ist das Ganze überhaupt machbar? Welche Voraussetzungen muss ich erfüllen? Und wie könnte ein realistischer zeitlicher Ablauf aussehen?
          </p>
          <p>
            Zum Glück ist das Internet voll mit Infos – und klar, ich bin ja nicht der erste Deutsche, der sich überlegt, nach Spanien auszuwandern. Ein echter Dauerbegleiter meiner Recherche wurde <strong>Idealista</strong>. Für die, die es nicht kennen: Idealista ist nicht nur die größte Immobilienplattform in Spanien (vergleichbar mit Immoscout24 in Deutschland), sondern auch eine wahre Fundgrube an Infos.
          </p>
          <p>
            Ganz am Anfang kristallisierten sich für mich vier Hauptthemen heraus:
          </p>
          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <a href="#aufenthaltsrecht" class="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:bg-blue-100 transition-colors duration-200 cursor-pointer group">
              <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-blue-700">1. Aufenthaltsrecht</h4>
              <p class="text-gray-700 text-sm">Rechtliche Grundlagen für den Umzug</p>
            </a>
            <a href="#arbeit" class="bg-green-50 rounded-xl p-4 border border-green-200 hover:bg-green-100 transition-colors duration-200 cursor-pointer group">
              <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-green-700">2. Arbeit</h4>
              <p class="text-gray-700 text-sm">Arbeitsmöglichkeiten und Remote-Work</p>
            </a>
            <a href="#steuern" class="bg-purple-50 rounded-xl p-4 border border-purple-200 hover:bg-purple-100 transition-colors duration-200 cursor-pointer group">
              <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-purple-700">3. Steuern</h4>
              <p class="text-gray-700 text-sm">Steuerliche Aspekte und Beratung</p>
            </a>
            <a href="#lebenshaltungskosten" class="bg-orange-50 rounded-xl p-4 border border-orange-200 hover:bg-orange-100 transition-colors duration-200 cursor-pointer group">
              <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-orange-700">4. Lebenshaltungskosten</h4>
              <p class="text-gray-700 text-sm">Kostenvergleich und Budgetplanung</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Section 2: Aufenthaltsrecht -->
      <div class="mb-16" id="aufenthaltsrecht">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span class="text-blue-600 font-bold text-xl">1</span>
          </div>
          <h3 class="!text-3xl font-bold text-gray-900">
            Aufenthaltsrecht
          </h3>
        </div>
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="mb-4">
              <strong>Das Wichtigste zuerst:</strong> Darf ich als Deutscher überhaupt so einfach in Spanien leben?
            </p>
            <p class="mb-4">
              Die kurze Antwort: <strong>Ja</strong>. Als EU-Bürger habe ich das Recht, mich in jedem EU-Mitgliedsstaat niederzulassen, dort zu wohnen und zu arbeiten – ganz ohne Visum oder Aufenthaltstitel. Dieses Recht nennt sich Freizügigkeit und ist in der EU-Verordnung geregelt.
            </p>
            <p class="mb-4">
              Klingt erstmal easy. Aber in der Praxis gibt es natürlich Details:
            </p>
            <ul class="space-y-2 ml-4">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Wer länger als 3 Monate bleibt, muss sich bei der Ausländerbehörde (Extranjería) registrieren</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Man erhält das sogenannte „Certificado de registro como residente comunitario"</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Dazu braucht man Einkommen, Arbeitsvertrag oder Nachweis über ausreichende finanzielle Mittel</span>
              </li>
            </ul>
          </div>
          <div class="bg-blue-50 rounded-xl border border-blue-200 overflow-hidden">
            <!-- Hero Image für die Box -->
            <div class="w-full h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Legal documents and calendar planning - 183 day rule"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Content -->
            <div class="p-6">
              <h4 class="font-semibold text-gray-900 mb-4 text-lg">Die 183-Tage-Regel</h4>
              <div class="space-y-3 text-gray-700">
                <div class="flex items-start gap-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="font-medium">Über 183 Tage in Spanien:</p>
                    <p class="text-sm">Automatisch steuerlich ansässig in Spanien</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p class="font-medium">Unter 183 Tage in Spanien:</p>
                    <p class="text-sm">Bleibst in Deutschland steuerlich ansässig</p>
                  </div>
                </div>
              </div>
              <div class="mt-4 p-3 bg-blue-100 rounded-lg">
                <p class="text-sm text-blue-800">
                  <strong>Fazit:</strong> Als Deutscher kann ich jederzeit nach Spanien ziehen, aber ab 3 Monaten braucht es die Registrierung, und ab 183 Tagen greift die steuerliche Ansässigkeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3: Arbeit -->
      <div class="mb-16" id="arbeit">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <span class="text-green-600 font-bold text-xl">2</span>
          </div>
          <h3 class="!text-3xl font-bold text-gray-900">
            Arbeit
          </h3>
        </div>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Natürlich war Arbeit für mich ein zentrales Thema. Schließlich bin ich wie die meisten von meinem Einkommen abhängig. Meine Recherche zeigte mir schnell: Im Prinzip gibt es für mich zwei Optionen.
          </p>
          
          <!-- Hero Image für den Arbeitsbereich -->
          <div class="w-full h-64 rounded-xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Team working remotely and in office - work options"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
              <h4 class="font-semibold text-gray-900 mb-4 text-lg">Option 1: Remote Work aus Deutschland</h4>
              <div class="space-y-3 flex-grow">
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Höheres deutsches Gehaltsniveau</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Sicherheit, weil man beim deutschen Arbeitgeber bleibt</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Sozialversicherungssystem bleibt gleich</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Flexibilität: man kann reisen, ohne sofort in Spanien alle Systeme umzustellen</span>
                </div>
              </div>
              <div class="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                <p class="text-sm text-amber-800">
                  <strong>Achtung:</strong> 183-Tage-Regel → sobald ich zu lange in Spanien bleibe, wird es steuerlich kompliziert
                </p>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
              <h4 class="font-semibold text-gray-900 mb-4 text-lg">Option 2: Arbeiten direkt in Spanien</h4>
              <div class="space-y-3 flex-grow">
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Leichter, sich vor Ort zu integrieren</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Steuerlich einfacher (ein Land, ein System)</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-sm text-gray-700">Lokale Netzwerke und Jobmöglichkeiten</span>
                </div>
              </div>
              <div class="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <p class="text-sm text-red-800">
                  <strong>Nachteil:</strong> Gehälter in Spanien liegen im Schnitt deutlich unter deutschen. 2025: Spanien ~28.000€ vs. Deutschland ~46.000€
                </p>
              </div>
            </div>
          </div>
          
          <!-- Verbesserte Entscheidungsbox -->
          <div class="mt-8 relative rounded-xl overflow-hidden shadow-lg">
            <!-- Hintergrundbild mit Opacity -->
            <div class="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Decision making and planning"
                class="w-full h-full object-cover opacity-15"
              />
            </div>
            <!-- Content mit semi-transparentem Hintergrund -->
            <div class="relative p-8 bg-white/95 backdrop-blur-sm text-center">
              <div class="inline-flex items-center gap-3 px-4 py-2 bg-blue-100/80 rounded-full text-blue-800 text-sm font-medium mb-4 border border-blue-200/50">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Meine Entscheidung
              </div>
              <h4 class="font-bold text-gray-900 mb-3 text-xl">Remote-Work als Übergangslösung</h4>
              <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Als Übergang starte ich mit Remote-Work. Das half mir ungemein – ich konnte vor Ort alles regeln (Bankkonto, Gestoría, Wohnung etc.), ohne jedes Mal Urlaub nehmen zu müssen. Und ja, es sparte mir eine Menge Geld für Flüge.
              </p>
              <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 rounded-lg text-blue-700 text-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd" />
                </svg>
                Reminder: Wer Remote aus Spanien arbeitet, sollte die 183-Tage-Regel im Auge behalten
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 4: Steuern -->
      <TaxComparisonSection />

      <!-- Section 5: Lebenshaltungskosten -->
      <LivingCostsSection />

      <!-- Section 6: Glutenfreies Essen -->
      <div class="mb-16">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="!text-3xl font-bold text-gray-900">
            Glutenfreies Essen
          </h3>
        </div>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Ein Thema, das für mich persönlich von Anfang an extrem wichtig war, war das Essen – genauer gesagt: glutenfreies Essen. Seit bei mir Zöliakie diagnostiziert wurde, ist es keine kleine Lifestyle-Entscheidung, sondern eine absolute Notwendigkeit, auf Gluten zu verzichten.
          </p>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="space-y-4">
              <p>
                In Spanien war ich ehrlich gesagt positiv überrascht. Schon bei meinen ersten Aufenthalten habe ich gemerkt, dass das Bewusstsein für glutenfreie Ernährung („sin gluten") hier viel stärker ausgeprägt ist. In fast jedem größeren Supermarkt gibt es ganze Regale mit glutenfreien Produkten.
              </p>
              <p>
                Auch beim Essengehen sieht es in Spanien oft entspannter aus. Viele Restaurants und Cafés kennzeichnen ihre Speisekarten klar mit „sin gluten"-Symbolen, und es gibt Ketten wie 100 Montaditos oder VIPS, die explizit glutenfreie Optionen anbieten.
              </p>
            </div>
            
            <div class="bg-green-50 rounded-xl p-6 border border-green-200">
              <h4 class="font-semibold text-gray-900 mb-4 text-lg">Supermarktketten mit großer glutenfreier Auswahl:</h4>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium">Mercadona</span>
                  <span class="text-xs text-gray-600">– wahrscheinlich die beste Anlaufstelle</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium">Carrefour</span>
                  <span class="text-xs text-gray-600">– breite Auswahl an Markenprodukten</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium">Alcampo</span>
                  <span class="text-xs text-gray-600">– große Hypermärkte mit guter Abdeckung</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-sm font-medium">Lidl Spanien</span>
                  <span class="text-xs text-gray-600">– einige glutenfreie Eigenmarkenprodukte</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <p class="font-medium text-gray-900 mb-2 text-lg">Mein Fazit:</p>
            <p class="text-green-700 font-medium">
              Spanien ist ein wirklich gutes Land für Menschen mit Zöliakie. Die Kombination aus großer Produktauswahl im Supermarkt, einer vielfältigen naturnahen Küche und einem steigenden Bewusstsein in der Gastronomie macht mir den Alltag hier wesentlich leichter.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 7: Fazit -->
      <div class="mb-16">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <span class="text-indigo-600 font-bold text-xl">✓</span>
          </div>
          <h3 class="!text-3xl font-bold text-gray-900">
            Fazit meiner Recherchen
          </h3>
        </div>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Am Ende meiner Recherchen war ich schlauer – und ehrlich gesagt auch motivierter. Ich wusste:
          </p>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <h4 class="font-semibold text-gray-900 mb-2">✅ Aufenthaltsrecht</h4>
                <p class="text-sm text-gray-700">Als Deutscher relativ unkompliziert, aber mit Pflichten ab 3 Monaten bzw. 183 Tagen.</p>
              </div>
              <div class="bg-green-50 rounded-xl p-4 border border-green-200">
                <h4 class="font-semibold text-gray-900 mb-2">✅ Arbeit</h4>
                <p class="text-sm text-gray-700">Remote aus Deutschland = finanziell attraktiver, aber mit steuerlichen Fallstricken.</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <h4 class="font-semibold text-gray-900 mb-2">✅ Steuern</h4>
                <p class="text-sm text-gray-700">Komplex, regional unterschiedlich, man braucht gute Beratung.</p>
              </div>
              <div class="bg-orange-50 rounded-xl p-4 border border-orange-200">
                <h4 class="font-semibold text-gray-900 mb-2">✅ Lebenshaltungskosten</h4>
                <p class="text-sm text-gray-700">Auf den ersten Blick günstig, realistisch betrachtet aber nur in Relation zu spanischen Gehältern.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-green-50 rounded-xl p-6 border border-green-200">
            <h4 class="font-semibold text-gray-900 mb-3 text-lg">Bonus: Glutenfreies Essen</h4>
            <p class="text-green-700">
              Offensichtlich einfacher und auswahlreicher als in Deutschland, sowohl in Supermärkten als auch in Restaurants.
            </p>
          </div>
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Erste Recherchen & Machbarkeit - Nach Spanien auswandern',
  meta: [
    { name: 'description', content: 'Recherche-Phase: Aufenthaltsrecht, Arbeit, Steuern, Lebenshaltungskosten und glutenfreies Essen in Spanien.' }
  ]
})
</script>
