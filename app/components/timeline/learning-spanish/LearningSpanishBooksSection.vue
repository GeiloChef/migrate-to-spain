<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50/30">
    <div class="px-6 py-16">
      <h2 class="!text-2xl font-bold text-gray-900 mb-6">
        {{ $t('learning-spanish.sections.books.title') }}
      </h2>
      <p class="!text-lg mb-8 text-gray-700">
        {{ $t('learning-spanish.sections.books.intro') }}
      </p>

      <!-- Mobile: Carousel -->
      <div class="block md:hidden mb-8">
        <UCarousel
          :items="books"
          loop
          dots
          :ui="{ 
            dot: 'bg-spain-yellow data-[state=active]:bg-spain-red',
          }"
          class="w-full"
        >
          <template #default="{ item, index }">
            <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-md h-full">
              <div class="flex flex-col h-full">
                <div class="flex-grow">
                  <h3 :class="['!text-xl font-semibold text-gray-900 mb-3', getBookColorClass(index)]">
                    {{ $t(`learning-spanish.sections.books.book${item.id}.title`) }}
                  </h3>
                  <p class="text-gray-600 text-base mb-2">{{ $t(`learning-spanish.sections.books.book${item.id}.author`) }}</p>
                  <p class="!text-sm text-gray-500 mb-4">{{ $t(`learning-spanish.sections.books.book${item.id}.isbn`) }}</p>
                  <p class="text-gray-700 text-base line-clamp-3 mb-4">{{ $t(`learning-spanish.sections.books.book${item.id}.description`) }}</p>
                </div>
                <div :class="getReviewBgClass(index)">
                  <h4 class="font-semibold text-gray-900 text-base mb-3">Mein Review:</h4>
                  <p class="text-gray-700 text-sm leading-relaxed">{{ $t(`learning-spanish.sections.books.book${item.id}.review`) }}</p>
                </div>
              </div>
            </div>
          </template>
        </UCarousel>
      </div>

      <!-- Desktop: Grid -->
      <div class="hidden md:grid gap-8">
        <!-- Book 1 -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="!text-lg font-semibold text-gray-900 mb-2 text-xl">
                {{ $t('learning-spanish.sections.books.book1.title') }}
              </h3>
              <p class="text-gray-600 mb-2">{{ $t('learning-spanish.sections.books.book1.author') }}</p>
              <p class="!text-sm text-gray-500 mb-4">{{ $t('learning-spanish.sections.books.book1.isbn') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('learning-spanish.sections.books.book1.description') }}</p>
            </div>
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mein Review:</h4>
              <p class="text-gray-700 text-sm">{{ $t('learning-spanish.sections.books.book1.review') }}</p>
            </div>
          </div>
        </div>

        <!-- Book 2 -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="!text-lg font-semibold text-gray-900 mb-2 text-xl">
                {{ $t('learning-spanish.sections.books.book2.title') }}
              </h4>
              <p class="text-gray-600 mb-2">{{ $t('learning-spanish.sections.books.book2.author') }}</p>
              <p class="!text-sm text-gray-500 mb-4">{{ $t('learning-spanish.sections.books.book2.isbn') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('learning-spanish.sections.books.book2.description') }}</p>
            </div>
            <div class="bg-green-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mein Review:</h4>
              <p class="text-gray-700 text-sm">{{ $t('learning-spanish.sections.books.book2.review') }}</p>
            </div>
          </div>
        </div>

        <!-- Book 3 -->
        <div class="bg-white rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="!text-lg font-semibold text-gray-900 mb-2 text-xl">
                {{ $t('learning-spanish.sections.books.book3.title') }}
              </h4>
              <p class="text-gray-600 mb-2">{{ $t('learning-spanish.sections.books.book3.author') }}</p>
              <p class="!text-sm text-gray-500 mb-4">{{ $t('learning-spanish.sections.books.book3.isbn') }}</p>
              <p class="text-gray-700 mb-4">{{ $t('learning-spanish.sections.books.book3.description') }}</p>
            </div>
            <div class="bg-purple-50 rounded-lg p-6">
              <h4 class="font-semibold text-gray-900 mb-3">Mein Review:</h4>
              <p class="text-gray-700 text-sm">{{ $t('learning-spanish.sections.books.book3.review') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const books = [
  { id: 1, color: 'blue' },
  { id: 2, color: 'green' },
  { id: 3, color: 'purple' }
]

const getBookColorClass = (index) => {
  const colors = ['text-blue-600', 'text-green-600', 'text-purple-600']
  return colors[index] || 'text-blue-600'
}

const getReviewBgClass = (index) => {
  const colors = ['bg-blue-50 rounded-lg p-3', 'bg-green-50 rounded-lg p-3', 'bg-purple-50 rounded-lg p-3']
  return colors[index] || 'bg-blue-50 rounded-lg p-3'
}
</script>
