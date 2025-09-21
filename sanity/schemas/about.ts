import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  type: "document",
  title: "About (Singleton)",
  fields: [
    defineField({
      name: "shortBio",
      type: "text",
      rows: 10,
      title: "Short Bio",
    }),
    defineField({
      name: "cvUrl",
      type: "url",
      title: "CV (PDF URL)",
      description: "If empty, site will use /cv.pdf",
    }),
    defineField({
      name: "headshot",
      type: "image",
      title: "Headshot",
      options: { hotspot: true },
      description: "Use a portrait image. If empty, site uses /headshot.jpeg.",
    }),
    defineField({
      name: "researchAPA",
      type: "array",
      title: "Research — APA Citations",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "teachingItems",
      type: "array",
      title: "Teaching — Items",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    prepare() { return { title: "About Content" }; },
  },
});
