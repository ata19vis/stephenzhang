import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import home from "./schemas/home";
import about from "./schemas/about";

export default defineConfig({
  name: "default",
  title: "Stephen Site CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: { types: [home, about] },
});
