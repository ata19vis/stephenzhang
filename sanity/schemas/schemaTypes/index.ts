import {defineField, defineType} from 'sanity'

const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
    }),
  ],
})

export const schemaTypes = [aboutType]
