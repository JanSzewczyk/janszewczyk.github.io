export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      name: "dateStarted",
      title: "Date Started",
      type: "date",
      validation: (Rule) => Rule.required()
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date"
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required()
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    },
    {
      name: "points",
      title: "points",
      type: "array",
      of: [{ type: "string" }]
    }
  ]
};
