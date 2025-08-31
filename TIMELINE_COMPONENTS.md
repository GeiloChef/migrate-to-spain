# Timeline Components Documentation

This document explains how to use the reusable timeline components for creating consistent timeline step pages.

## Components Overview

### 1. TimelineHeader
A reusable header component that includes:
- Back button (links to home page)
- Title
- Date

**Props:**
- `title` (string): The step title
- `date` (string): The step date

**Usage:**
```vue
<TimelineHeader 
  title="Step Title" 
  date="January 2023" 
/>
```

### 2. TimelineNavigation
A navigation component for moving between timeline steps:
- Previous step button (optional)
- Next step button (optional)

**Props:**
- `previousStep` (string, optional): Route to previous step
- `nextStep` (string, optional): Route to next step

**Usage:**
```vue
<TimelineNavigation 
  previous-step="/timeline/previous-step-name"
  next-step="/timeline/next-step-name"
/>
```

### 3. TimelineLayout
A layout wrapper that combines the header, content area, and navigation:
- Provides consistent styling and structure
- Uses a slot for the main content
- Automatically includes header and navigation

**Props:**
- `title` (string): The step title
- `date` (string): The step date
- `previousStep` (string, optional): Route to previous step
- `nextStep` (string, optional): Route to next step

**Usage:**
```vue
<TimelineLayout 
  title="Step Title"
  date="January 2023"
  previous-step="/timeline/previous-step-name"
  next-step="/timeline/next-step-name"
>
  <!-- Your content goes here -->
  <div class="bg-white rounded-lg shadow-sm p-6">
    <h2 class="!text-xl font-semibold text-gray-900 mb-4">
      Section Title
    </h2>
    <p class="text-gray-700 leading-relaxed">
      Your content...
    </p>
  </div>
</TimelineLayout>
```

## Creating a New Timeline Step

### 1. File Naming Convention
Use descriptive, SEO-friendly names instead of generic step numbers:
- ✅ `the-dream-of-spain.vue`
- ✅ `first-research-feasibility.vue`
- ✅ `discovering-spain.vue`
- ❌ `step1.vue`
- ❌ `step2.vue`

### 2. Basic Structure
```vue
<template>
  <TimelineLayout 
    :title="$t('timeline.stepX.title')"
    :date="$t('timeline.stepX.date')"
    :previous-step="'/timeline/previous-step-name'"
    :next-step="'/timeline/next-step-name'"
  >
    <!-- Introduction -->
    <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 class="!text-xl font-semibold text-gray-900 mb-4">
        Introduction Title
      </h2>
      <p class="text-gray-700 leading-relaxed">
        Introduction content...
      </p>
    </div>

    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Content sections... -->
    </div>
  </TimelineLayout>
</template>

<script setup>
useHead({
  title: 'Your Step Title - Moving to Spain',
  meta: [
    { name: 'description', content: 'Your step description for SEO.' }
  ]
})
</script>
```

### 3. Content Sections
Use consistent styling for content sections:
```vue
<div class="bg-white rounded-lg shadow-sm p-6">
  <h3 class="!text-lg font-semibold text-gray-900 mb-4">
    Section Title
  </h3>
  <div class="space-y-4">
    <p class="text-gray-700 leading-relaxed">
      Section content...
    </p>
    <!-- Lists, images, etc. -->
  </div>
</div>
```

### 4. Lists with Bullet Points
```vue
<ul class="space-y-2">
  <li 
    v-for="(point, index) in points" 
    :key="index"
    class="flex items-start gap-3"
  >
    <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
    <span class="text-gray-700">{{ point }}</span>
  </li>
</ul>
```

## Translation Structure

Add your step translations to the locale files:
```json
{
  "timeline": {
    "stepX": {
      "title": "Step Title",
      "date": "Date",
      "description": "Brief description",
      "intro": {
        "title": "Introduction Title",
        "description": "Introduction content"
      },
      "sections": {
        "section1": {
          "title": "Section Title",
          "description": "Section content",
          "points": [
            "Point 1",
            "Point 2"
          ]
        }
      }
    }
  }
}
```

## Benefits

- **SEO-Friendly**: Descriptive file names improve search engine optimization
- **User Experience**: Clear, meaningful URLs that users can understand
- **Consistency**: All timeline steps have the same look and feel
- **Maintainability**: Changes to layout/styling only need to be made in one place
- **Reusability**: Easy to create new timeline steps
- **Navigation**: Built-in navigation between steps
- **Responsive**: Components are already responsive and mobile-friendly

## Example Files

- `app/pages/timeline/the-dream-of-spain.vue` - First step using the new components
- `app/pages/timeline/first-research-feasibility.vue` - Second step demonstrating reusability

## URL Structure

Your timeline will now have clean, descriptive URLs:
- `/timeline/the-dream-of-spain` - The beginning of the journey
- `/timeline/first-research-feasibility` - Research and planning phase
- `/timeline/discovering-spain` - Exploration and discovery
- And so on...
