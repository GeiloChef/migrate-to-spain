import Fuse from 'fuse.js'

export interface GuideArticle {
  id: string
  titleKey: string
  descriptionKey: string
  category: string
  tags: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  estimatedTime: string
  route: string
  icon: string
  priority: number
  available: boolean
}

export interface TranslatableGuideArticle extends GuideArticle {
  title: string
  description: string
  translatedCategory: string
  translatedDifficulty: string
  translatedEstimatedTime: string
  translatedTags: string[]
}

export const guideArticles: GuideArticle[] = [
  {
    id: 'nie-number',
    titleKey: 'guide_nie.card.title',
    descriptionKey: 'guide_nie.card.description',
    category: 'bureaucracy',
    tags: ['nie', 'bureaucracy', 'documents', 'identification', 'id-card', 'number', 'application', 'police', 'spain'],
    difficulty: 'medium',
    estimatedTime: '2-4-weeks',
    route: '/guide/nie-number',
    icon: 'blue',
    priority: 1,
    available: true
  },
  {
    id: 'gestoria',
    titleKey: 'guide_gestoria.card.title',
    descriptionKey: 'guide_gestoria.card.description',
    category: 'bureaucracy',
    tags: ['gestoria', 'bureaucracy', 'help', 'lawyer', 'authorities', 'support'],
    difficulty: 'easy',
    estimatedTime: '1-2-weeks',
    route: '/guide/gestoria',
    icon: 'green',
    priority: 2,
    available: true
  },
  {
    id: 'apartment-search',
    titleKey: 'guide_apartment.card.title',
    descriptionKey: 'guide_apartment.card.description',
    category: 'housing',
    tags: ['apartment', 'rent', 'housing', 'search', 'real-estate', 'idealista', 'agent', 'property', 'spain', 'finding'],
    difficulty: 'medium',
    estimatedTime: '1-3-months',
    route: '/guide/apartment-search',
    icon: 'orange',
    priority: 3,
    available: true
  },
  {
    id: 'banking',
    titleKey: 'guide_banking.title',
    descriptionKey: 'guide_banking.description',
    category: 'finance',
    tags: ['bank', 'account', 'finance', 'money', 'banking', 'online-banking', 'credit-card'],
    difficulty: 'easy',
    estimatedTime: '1-2-weeks',
    route: '/guide/banking',
    icon: 'purple',
    priority: 4,
    available: false
  }
]

export const useGuideArticles = () => {
  const { t } = useI18n()

  // Helper function to translate estimated time dynamically
  const translateEstimatedTime = (estimatedTime: string): string => {
    // Parse the estimated time format (e.g., "2-4-weeks", "1-3-months", "6-plus-months")
    const parts = estimatedTime.split('-')
    
    if (parts.length === 3) {
      // Format: "2-4-weeks" or "1-3-months"
      const [min, max, unit] = parts
      const unitKey = unit === 'weeks' ? 'weeks' : 'months'
      return t('guide_common.estimated-time.range', {
        min,
        max,
        unit: t(`guide_common.estimated-time.${unitKey}`)
      })
    } else if (parts.length === 2 && parts[1] === 'plus') {
      // Format: "6-plus-months"
      const [min, , unit] = parts
      const unitKey = unit === 'weeks' ? 'weeks' : 'months'
      return t('guide_common.estimated-time.range-plus', {
        min,
        unit: t(`guide_common.estimated-time.${unitKey}`)
      })
    }
    
    // Fallback to original value if format doesn't match
    return estimatedTime
  }

  const getTranslatedArticles = computed((): TranslatableGuideArticle[] => {
    return guideArticles.map(article => ({
      ...article,
      title: t(article.titleKey),
      description: t(article.descriptionKey),
      translatedCategory: t(`guide_common.categories.${article.category}`),
      translatedDifficulty: t(`guide_common.difficulty.${article.difficulty}`),
      translatedEstimatedTime: translateEstimatedTime(article.estimatedTime),
      translatedTags: article.tags.map(tag => t(`guide_common.tags.${tag}`))
    }))
  })

  // Initialize Fuse.js for fuzzy search
  const fuse = computed(() => {
    return new Fuse(getTranslatedArticles.value, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'translatedTags', weight: 0.2 },
        { name: 'translatedCategory', weight: 0.1 }
      ],
      threshold: 0.4, // 0.0 = perfect match, 1.0 = match anything
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 2,
      shouldSort: true
    })
  })

  const getAvailableArticles = computed(() => {
    return getTranslatedArticles.value.filter(article => article.available)
  })

  const getArticlesByCategory = (category: string) => {
    return getTranslatedArticles.value.filter(article => article.category === category)
  }

  const getArticlesByTranslatedCategory = (translatedCategory: string) => {
    return getTranslatedArticles.value.filter(article => article.translatedCategory === translatedCategory)
  }

  const searchArticles = (query: string): TranslatableGuideArticle[] => {
    if (!query || query.trim().length < 2) {
      return getTranslatedArticles.value
    }
    
    const results = fuse.value.search(query)
    return results.map(result => result.item)
  }

  const getArticleById = (id: string) => {
    return getTranslatedArticles.value.find(article => article.id === id)
  }

  // Advanced search with filters
  const searchArticlesAdvanced = (query: string, filters: {
    category?: string
    difficulty?: string
    available?: boolean
  } = {}) => {
    let results = searchArticles(query)
    
    if (filters.category) {
      results = results.filter(article => article.category === filters.category)
    }
    
    if (filters.difficulty) {
      results = results.filter(article => article.difficulty === filters.difficulty)
    }
    
    if (filters.available !== undefined) {
      results = results.filter(article => article.available === filters.available)
    }
    
    return results
  }

  return {
    guideArticles: getTranslatedArticles,
    availableArticles: getAvailableArticles,
    getArticlesByCategory,
    getArticlesByTranslatedCategory,
    searchArticles,
    searchArticlesAdvanced,
    getArticleById
  }
}
