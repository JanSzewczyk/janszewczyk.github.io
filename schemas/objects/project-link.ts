import { defineField } from "sanity";

export default defineField({
  name: "projectLink",
  title: "Project Link",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Docs", value: "docs" },
          { title: "GitHub", value: "github" },
          { title: "NPM", value: "npm" },
          { title: "Demo", value: "demo" }
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "url",
      title: "Link Url",
      type: "url",
      validation: (Rule) => Rule.required()
    })
  ],
  options: {
    collapsible: true,
    collapsed: false
  }
});
