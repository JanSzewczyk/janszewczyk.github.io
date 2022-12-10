export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },

    {
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "heroPicture",
          title: "Hero Picture",
          type: "reference",
          to: [{ type: "picture" }]
        },
        {
          name: "role",
          title: "Role",
          type: "string"
        },
        {
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
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    },

    {
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string"
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }]
        },
        {
          name: "profilePicture",
          title: "Profile Picture",
          type: "reference",
          to: [{ type: "picture" }]
        },
        {
          name: "cv",
          title: "CV file",
          type: "file",
          validation: (Rule) => Rule.required()
        }
      ],
      options: {
        collapsible: true,
        collapsed: false
      }
    },

    {
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [{ type: "reference", to: { type: "experience" } }]
    },

    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },

    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    },

    {
      name: "contactSection",
      title: "Contact Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string"
        },
        {
          name: "phoneNumber",
          title: "PhoneNumber",
          type: "string"
        },
        {
          name: "email",
          title: "Email",
          type: "string"
        },
        {
          name: "address",
          title: "Address",
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
