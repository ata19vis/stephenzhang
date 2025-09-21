import {defineField, defineType} from 'sanity'

export const homeType = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main headline on homepage'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Description text under the main headline'
    }),
    defineField({
      name: 'aboutIntro',
      title: 'About Introduction',
      type: 'text',
      description: 'Brief intro about yourself'
    }),
    defineField({
      name: 'navigatorText',
      title: 'Navigator Description',
      type: 'text',
      description: 'Description of your Navigator tool'
    }),
    defineField({
      name: 'teachingList',
      title: 'Teaching Topics',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of teaching topics/areas'
    }),
  ],
})
