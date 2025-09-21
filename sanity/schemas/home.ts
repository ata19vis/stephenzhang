import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  type: "document",
  title: "Home (Singleton)",
  fields: [
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero Title",
      description: "e.g., 'Entrepreneurship Professor & Behavioral Scientist'",
    }),
    defineField({
      name: "heroDescription",
      type: "text",
      rows: 6,
      title: "Hero Description",
      description: "The wide paragraph under the title on the homepage.",
    }),
    defineField({
      name: "aboutIntro",
      type: "text",
      rows: 6,
      title: "About Section Text",
      description: "The About paragraph shown on the homepage.",
    }),
    defineField({
      name: "navigatorText",
      type: "text",
      rows: 10,
      title: "Navigator Description",
      description: "The main Navigator paragraph on the homepage.",
    }),
    defineField({
      name: "teachingList",
      type: "array",
      title: "Teaching (Home List)",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() { return { title: "Home Content" }; },
  },
});
