import { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Quotes',
    text: 'quotes-text',
    image: {
      src: '/pet-projects/quotes.png',
      alt: 'quotes-image-alt',
    },
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind',
      'Tanstack Query',
      'Jest',
      'Node.js',
      'Express.js',
      'Sequelize',
    ],
    demo: 'soon',
    repository: 'https://github.com/serlisovyk/Quotes',
  },
  {
    id: '2',
    title: 'Pizza',
    text: 'pizza-text',
    image: {
      src: '/pet-projects/pizza.png',
      alt: 'pizza-image-alt',
    },
    tags: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Router',
      'Sass',
      'Express.js',
      'MongoDB',
    ],
    demo: 'soon',
    repository: 'https://github.com/serlisovyk/Pizza',
  },
]
