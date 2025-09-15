export const useTimelineSteps = () => {
  return useState('timelineSteps', () => [
    {
      stepNumber: 1,
      titleKey: 'story.timeline.step1.title',
      descriptionKey: 'story.timeline.step1.description',
      previewPointsKeys: [
        'story.timeline.step1.preview.point1',
        'story.timeline.step1.preview.point2',
        'story.timeline.step1.preview.point3'
      ],
      dateKey: 'story.timeline.step1.date',
      backgroundImage: '/images/timeline/dream-of-spain.png',
      timelineUrl: '/timeline/the-dream-of-spain'
    },
    {
      stepNumber: 2,
      titleKey: 'story.timeline.step2.title',
      descriptionKey: 'story.timeline.step2.description',
      previewPointsKeys: [
        'story.timeline.step2.preview.point1',
        'story.timeline.step2.preview.point2',
        'story.timeline.step2.preview.point3'
      ],
      dateKey: 'story.timeline.step2.date',
      backgroundImage: '/images/timeline/first-research-hero.png',
      timelineUrl: '/timeline/first-research-feasibility'
    },
    {
      stepNumber: 3,
      titleKey: 'story.timeline.step3.title',
      descriptionKey: 'story.timeline.step3.description',
      previewPointsKeys: [
        'story.timeline.step3.preview.point1',
        'story.timeline.step3.preview.point2',
        'story.timeline.step3.preview.point3'
      ],
      dateKey: 'story.timeline.step3.date',
      backgroundImage: '/images/timeline/learning-spanish.png',
      timelineUrl: '/timeline/learning-spanish'
    },
    {
      stepNumber: 4,
      titleKey: 'story.timeline.step4.title',
      descriptionKey: 'story.timeline.step4.description',
      previewPointsKeys: [
        'story.timeline.step4.preview.point1',
        'story.timeline.step4.preview.point2',
        'story.timeline.step4.preview.point3'
      ],
      dateKey: 'story.timeline.step4.date',
      backgroundImage: 'https://images.unsplash.com/photo-1549643276-fdf2fab574f5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timelineUrl: '/timeline/discovering-spain'
    },
    {
      stepNumber: 5,
      titleKey: 'story.timeline.step5.title',
      descriptionKey: 'story.timeline.step5.description',
      previewPointsKeys: [
        'story.timeline.step5.preview.point1',
        'story.timeline.step5.preview.point2',
        'story.timeline.step5.preview.point3'
      ],
      dateKey: 'story.timeline.step5.date',
      backgroundImage: '/images/timeline/region-decision.png',
      timelineUrl: '/timeline/region-decision'
    },
    {
      stepNumber: 6,
      titleKey: 'story.timeline.step6.title',
      descriptionKey: 'story.timeline.step6.description',
      previewPointsKeys: [
        'story.timeline.step6.preview.point1',
        'story.timeline.step6.preview.point2',
        'story.timeline.step6.preview.point3'
      ],
      dateKey: 'story.timeline.step6.date',
      backgroundImage: '/images/timeline/visiting-a-property.png',
      timelineUrl: '/timeline/apartment-search'
    },
    {
      stepNumber: 7,
      titleKey: 'story.timeline.step7.title',
      descriptionKey: 'story.timeline.step7.description',
      previewPointsKeys: [
        'story.timeline.step7.preview.point1',
        'story.timeline.step7.preview.point2',
        'story.timeline.step7.preview.point3'
      ],
      dateKey: 'story.timeline.step7.date',
      backgroundImage: '/images/timeline/bureaucracy-laptop.png',
      timelineUrl: '/timeline/bureaucracy-prerequisites'
    },
    {
      stepNumber: 8,
      titleKey: 'story.timeline.step8.title',
      descriptionKey: 'story.timeline.step8.description',
      previewPointsKeys: [
        'story.timeline.step8.preview.point1',
        'story.timeline.step8.preview.point2',
        'story.timeline.step8.preview.point3'
      ],
      dateKey: 'story.timeline.step8.date',
      backgroundImage: '/images/timeline/couple-visiting-property.png',
      timelineUrl: '/timeline/property-purchase'
    },
    {
      stepNumber: 9,
      titleKey: 'story.timeline.step9.title',
      descriptionKey: 'story.timeline.step9.description',
      previewPointsKeys: [
        'story.timeline.step9.preview.point1',
        'story.timeline.step9.preview.point2',
        'story.timeline.step9.preview.point3'
      ],
      dateKey: 'story.timeline.step9.date',
      backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timelineUrl: '/timeline/gestoria'
    },
    {
      stepNumber: 10,
      titleKey: 'story.timeline.step10.title',
      descriptionKey: 'story.timeline.step10.description',
      previewPointsKeys: [
        'story.timeline.step10.preview.point1',
        'story.timeline.step10.preview.point2',
        'story.timeline.step10.preview.point3'
      ],
      dateKey: 'story.timeline.step10.date',
      backgroundImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timelineUrl: '/timeline/insurance'
    },
    {
      stepNumber: 11,
      titleKey: 'story.timeline.step11.title',
      descriptionKey: 'story.timeline.step11.description',
      previewPointsKeys: [
        'story.timeline.step11.preview.point1',
        'story.timeline.step11.preview.point2',
        'story.timeline.step11.preview.point3'
      ],
      dateKey: 'story.timeline.step11.date',
      backgroundImage: 'https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timelineUrl: '/timeline/first-apartment-stay'
    },
    {
      stepNumber: 12,
      titleKey: 'story.timeline.step12.title',
      descriptionKey: 'story.timeline.step12.description',
      previewPointsKeys: [
        'story.timeline.step12.preview.point1',
        'story.timeline.step12.preview.point2',
        'story.timeline.step12.preview.point3'
      ],
      dateKey: 'story.timeline.step12.date',
      backgroundImage: 'https://images.unsplash.com/photo-1741795854922-87217b375e79?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      timelineUrl: '/timeline/final-migration'
    }
  ])
}