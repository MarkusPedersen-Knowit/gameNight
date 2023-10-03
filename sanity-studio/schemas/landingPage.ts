// schemas/landingPage.js
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'landingPage',
    title: 'Landing Page',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'ctaLink',
        title: 'Call To Action Link',
        type: 'url',
      }),
      defineField({
        name: 'ctaText',
        title: 'Call To Action Text',
        type: 'string',
      }),
    ],
  });
  