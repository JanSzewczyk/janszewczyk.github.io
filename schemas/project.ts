import { defineField, defineType } from "sanity";

import projectLink from "./objects/project-link";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "reference",
      to: [{ type: "picture" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "links",
      title: "Project Links",
      type: "array",
      of: [projectLink]
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image.img"
    }
  }
});
