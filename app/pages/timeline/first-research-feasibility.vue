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
      <div class="mb-16" id="steuern">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <span class="text-purple-600 font-bold text-xl">3</span>
          </div>
          <h3 class="!text-3xl font-bold text-gray-900">
            Steuern
          </h3>
        </div>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Steuern waren das nächste dicke Thema – immerhin will man ja nicht in eine Falle tappen. Spannend fand ich die Unterschiede im Vergleich Deutschland–Spanien.
          </p>
          
          <div class="space-y-6">
            <!-- Einkommensteuer -->
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-lg">Einkommensteuer</h4>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-4 border border-blue-200 flex flex-col">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Deutschland</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-blue-600">14–45%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 45%"></div>
                  </div>
                  
                  <!-- Beispiel mit Durchschnittsgehalt -->
                  <div class="mt-4 p-3 bg-blue-50 rounded-lg mt-auto">
                    <div class="text-sm text-gray-600 mb-2">Beispiel: 50.000€ Brutto</div>
                    <div class="space-y-1 text-xs">
                      <div class="flex justify-between">
                        <span>Steuer (ca. 35%):</span>
                        <span class="font-semibold text-blue-600">17.500€</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Netto:</span>
                        <span class="font-semibold text-gray-800">32.500€</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4 border border-purple-200 flex flex-col">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Spanien</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-purple-600">19–47%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-purple-500 h-2 rounded-full" style="width: 47%"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">Regional unterschiedlich</p>
                  
                  <!-- Beispiel mit Durchschnittsgehalt -->
                  <div class="mt-4 p-3 bg-purple-50 rounded-lg mt-auto">
                    <div class="text-sm text-gray-600 mb-2">Beispiel: 50.000€ Brutto</div>
                    <div class="space-y-1 text-xs">
                      <div class="flex justify-between">
                        <span>Steuer (ca. 33%):</span>
                        <span class="font-semibold text-purple-600">16.500€</span>
                      </div>
                      <div class="flex justify-between">
                        <span>Netto:</span>
                        <span class="font-semibold text-gray-800">33.500€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Umsatzsteuer -->
            <div class="bg-gradient-to-r from-green-50 to-orange-50 rounded-xl p-6 border border-green-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-lg">Umsatzsteuer (MwSt./IVA)</h4>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-4 border border-green-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Deutschland</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Standard</span>
                      <span class="text-lg font-bold text-green-600">19%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Ermäßigt</span>
                      <span class="text-lg font-bold text-green-600">7%</span>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4 border border-orange-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Spanien</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Standard</span>
                      <span class="text-lg font-bold text-orange-600">21%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Ermäßigt</span>
                      <span class="text-lg font-bold text-orange-600">10%</span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-gray-600">Super-ermäßigt</span>
                      <span class="text-lg font-bold text-orange-600">4%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Vermögenssteuer -->
            <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-lg">Vermögenssteuer</h4>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-4 border border-red-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Deutschland</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-green-600">Keine</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-green-500 h-2 rounded-full" style="width: 0%"></div>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4 border border-pink-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Spanien</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-red-600">0,2–3,5%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-red-500 h-2 rounded-full" style="width: 3.5%"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">Je nach Region</p>
                </div>
              </div>
            </div>

            <!-- Kapitalertragsteuer -->
            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-lg">Kapitalertragsteuer</h4>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-4 border border-indigo-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Deutschland</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-indigo-600">26,375%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-indigo-500 h-2 rounded-full" style="width: 26.375%"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">Inkl. Soli</p>
                </div>
                <div class="bg-white rounded-lg p-4 border border-blue-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Spanien</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-blue-600">19–28%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-blue-500 h-2 rounded-full" style="width: 28%"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Körperschaftsteuer -->
            <div class="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h4 class="font-semibold text-gray-900 text-lg">Körperschaftsteuer</h4>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-lg p-4 border border-yellow-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Deutschland</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-yellow-600">30%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 30%"></div>
                  </div>
                </div>
                <div class="bg-white rounded-lg p-4 border border-amber-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600">Spanien</span>
                    <span class="text-xs text-gray-500">2025</span>
                  </div>
                  <div class="text-2xl font-bold text-amber-600">25%</div>
                  <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div class="bg-amber-500 h-2 rounded-full" style="width: 25%"></div>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">Sonderregelungen für KMU möglich</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 shadow-sm">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 mb-2 text-lg">Wichtiger Hinweis</h4>
                <p class="text-gray-700 leading-relaxed">
                  Deutschland ist bei Einkommen ab einer gewissen Höhe teurer, Spanien dafür bei Alltagssteuern (z. B. MwSt.) oder durch Vermögenssteuer eine echte Herausforderung. Wichtig ist hier, sich früh beraten zu lassen – am besten über eine Gestoría.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: Lebenshaltungskosten -->
      <div class="mb-16" id="lebenshaltungskosten">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <span class="text-orange-600 font-bold text-xl">4</span>
          </div>
          <h3 class="!text-3xl font-bold text-gray-900">
            Lebenshaltungskosten
          </h3>
        </div>
        <div class="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Jeder, der in Spanien Urlaub macht, sagt erstmal: „Wow, hier ist ja alles so günstig!" Aber das ist nur die halbe Wahrheit. Ja, eine Tapa für 2,50 € und ein Café con leche für 1,20 € wirken auf uns Deutsche spottbillig. Aber das Gefühl entsteht vor allem, weil wir deutsche Gehälter im Kopf haben.
          </p>
          
          <div class="space-y-6">
            <h4 class="font-semibold text-gray-900 text-lg mb-6">Vergleich Lebenshaltungskosten (2025):</h4>
            
            <div class="space-y-6">
              
              <!-- Wohnkosten (Miete & Kauf) - Volle Breite -->
              <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <!-- Hero Image mit Text -->
                <div class="relative h-32 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Modern apartment buildings"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 left-3">
                    <h3 class="text-white font-bold text-lg">Wohnkosten</h3>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <!-- Mietpreise -->
                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 class="font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">Mietpreise (Kaltmiete)</h4>
                      
                      <!-- Großstädte Vergleich -->
                      <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-blue-600">Großstädte</h5>
                        <div class="space-y-2">
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Deutschland</div>
                              <div class="text-xs text-gray-500">München, Hamburg, Berlin</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-red-600">18-25€/m²</div>
                              <div class="text-xs text-gray-500">Monatlich</div>
                            </div>
                          </div>
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Spanien</div>
                              <div class="text-xs text-gray-500">Madrid, Barcelona</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-green-600">16-22€/m²</div>
                              <div class="text-xs text-gray-500">Monatlich</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Ländliche Gebiete Vergleich -->
                      <div>
                        <h5 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-green-600">Ländliche Gebiete</h5>
                        <div class="space-y-2">
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Deutschland</div>
                              <div class="text-xs text-gray-500">Kleinstädte, Dörfer</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-red-600">8-15€/m²</div>
                              <div class="text-xs text-gray-500">Monatlich</div>
                            </div>
                          </div>
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Spanien</div>
                              <div class="text-xs text-gray-500">Andalusien, Kastilien</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-green-600">4-10€/m²</div>
                              <div class="text-xs text-gray-500">Monatlich</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Kaufpreise -->
                    <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 class="font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">Kaufpreise</h4>
                      
                      <!-- Großstädte Vergleich -->
                      <div class="mb-4">
                        <h5 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-blue-600">Großstädte</h5>
                        <div class="space-y-2">
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Deutschland</div>
                              <div class="text-xs text-gray-500">München, Hamburg, Berlin</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-red-600">4.500-8.000€/m²</div>
                              <div class="text-xs text-gray-500">Eigentumswohnung</div>
                            </div>
                          </div>
                          <div class="flex items-center justify-between p-3 bg-white rounded border border-green-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Spanien</div>
                              <div class="text-xs text-gray-500">Madrid, Barcelona</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-green-600">3.200-6.500€/m²</div>
                              <div class="text-xs text-gray-500">Eigentumswohnung</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Ländliche Gebiete Vergleich -->
                      <div>
                        <h5 class="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide text-green-600">Ländliche Gebiete</h5>
                        <div class="space-y-2">
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-red-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Deutschland</div>
                              <div class="text-xs text-gray-500">Kleinstädte, Dörfer</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-red-600">1.800-3.500€/m²</div>
                              <div class="text-xs text-gray-500">Eigentumswohnung</div>
                            </div>
                          </div>
                          <div class="flex items-center justify-between p-2 bg-white rounded border border-green-100">
                            <div>
                              <div class="text-sm font-medium text-gray-700">Spanien</div>
                              <div class="text-xs text-gray-500">Andalusien, Kastilien</div>
                            </div>
                            <div class="text-right">
                              <div class="text-lg font-bold text-green-600">800-2.200€/m²</div>
                              <div class="text-xs text-gray-500">Eigentumswohnung</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Lebensmittel - 2x2 Grid -->
              <div class="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <!-- Hero Image mit Text -->
                <div class="relative h-32 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Fresh fruits and vegetables market"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 left-3">
                    <h3 class="text-white font-bold text-lg">Lebensmittel</h3>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                  <div class="grid md:grid-cols-2 gap-6">
                    <!-- Fleisch -->
                    <div class="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 class="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-red-600">Fleisch</h4>
                      <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Deutschland</div>
                            <div class="text-xs text-gray-500">Schweinefleisch, Rind</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-red-600">8-12€/kg</div>
                            <div class="text-xs text-gray-500">Schwein, Rind</div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-green-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Spanien</div>
                            <div class="text-xs text-gray-500">Jamón, Chorizo, Lamm</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-green-600">5-9€/kg</div>
                            <div class="text-xs text-gray-500">20-30% günstiger</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Obst & Gemüse -->
                    <div class="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 class="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-green-600">Obst & Gemüse</h4>
                      <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Deutschland</div>
                            <div class="text-xs text-gray-500">Import, Supermarkt</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-red-600">2-4€/kg</div>
                            <div class="text-xs text-gray-500">Tomaten, Äpfel</div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-green-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Spanien</div>
                            <div class="text-xs text-gray-500">Frisch, regional</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-green-600">0,8-2€/kg</div>
                            <div class="text-xs text-gray-500">50-60% günstiger</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Süßigkeiten -->
                    <div class="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 class="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-yellow-600">Süßigkeiten</h4>
                      <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Deutschland</div>
                            <div class="text-xs text-gray-500">Markenprodukte</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-red-600">2-4€/Packung</div>
                            <div class="text-xs text-gray-500">Schokolade, Kekse</div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-yellow-200">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Spanien</div>
                            <div class="text-xs text-gray-500">Lokale Spezialitäten</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-yellow-600">1,5-3€/Packung</div>
                            <div class="text-xs text-gray-500">20-30% günstiger</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Glutenfreies Essen -->
                    <div class="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 class="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide text-blue-600">Glutenfreies Essen</h4>
                      <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-red-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Deutschland</div>
                            <div class="text-xs text-gray-500">Spezialprodukte</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-red-600">3-6€/Packung</div>
                            <div class="text-xs text-gray-500">Brot, Nudeln</div>
                          </div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded border border-blue-100">
                          <div>
                            <div class="text-sm font-medium text-gray-700">Spanien</div>
                            <div class="text-xs text-gray-500">Große Auswahl</div>
                          </div>
                          <div class="text-right">
                            <div class="text-lg font-bold text-blue-600">2,5-5€/Packung</div>
                            <div class="text-xs text-gray-500">15-25% günstiger</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Energie - Volle Breite -->
              <div class="col-span-2 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <!-- Hero Image mit Text -->
                <div class="relative h-32 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Electricity meter and power lines"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 left-3">
                    <h3 class="text-white font-bold text-lg">Energie</h3>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                  <div class="grid md:grid-cols-2 gap-8">
                    <!-- Deutschland Berechnung -->
                    <div>
                      <h4 class="font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">Deutschland - Monatsberechnung</h4>
                      
                      <!-- Verbrauchsannahmen -->
                      <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <h5 class="font-medium text-gray-700 mb-2 text-sm">Verbrauchsannahmen (2-Personen-Haushalt):</h5>
                        <ul class="text-xs text-gray-600 space-y-1">
                          <li>• Monatlicher Verbrauch: 250 kWh</li>
                          <li>• Durchschnittspreis: 0,40€/kWh</li>
                          <li>• Grundgebühr: 15€/Monat</li>
                        </ul>
                      </div>
                      
                      <!-- Berechnung -->
                      <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div class="text-sm text-gray-700">Stromverbrauch (250 kWh × 0,40€)</div>
                          <div class="text-lg font-bold text-red-600">100,00€</div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div class="text-sm text-gray-700">Grundgebühr</div>
                          <div class="text-lg font-bold text-red-600">15,00€</div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                          <div class="text-sm font-medium text-gray-700">Gesamtkosten pro Monat</div>
                          <div class="text-xl font-bold text-red-600">115,00€</div>
                        </div>
                      </div>
                    </div>

                    <!-- Spanien Berechnung -->
                    <div>
                      <h4 class="font-semibold text-gray-800 mb-4 text-lg border-b border-gray-200 pb-2">Spanien - Monatsberechnung</h4>
                      
                      <!-- Verbrauchsannahmen -->
                      <div class="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <h5 class="font-medium text-gray-700 mb-2 text-sm">Verbrauchsannahmen (2-Personen-Haushalt):</h5>
                        <ul class="text-xs text-gray-600 space-y-1">
                          <li>• Monatlicher Verbrauch: 250 kWh</li>
                          <li>• Tagstrom: 0,30€/kWh (70% des Verbrauchs)</li>
                          <li>• Nachtstrom: 0,20€/kWh (30% des Verbrauchs)</li>
                          <li>• Potencia: 5€/kW/Monat (bei 3,5 kW)</li>
                        </ul>
                      </div>
                      
                      <!-- Berechnung -->
                      <div class="space-y-3">
                        <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div class="text-sm text-gray-700">Tagstrom (175 kWh × 0,30€)</div>
                          <div class="text-lg font-bold text-blue-600">52,50€</div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div class="text-sm text-gray-700">Nachtstrom (75 kWh × 0,20€)</div>
                          <div class="text-lg font-bold text-blue-600">15,00€</div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                          <div class="text-sm text-gray-700">Potencia (3,5 kW × 5€)</div>
                          <div class="text-lg font-bold text-blue-600">17,50€</div>
                        </div>
                        <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                          <div class="text-sm font-medium text-gray-700">Gesamtkosten pro Monat</div>
                          <div class="text-xl font-bold text-green-600">85,00€</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Wichtiger Hinweis -->
                  <div class="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div class="flex items-start gap-3">
                      <div class="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p class="text-sm text-amber-800 font-medium mb-1">Wichtiger Hinweis</p>
                        <p class="text-xs text-amber-700">
                          Dies ist ein rein rechnerisches Beispiel für einen durchschnittlichen 2-Personen-Haushalt. 
                          Die tatsächlichen Kosten können je nach Verbrauchsverhalten, Anbieter, Region und Jahreszeit stark abweichen. 
                          In Spanien können die Kosten durch optimale Nutzung der Nachtstromzeiten weiter reduziert werden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Europäischer Vergleich - Kompakte Linie -->
              <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <!-- Hero Image mit Text -->
                <div class="relative h-32 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="European map and comparison"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 left-3">
                    <h3 class="text-white font-bold text-lg">Europäischer Vergleich</h3>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-6">
                  <!-- Hauptlinie -->
                  <div class="relative mb-8">
                    <!-- Linie mit Labels -->
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-sm font-medium text-green-600">Günstig</span>
                      <span class="text-sm font-medium text-red-600">Teuer</span>
                    </div>
                    
                                         <!-- Horizontale Linie -->
                     <div class="w-full h-4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full relative">
                       <!-- Alle Länder mittig auf der Linie verteilt -->
                       <div class="absolute -top-8 left-0 w-full">
                         <!-- Rumänien - ~450€ (ganz links) -->
                         <div class="absolute left-[4%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇷🇴</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Rumänien<br><span class="text-green-300">~450€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Polen - ~550€ (links) -->
                         <div class="absolute left-[12%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇵🇱</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Polen<br><span class="text-green-300">~550€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Ungarn - ~650€ (links-mitte) -->
                         <div class="absolute left-[20%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇭🇺</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Ungarn<br><span class="text-green-300">~650€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Portugal - ~750€ (mitte-links) -->
                         <div class="absolute left-[28%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇵🇹</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Portugal<br><span class="text-yellow-300">~750€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Spanien - ~850€ (mitte) -->
                         <div class="absolute left-[36%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇪🇸</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Spanien<br><span class="text-yellow-300">~850€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Italien - ~950€ (mitte-rechts) -->
                         <div class="absolute left-[44%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇮🇹</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Italien<br><span class="text-yellow-300">~950€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Deutschland - ~1300€ (rechts) -->
                         <div class="absolute left-[52%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇩🇪</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Deutschland<br><span class="text-red-300">~1300€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Österreich - ~1400€ (rechts) -->
                         <div class="absolute left-[60%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇦🇹</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Österreich<br><span class="text-red-300">~1400€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Norwegen - ~1800€ (rechts) -->
                         <div class="absolute left-[68%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇳🇴</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Norwegen<br><span class="text-red-300">~1800€/Monat</span>
                           </div>
                         </div>
                         
                         <!-- Schweiz - ~2000€ (ganz rechts) -->
                         <div class="absolute left-[76%] transform -translate-x-1/2 group">
                           <div class="w-8 h-8 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center shadow-md cursor-pointer hover:scale-110 transition-transform">
                             <span class="text-xs font-bold text-gray-700">🇨🇭</span>
                           </div>
                           <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                             Schweiz<br><span class="text-red-300">~2000€/Monat</span>
                           </div>
                         </div>
                       </div>
                     </div>
                  </div>
                  
                  <!-- Fazit -->
                  <div class="p-4 bg-white/60 rounded-lg border border-gray-200/50">
                    <p class="text-sm text-gray-700 text-center">
                      <strong>Fazit:</strong> Spanien liegt bei Lebenshaltungskosten etwa 20-30% unter dem deutschen Niveau und 
                      positioniert sich im mittleren Bereich Europas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
