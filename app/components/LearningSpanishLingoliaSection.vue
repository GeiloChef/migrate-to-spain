<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div class="px-6 py-16">
      <h3 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('story.timeline.step3.sections.lingolia.title') }}
      </h3>
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4 text-gray-700 leading-relaxed">
          <p class="text-lg">{{ $t('story.timeline.step3.sections.lingolia.paragraph1') }}</p>
          <p class="text-lg">{{ $t('story.timeline.step3.sections.lingolia.paragraph2') }}</p>
        </div>
        <div class="h-64 rounded-xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Online learning and study"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
