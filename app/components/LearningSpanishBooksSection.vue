<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div class="px-6 py-16">
      <h3 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('story.timeline.step3.sections.books.title') }}
      </h3>
      <p class="!text-lg mb-8 text-gray-700">
        {{ $t('story.timeline.step3.sections.books.intro') }}
      </p>

      <div class="grid gap-8">
        <!-- Book 1 -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="!text-lg font-semibold text-gray-900 mb-2 text-xl">
                {{ $t('story.timeline.step3.sections.books.book1.title') }}
              </h3>
              <p class="text-gray-600 mb-2">{{ $t('story.timeline.step3.sections.books.book1.author') }}</p>
              <p class="!text-sm text-gray-500 mb-4">{{ $t('story.timeline.step3.sections.books.book1.isbn') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('story.timeline.step3.sections.books.book1.description') }}</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mein Review:</h4>
              <p class="text-gray-700 text-sm">{{ $t('story.timeline.step3.sections.books.book1.review') }}</p>
            </div>
          </div>
        </div>

        <!-- Book 2 -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="!text-lg font-semibold text-gray-900 mb-2 text-xl">
                {{ $t('story.timeline.step3.sections.books.book2.title') }}
              </h4>
              <p class="text-gray-600 mb-2">{{ $t('story.timeline.step3.sections.books.book2.author') }}</p>
              <p class="!text-sm text-gray-500 mb-4">{{ $t('story.timeline.step3.sections.books.book2.isbn') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('story.timeline.step3.sections.books.book2.description') }}</p>
            </div>
            <div class="bg-green-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mein Review:</h4>
              <p class="text-gray-700 text-sm">{{ $t('story.timeline.step3.sections.books.book2.review') }}</p>
            </div>
          </div>
        </div>

        <!-- Book 3 -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="!text-lg font-semibold text-gray-900 mb-2 text-xl">
                {{ $t('story.timeline.step3.sections.books.book3.title') }}
              </h4>
              <p class="text-gray-600 mb-2">{{ $t('story.timeline.step3.sections.books.book3.author') }}</p>
              <p class="!text-sm text-gray-500 mb-4">{{ $t('story.timeline.step3.sections.books.book3.isbn') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('story.timeline.step3.sections.books.book3.description') }}</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mein Review:</h4>
              <p class="text-gray-700 text-sm">{{ $t('story.timeline.step3.sections.books.book3.review') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No props needed - this component is self-contained
</script>
