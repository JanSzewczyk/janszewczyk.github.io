import { defineField, defineType } from "sanity";

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
      name: "linkToRepository",
      title: "Link To Repository",
      type: "url",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "linkToBuild",
      title: "Link To Build",
      type: "url"
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image.img"
    }
  }
});
