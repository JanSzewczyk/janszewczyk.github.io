import { defineField, defineType } from "sanity";

export default defineType({
  name: "picture",
  title: "Picture",
  type: "document",
  fields: [
    defineField({
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "alt",
      title: "Alternative Text",
      type: "string",
      validation: (Rule) => Rule.required()
    })
  ]
});
