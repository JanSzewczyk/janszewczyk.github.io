import { defineField } from "sanity";

export default defineField({
  name: "aboutSection",
  title: "About Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }]
    }),
    defineField({
      name: "profilePicture",
      title: "Profile Picture",
      type: "reference",
      to: [{ type: "picture" }]
    }),
    defineField({
      name: "cv",
      title: "CV file",
      type: "file",
      validation: (Rule) => Rule.required()
    })
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
});
