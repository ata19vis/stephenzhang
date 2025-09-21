import { defineType, defineField } from "sanity";

export default defineType({
  name: "home",
  type: "document",
  title: "Home (Singleton)",
  fields: [
    defineField({ name: "heroTitle", type: "string", title: "Hero Title" }),
    defineField({
      name: "heroDescription",
      type: "text",
      rows: 8,
      title: "Hero Description",
    }),
    defineField({
      name: "aboutIntro",
      type: "text",
      rows: 8,
      title: "About Section (Homepage)",
    }),
    defineField({
      name: "navigatorText",
      type: "text",
      rows: 10,
      title: "Navigator Description (Homepage)",
    }),
    defineField({
      name: "teachingList",
      type: "array",
      of: [{ type: "string" }],
      title: "Teaching List (Homepage)",
    }),
  ],
  preview: { prepare: () => ({ title: "Home Content" }) },
});
