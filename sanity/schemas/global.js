export default {
  name: "global",
  title: "Global",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "object",
      fields: [
        {
          name: "socials",
          title: "Socials",
          type: "array",
          of: [{ type: "reference", to: { type: "social" } }]
        },
        {
          name: "contactLabel",
          title: "Contact Label",
          type: "string",
          validation: (Rule) => Rule.required()
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    },

    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        {
          name: "companyName",
          title: "Company Name",
          type: "string"
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ]
};
