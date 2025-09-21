import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  type: "document",
  title: "About (Singleton)",
  fields: [
    defineField({ name: "shortBio", type: "text", rows: 12, title: "Short Bio" }),
    defineField({ name: "cvUrl", type: "url", title: "CV (PDF URL)" }),
    defineField({
      name: "headshot",
      type: "image",
      title: "Headshot",
      options: { hotspot: true },
    }),
  ],
  preview: { prepare: () => ({ title: "About Content" }) },
});
