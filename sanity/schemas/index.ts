import {defineField, defineType} from 'sanity'

const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'shortBio',
      title: 'Biography',
      type: 'text',
    }),
    defineField({
      name: 'cvUrl',
      title: 'CV Link',
      type: 'url',
    }),
  ],
})

export const schemaTypes = [aboutType]
