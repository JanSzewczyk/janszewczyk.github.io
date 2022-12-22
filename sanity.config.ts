import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { theme } from "./styles/sanity/theme";

export default defineConfig({
  basePath: "/studio",
  name: "janszewczyk-github-io",
  title: "janszewczyk.github.io",

  projectId: "qy853ayl",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  },

  theme
});
