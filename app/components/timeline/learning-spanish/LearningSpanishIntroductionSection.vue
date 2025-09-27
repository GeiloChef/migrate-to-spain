<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div class="px-6 py-16">
      <!-- Header outside grid -->
      <h2 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('learning-spanish.sections.introduction.title') }}
      </h2>
      
      <!-- Content and image side by side -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Content -->
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p class="mb-4">
            {{ $t('learning-spanish.sections.introduction.paragraph1') }}
          </p>
          
          <p>
            {{ $t('learning-spanish.sections.introduction.paragraph2') }}
          </p>
        </div>

        <!-- Image with same height as text -->
        <div class="rounded-2xl overflow-hidden shadow-xl h-[450px]">
          <img
            src="/images/timeline/speaking-spanish-why.png"
            alt="Paar unterhält sich auf Spanisch in einer spanischen Stadt"
            class="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
