import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'Brief biography for the about page'
    }),
    defineField({
      name: 'cvUrl',
      title: 'CV URL',
      type: 'url',
      description: 'Link to your CV/Resume PDF'
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot Photo',
      type: 'image',
      description: 'Professional headshot photo'
    }),
  ],
})
