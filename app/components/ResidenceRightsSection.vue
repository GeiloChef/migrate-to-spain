<template>
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
</template>

<script setup>
// No props or logic needed for this component
</script>
