<template>
  <div>
    <h3 class="!text-2xl font-bold text-gray-900 mb-6">
      {{ $t('gestoria.whatTheyDid.title') }}
    </h3>
    <div class="space-y-6 text-gray-700 leading-relaxed">
      <p class="mb-6">
        {{ $t('gestoria.whatTheyDid.intro') }}
      </p>

      <div class="space-y-4">
        <!-- Process Steps -->
        <div v-for="(step, index) in processSteps" :key="index" 
             class="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <h3 class="!text-lg font-semibold text-gray-900 mb-2">
                {{ $t(`gestoria.chronologicalProcess.steps.step${index + 1}.title`) }}
              </h3>
              <p class="text-gray-700">
                {{ $t(`gestoria.chronologicalProcess.steps.step${index + 1}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const processSteps = [
  'arrasContract',
  'costOverview', 
  'purchaseContract',
  'powerOfAttorney',
  'bankAccount',
  'documentCollection',
  'escrituraPreparation',
  'notaryRepresentation'
]
</script>

