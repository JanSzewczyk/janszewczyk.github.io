import { defineField, defineType } from "sanity";

import aboutSection from "./objects/about-section";
import contactSection from "./objects/contact-section";
import heroSection from "./objects/hero-section";

export default defineType({
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    heroSection,
    aboutSection,
    defineField({
      name: "experiences",
      title: "Experiences",
      type: "array",
      of: [{ type: "reference", to: { type: "experience" } }]
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }]
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }]
    }),
    contactSection
  ],
  preview: {
    select: {
      title: "name",
      media: "heroSection.heroPicture.img",
      subtitle: "heroSection.role"
    }
  }
});
