export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of the project",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "image",
      title: "Image",
      type: "reference",
      to: [{ type: "picture" }],
      validation: (Rule) => Rule.required()
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      validation: (Rule) => Rule.required()
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "linkToBuild",
      title: "Link To Build",
      type: "url",
      validation: (Rule) => Rule.required()
    }
  ]
};
