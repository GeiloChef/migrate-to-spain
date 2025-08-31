<template>
  <div>
    <h3 class="!text-3xl font-bold text-gray-900 mb-8">
      {{ $t('introduction.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="mb-4">
        {{ $t('introduction.paragraph1') }}
      </p>
      <p>
        {{ $t('introduction.paragraph2') }}
      </p>
      <p>
        {{ $t('introduction.paragraph3') }}
      </p>
      <div class="grid md:grid-cols-2 gap-4 mt-6">
        <a href="#aufenthaltsrecht" class="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:bg-blue-100 transition-colors duration-200 cursor-pointer group">
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-blue-700">{{ $t('introduction.topics.residenceRights.title') }}</h4>
          <p class="text-gray-700 text-sm">{{ $t('introduction.topics.residenceRights.description') }}</p>
        </a>
        <a href="#arbeit" class="bg-green-50 rounded-xl p-4 border border-green-200 hover:bg-green-100 transition-colors duration-200 cursor-pointer group">
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-green-700">{{ $t('introduction.topics.work.title') }}</h4>
          <p class="text-gray-700 text-sm">{{ $t('introduction.topics.work.description') }}</p>
        </a>
        <a href="#steuern" class="bg-purple-50 rounded-xl p-4 border border-purple-200 hover:bg-purple-100 transition-colors duration-200 cursor-pointer group">
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-purple-700">{{ $t('introduction.topics.taxes.title') }}</h4>
          <p class="text-gray-700 text-sm">{{ $t('introduction.topics.taxes.description') }}</p>
        </a>
        <a href="#lebenshaltungskosten" class="bg-orange-50 rounded-xl p-4 border border-orange-200 hover:bg-orange-100 transition-colors duration-200 cursor-pointer group">
          <h4 class="font-semibold text-gray-900 mb-2 group-hover:text-orange-700">{{ $t('introduction.topics.livingCosts.title') }}</h4>
          <p class="text-gray-700 text-sm">{{ $t('introduction.topics.livingCosts.description') }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props or logic needed for this component
</script>
