import { defineField } from "sanity";

export default defineField({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "heroPicture",
      title: "Hero Picture",
      type: "reference",
      to: [{ type: "picture" }]
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "typings",
      title: "Typings",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "content", type: "string", title: "Typed Content" },
            { name: "asCode", type: "boolean", title: "As Code", initialValue: false }
          ]
        }
      ]
    })
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
});
