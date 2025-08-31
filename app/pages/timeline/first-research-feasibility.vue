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
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
            Research Phase
          </div>
          <h2 class="!text-4xl md:!text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
            Getting Practical
          </h2>
          <p class="!text-lg md:!text-xl text-white/90 max-w-3xl leading-relaxed drop-shadow-md">
            {{ $t('story.timeline.step2.description') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <!-- Section 1: Legal Requirements -->
      <div class="mb-12">
        <h3 class="!text-2xl font-bold text-gray-900 mb-6">
          Legal Requirements & Visas
        </h3>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="mb-4">The first step was understanding the legal framework for moving to Spain as a German citizen. This involved researching visa requirements, residency permits, and legal obligations.</p>
            <p>I discovered that EU citizenship provides significant advantages, but there were still important steps to follow for proper legal establishment.</p>
          </div>
          <div class="h-64 rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Legal documents and paperwork"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <!-- Key Points -->
        <div class="grid md:grid-cols-3 gap-6 mt-8">
          <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="heroicons:check-circle" class="w-6 h-6 text-blue-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-3 text-lg">EU Freedom</h4>
            <p class="text-gray-700 leading-relaxed">EU citizenship provides freedom of movement and work within Spain</p>
          </div>
          
          <div class="bg-green-50 rounded-xl p-6 border border-green-200">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="heroicons:clock" class="w-6 h-6 text-green-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-3 text-lg">3-Month Rule</h4>
            <p class="text-gray-700 leading-relaxed">Need to register as a resident after 3 months of stay</p>
          </div>
          
          <div class="bg-purple-50 rounded-xl p-6 border border-purple-200">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Icon name="heroicons:heart" class="w-6 h-6 text-purple-600" />
            </div>
            <h4 class="font-semibold text-gray-900 mb-3 text-lg">Healthcare</h4>
            <p class="text-gray-700 leading-relaxed">Healthcare coverage through European Health Card</p>
          </div>
        </div>
      </div>

      <!-- Section 2: Financial Planning -->
      <div class="mb-12">
        <h3 class="!text-2xl font-bold text-gray-900 mb-6">
          Financial Planning & Cost Analysis
        </h3>
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="h-64 rounded-xl overflow-hidden shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Financial planning and budgeting"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p class="mb-4">Understanding the cost of living and financial requirements was crucial for planning. I needed to create a realistic budget that would cover all expenses.</p>
            <p>The research showed that while some costs were lower in Spain, there were also new expenses to consider, such as relocation costs and initial setup.</p>
          </div>
        </div>
        
        <!-- Financial Highlights -->
        <div class="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
          <p class="font-medium text-gray-900 mb-2 text-lg">Key Financial Finding:</p>
          <p class="text-green-700 font-medium text-lg">Overall cost of living in Spain is approximately 20-30% lower than in Germany, making it financially attractive for relocation.</p>
        </div>
      </div>

      <!-- Section 3: Next Steps -->
      <div class="mb-12">
        <h3 class="!text-2xl font-bold text-gray-900 mb-6">
          Planning the Next Phase
        </h3>
        <p class="text-lg mb-8 text-gray-700">
          With the basic research complete, I could start planning the actual implementation. The next phase would involve more detailed planning and taking concrete actions.
        </p>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h4 class="font-semibold text-gray-900 mb-3 text-lg">Immediate Actions</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Create detailed budget spreadsheet</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Research specific regions and cities</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Plan first exploratory trip</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 class="font-semibold text-gray-900 mb-3 text-lg">Long-term Planning</h4>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Timeline for relocation</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Property search strategy</span>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Language learning plan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'First Research & Feasibility - Moving to Spain',
  meta: [
    { name: 'description', content: 'Research phase: understanding legal requirements, financial considerations, and practical steps for moving to Spain.' }
  ]
})
</script>
