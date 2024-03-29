import type { SimpleIconFeature, IconFeature, BaseFeature } from '/@src/types'

export const mobileAppFeatures: IconFeature[] = [
  {
    title: 'ពត៌មានទូទៅ',
    text: 'តាមដានពត៌មានទូទៅរបស់សាលារបស់ពួកគេ និងទទួលបានការជូនដំណឹងភ្លាមៗ',
    color: 'primary',
    icon: 'ph:newspaper-duotone',
    link: '/',
  },
  {
    title: 'កត់ត្រាម៉ោងចេញចូល',
    text: 'សិស្សនឹងទទួលបានពត៌មានស្តីពីការចេញចូលរបស់ពួកគេ ដោយគ្រាន់តែប្រើកាតរបស់ EduCheck ដើម្បីស្កេន',
    color: 'green',
    icon: 'ph:check-duotone',
    link: '/',
  },
  {
    title: 'វត្តមានក្នុងថ្នាក់',
    text: 'សិស្សនឹងទទួលបានពត៌មានស្តីពីវត្តមានរបស់ពួកគេនៅក្នុងថ្នាក់រៀន បន្ទាប់ពីលោកគ្រូ / អ្នកគ្រូកត់វត្តមានរបស់ពួកគេ',
    color: 'info',
    icon: 'ph:info-duotone',
    link: '/',
  },
  {
    title: 'ចំណាត់ថ្នាក់ និងពិន្ទុ',
    text: 'សិស្សនឹងទទួលបានពត៌មានស្តីពីពិន្ទុ និងចំណាត់ថ្នាក់ប្រចាំខែក៏ដូចជាឆមាសនៅក្នុងថ្នាក់រៀនរបស់ពួកគេ',
    color: 'purple',
    icon: 'ph:star-duotone',
    link: '/',
  },
  {
    title: 'កាលវិភាគសិក្សា',
    text: 'មើលកាលវិភាគសិក្សាប្រចាំថ្ងៃរបស់ពួកគេ',
    color: 'yellow',
    icon: 'ph:timer-duotone',
    link: '/',
  },
  {
    title: 'ប្រើបានគណនីច្រើន',
    text: 'សិស្សអាចប្រើបានគណនីបានច្រើនដើម្បីតាមដានពត៌មានរបស់សាលា ក៏ដូចជាពិន្ទុនិងចំណាត់ថ្នាក់។ មុខងារនេះល្អសម្រាប់មាតាបិតាដែលចង់តាមដានកូនៗរបស់អ្នក',
    color: 'red',
    icon: 'ph:users-duotone',
    link: '/',
  },
]

export const runningFeature: SimpleIconFeature[] = [
  {
    title: 'ការជូនដំណឹងប្រចាំថ្ងៃ',
    text: 'ជារៀងរាល់ថ្ងៃសិស្សនឹងទទួលបានការជូនដំណឹងប្រចាំថ្ងៃរបស់ពួកគេស្តីពីវត្តមាន និងការចេញចូលរបស់ពួកគេនៅក្នុងសាលារៀន',
    icon: 'ph:sparkle-duotone',
  },
  {
    title: 'កាតសិស្ស',
    text: 'ប្រើប្រាស់កាតសិស្សរបស់ពួកគេ ដើម្បីធ្វើការស្កេនវត្តមាននៅពេលដែលសិស្សទៅដល់សាលារៀនរបស់ពួកគេ',
    icon: 'ph:credit-card-duotone',
  },
  {
    title: 'របាយការណ៍វត្តមាន',
    text: 'សិស្សអាចមើលរបាយការណ៍ពីវត្តមានរបស់ពួកគេប្រចាំខែ',
    icon: 'ph:chart-bar-duotone',
  },
  // {
  //   title: 'Auto-suggestions',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
  //   icon: 'ph:chat-teardrop-text-duotone',
  // },
]

export const reportFeature: SimpleIconFeature[] = [
  {
    title: 'ពត៌មានគ្រូបង្រៀននៅក្នុងកាលវិភាគ',
    text: 'សិស្សអាចដឹងពីព័ត៌មានពីគ្រូរបស់ពួកគេ ក៏ដូចជាព័ត៌មានផ្សេងៗអំពីគ្រូរបស់ពួកគេ',
    icon: 'ph:chart-bar-duotone',
  },
  {
    title: 'បន្ទាន់សម័យកាលវិភាគ',
    text: 'សិស្សនឹងទទួលបានកាលវិភាគរៀងរាល់ឆ្នាំសិក្សារបស់ពួកគេ ដោយស្វ័យប្រវតិ្ត',
    icon: 'ph:clock-duotone',
  },
  // {
  //   title: 'Rewards',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
  //   icon: 'ph:crown-duotone',
  // },
  // {
  //   title: 'Achievements',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
  //   icon: 'ph:star-duotone',
  // },
]

export const dashboardFeature: BaseFeature[] = [
  {
    title: 'ចំណាត់ថ្នាក់ប្រចាំខែ',
    text: '',
  },
  {
    title: 'ពិន្ទុតាមមុខវិជ្ជា',
    text: '',
  },
  {
    title: 'ផ្លាស់ប្តូរ គណនី',
    text: '',
  },
]

export const workoutTimeline = [
  {
    icon: 'ph:device-mobile-camera-duotone',
    title: 'តំឡើងកម្មវិធី',
    text: 'ចូលទៅក្នុង Playstore ឬ Appstore ដើម្បីតំឡើងកម្មវិធី',
  },
  {
    icon: 'ph:user-circle-plus-duotone',
    title: 'ចូលប្រើចូលគណនី',
    text: 'សាកសួរសាលារបស់អ្នកពីព័ត៌មានអំពីគណនីរបស់អ្នក និងផ្លាស់ប្តូរពាក្យសម្ងាត់នៅពេលចូលប្រើ',
  },
  {
    icon: 'ph:credit-card-duotone',
    title: 'ជាវកាត',
    text: 'ជាវកាតពីសាលារបស់អ្នកដើម្បីប្រើប្រាស់កម្មវិធីនេះប្រចាំឆ្នាំ',
  },
  {
    icon: 'ph:confetti-duotone',
    title: 'ចាប់ផ្តើមប្រើ',
    text: 'ចូលប្រើប្រាស់កម្មវិធីដោយជោគជ័យ',
  },
]

export const workoutPricingPlans = [
  {
    name: 'ស្តង់ដារ',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 0.5,
      yearly: 6,
    },
    features: [
      'ចំណាយ 6ដុល្លាក្នុងមួយឆ្នាំសិស្សានុសិស្ស',
      'ទទួលបានកាតសម្គាល់ខ្លួនមួយ សម្រាប់តាមដានវត្តមាន',
      'ព្រមទាំងបានប្រើប្រាស់ដោយឥតគិតថ្លៃ នៅ App Educheck',
      'និងទទួលបានដំណឹងផ្សេងៗអំពីសាលារៀន',
    ],
    featured: true,
  },
  // {
  //   name: 'Premium',
  //   icon: 'ph:rocket-duotone',
  //   price: {
  //     monthly: 39,
  //     yearly: 420,
  //   },
  //   features: [
  //     'Custom programs',
  //     'Live streaming',
  //     'Personal page',
  //     '10h of coaching /month',
  //     'VIP invites',
  //   ],
  //   featured: false,
  // },
]

export const workoutTestimonials = [
  {
    id: 0,
    name: 'Greg Norton',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'This app changed my life',
    subquote: 'Greg lost 35lbs using our app daily',
  },
  {
    id: 1,
    name: 'Jane Smith',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'It feel so much better now',
    subquote: 'Jane lost 10lbs using our app daily',
  },
  {
    id: 2,
    name: 'Andres Cabeza',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'I simply love my new lifestyle',
    subquote: 'Jane lost 5lbs using our app daily',
  },
  {
    id: 3,
    name: 'Yuko Maeba',
    picture: 'data:image/gif;base64,replace_with_your_image',
    cover: 'data:image/gif;base64,replace_with_your_image',
    quote: 'It is a pleasure to use this service',
    subquote: 'Jane lost 3lbs using our app daily',
  },
]

export const workoutFaq = {
  left: [
    {
      title: 'How much does it cost?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Does it really work anywhere?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'How does it differ from other tools?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
  right: [
    {
      title: 'Can I add friends?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Can I try it for free?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
    {
      title: 'Who are your coaches?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile homini. Quae diligentissime contra Aristonem dicuntur a Chryippo. Qua tu etiam inprudens utebare non numquam. Paria sunt igitur. Idemne, quod iucunde.',
    },
  ],
}
