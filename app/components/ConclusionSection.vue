<template>
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
</template>

<script setup>
// No props or logic needed for this component
</script>
