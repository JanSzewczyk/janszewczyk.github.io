import { defineField, defineType } from "sanity";

export default defineType({
  name: "global",
  title: "Global",
  type: "document",
  fields: [
    defineField({
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        defineField({
          name: "socials",
          title: "Socials",
          type: "array",
          of: [{ type: "reference", to: { type: "social" } }]
        }),
        defineField({
          name: "contactLabel",
          title: "Contact Label",
          type: "string",
          validation: (Rule) => Rule.required()
        })
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        defineField({
          name: "companyName",
          title: "Company Name",
          type: "string",
          validation: (Rule) => Rule.required()
        }),
        defineField({
          name: "test",
          title: "test vv",
          type: "string"
        })
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    })
  ],
  preview: {
    prepare() {
      return { title: "Global" };
    }
  }
});
