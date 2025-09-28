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
}

export const guideArticles: GuideArticle[] = [
  {
    id: 'nie-number',
    titleKey: 'guide_nie.title',
    descriptionKey: 'guide_nie.description',
    category: 'bureaucracy',
    tags: ['nie', 'bureaucracy', 'documents', 'identification', 'ausweis', 'nummer', 'beantragung', 'polizei', 'spanien'],
    difficulty: 'medium',
    estimatedTime: '2-4 weeks',
    route: '/guide/nie-number',
    icon: 'blue',
    priority: 1,
    available: true
  },
  {
    id: 'gestoria',
    titleKey: 'guide_gestoria.title',
    descriptionKey: 'guide_gestoria.description',
    category: 'bureaucracy',
    tags: ['gestoria', 'bureaucracy', 'help', 'lawyer', 'anwalt', 'hilfe', 'behörden', 'bürokratie', 'unterstützung'],
    difficulty: 'easy',
    estimatedTime: '1-2 weeks',
    route: '/guide/gestoria',
    icon: 'green',
    priority: 2,
    available: false
  },
  {
    id: 'apartment-search',
    titleKey: 'guide_apartment.title',
    descriptionKey: 'guide_apartment.description',
    category: 'housing',
    tags: ['apartment', 'rent', 'housing', 'search', 'wohnung', 'miete', 'immobilien', 'suchen', 'idealista', 'makler'],
    difficulty: 'medium',
    estimatedTime: '1-3 months',
    route: '/guide/apartment-search',
    icon: 'orange',
    priority: 3,
    available: false
  },
  {
    id: 'banking',
    titleKey: 'guide_banking.title',
    descriptionKey: 'guide_banking.description',
    category: 'finance',
    tags: ['bank', 'account', 'finance', 'money', 'konto', 'banking', 'geld', 'finanzen', 'online-banking', 'kreditkarte'],
    difficulty: 'easy',
    estimatedTime: '1-2 weeks',
    route: '/guide/banking',
    icon: 'purple',
    priority: 4,
    available: false
  }
]

export const useGuideArticles = () => {
  const { t } = useI18n()

  const getTranslatedArticles = computed((): TranslatableGuideArticle[] => {
    return guideArticles.map(article => ({
      ...article,
      title: t(article.titleKey),
      description: t(article.descriptionKey)
    }))
  })

  // Initialize Fuse.js for fuzzy search
  const fuse = computed(() => {
    return new Fuse(getTranslatedArticles.value, {
      keys: [
        { name: 'title', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'tags', weight: 0.2 },
        { name: 'category', weight: 0.1 }
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
    searchArticles,
    searchArticlesAdvanced,
    getArticleById
  }
}
