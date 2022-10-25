export default {
  name: "picture",
  title: "Picture",
  type: "document",
  fields: [
    {
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "alt",
      title: "Alternative Text",
      type: "string",
      validation: (Rule) => Rule.required()
    }
  ]
};
