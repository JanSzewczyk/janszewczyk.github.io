export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "name",
      title: "Name",
      type: "string"
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
    },

    {
      name: "backgroundInformation",
      title: "BackgroundInformation",
      type: "string"
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true
      }
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
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string"
    }
  ]
};
