import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "progress",
      title: "progress",
      type: "number",
      description: "Progress of skill from 0 to 100%",
      validation: (Rule) => Rule.min(0).max(100).required()
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "reference",
      to: [{ type: "picture" }],
      validation: (Rule) => Rule.required()
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "image.img",
      subtitle: "progress"
    },
    prepare({ subtitle, ...rest }) {
      return { ...rest, subtitle: `Progress: ${subtitle}%` };
    }
  }
});
