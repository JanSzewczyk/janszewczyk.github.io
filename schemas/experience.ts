import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "companyLogo",
      title: "Company Logo",
      type: "reference",
      to: [{ type: "picture" }],
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "dateEnded",
      title: "Date Ended",
      type: "date"
    }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "Is Currently Working Here",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    }),
    defineField({
      name: "points",
      title: "points",
      type: "array",
      of: [{ type: "string" }]
    })
  ],
  preview: {
    select: {
      title: "jobTitle",
      media: "companyLogo.img",
      subtitle: "company"
    }
  }
});
