// schemaTypes/homeType.ts
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
      description: 'Main headline (currently: "Entrepreneurship Professor & Behavioral Scientist")',
      initialValue: 'Entrepreneurship Professor & Behavioral Scientist'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Main description under hero title',
      initialValue: 'I study how entrepreneurs and executives shape their businesses under technological, market, and environmental uncertainty. I\'m building Startup Navigator because it is not easy to get generic AI tools beyond super generic startup ideas and advice, and Startup Navigator provides the structured framework that turns your AI 100% more useful as an entrepreneurship mentor.'
    }),
    defineField({
      name: 'aboutIntro',
      title: 'About Introduction',
      type: 'text',
      description: 'Brief intro in the about section',
      initialValue: 'Maness Chair of Entrepreneurship and Innovation at Baylor University. Professor Zhang has previously worked in the University of Adelaide, the University of Sydney, the Catholic University of Chile, and the National University of Singapore, and has founded several startups.'
    }),
    defineField({
      name: 'navigatorTitle',
      title: 'Navigator Section Title',
      type: 'string',
      initialValue: 'Startup Navigator'
    }),
    defineField({
      name: 'navigatorDescription',
      title: 'Navigator Description',
      type: 'text',
      description: 'Description of your Navigator tool',
      initialValue: 'You\'ve tried using generative AI to help with startup ideas—it gives lists of features, generic advice, and confident-sounding suggestions that lead nowhere.\n\nThe problem is missing structured prompts that ask the right questions at the right time. Navigator has been refined through hundreds of systematic iterations.'
    }),
    defineField({
      name: 'navigatorStages',
      title: 'Navigator Stages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'stage', type: 'string', title: 'Stage Name'},
            {name: 'description', type: 'text', title: 'Stage Description'}
          ]
        }
      ],
      initialValue: [
        {stage: 'Stage 1: Ideation', description: ''},
        {stage: 'Stage 2: Idea Deep Dive', description: ''},
        {stage: 'Stage 3: Problem Validation', description: ''}
      ]
    }),
    defineField({
      name: 'researchTitle',
      title: 'Research Section Title',
      type: 'string',
      initialValue: 'Research'
    }),
    defineField({
      name: 'researchDescription',
      title: 'Research Description',
      type: 'text',
      initialValue: 'Find my papers and their podcasts here.'
    }),
    defineField({
      name: 'teachingTitle',
      title: 'Teaching Section Title',
      type: 'string',
      initialValue: 'Teaching'
    }),
    defineField({
      name: 'teachingList',
      title: 'Teaching Courses',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of courses and seminars you teach',
      initialValue: ['ENT 3315 — Starting & Managing a Business', 'Seminars']
    }),
  ],
})

// schemaTypes/aboutType.ts
import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Entrepreneurship Professor & Behavioral Scientist'
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Main description on about page',
      initialValue: 'I study how entrepreneurs and executives shape their businesses. I develop theories, frameworks, and practical tools, including Startup Navigator, to help founders and instructors to use AI effectively for entrepreneurship, from ideation to validation, prototyping and marketing.'
    }),
    defineField({
      name: 'shortBio',
      title: 'Short Bio',
      type: 'text',
      description: 'Detailed biography for the expandable bio section'
    }),
    defineField({
      name: 'cvUrl',
      title: 'CV URL',
      type: 'url',
      description: 'Link to your CV/Resume PDF',
      initialValue: '/cv.pdf'
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot Photo',
      type: 'image',
      description: 'Professional headshot photo',
      options: {
        hotspot: true
      }
    }),
  ],
})

// schemaTypes/navigatorType.ts
import {defineField, defineType} from 'sanity'

export const navigatorType = defineType({
  name: 'navigator',
  title: 'Startup Navigator',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigator Title',
      type: 'string',
      initialValue: 'Startup Navigator'
    }),
    defineField({
      name: 'description',
      title: 'Navigator Description',
      type: 'text',
      description: 'Main description of what Navigator does'
    }),
    defineField({
      name: 'stages',
      title: 'Navigator Stages',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stage',
          title: 'Stage',
          fields: [
            {name: 'name', type: 'string', title: 'Stage Name'},
            {name: 'description', type: 'text', title: 'Stage Description'},
            {name: 'prompts', type: 'array', of: [{type: 'text'}], title: 'Prompts for this stage'}
          ]
        }
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Is Navigator Active',
      type: 'boolean',
      description: 'Toggle to enable/disable the Navigator feature',
      initialValue: true
    })
  ],
})

// schemaTypes/researchType.ts
import {defineField, defineType} from 'sanity'

export const researchType = defineType({
  name: 'research',
  title: 'Research Papers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Paper Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of paper authors'
    }),
    defineField({
      name: 'journal',
      title: 'Journal/Publication',
      type: 'string',
      description: 'Where the paper was published'
    }),
    defineField({
      name: 'year',
      title: 'Publication Year',
      type: 'number'
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      description: 'Paper abstract'
    }),
    defineField({
      name: 'pdfUrl',
      title: 'PDF URL',
      type: 'url',
      description: 'Link to the paper PDF'
    }),
    defineField({
      name: 'podcastUrl',
      title: 'Podcast URL',
      type: 'url',
      description: 'Link to podcast about this paper'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Paper',
      type: 'boolean',
      description: 'Show this paper prominently',
      initialValue: false
    }),
    defineField({
      name: 'tags',
      title: 'Research Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags like "entrepreneurship", "uncertainty", "behavioral science"'
    })
  ],
  orderings: [
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}]
    }
  ]
})

// schemaTypes/teachingType.ts
import {defineField, defineType} from 'sanity'

export const teachingType = defineType({
  name: 'course',
  title: 'Courses',
  type: 'document',
  fields: [
    defineField({
      name: 'courseCode',
      title: 'Course Code',
      type: 'string',
      description: 'e.g., ENT 3315',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      description: 'e.g., Starting & Managing a Business',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
      description: 'What the course covers'
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
      options: {
        list: [
          {title: 'Fall', value: 'fall'},
          {title: 'Spring', value: 'spring'},
          {title: 'Summer', value: 'summer'}
        ]
      }
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number'
    }),
    defineField({
      name: 'syllabusUrl',
      title: 'Syllabus URL',
      type: 'url',
      description: 'Link to course syllabus'
    }),
    defineField({
      name: 'isActive',
      title: 'Currently Teaching',
      type: 'boolean',
      description: 'Is this course currently being taught?',
      initialValue: true
    })
  ]
})

// schemaTypes/index.ts
import {aboutType} from './aboutType'
import {homeType} from './homeType'
import {navigatorType} from './navigatorType'
import {researchType} from './researchType'
import {teachingType} from './teachingType'

export const schemaTypes = [
  homeType,
  aboutType,
  navigatorType,
  researchType,
  teachingType
]
