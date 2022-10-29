export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "linkToRepository",
      title: "Link To Repository",
      type: "url",
      validation: (Rule) => Rule.required()
    },
    {
      name: "summary",
      title: "Summary",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required()
    },
    {
      name: "linkToBuild",
      title: "Link To Build",
      type: "url"
    }
  ]
};
