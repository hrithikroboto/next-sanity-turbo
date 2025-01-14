import { defineArrayMember, defineField, defineType } from "sanity";
import { GROUP, GROUPS } from "../../utils/constant";
import { createSlug } from "../../utils/slug";
import { pageBuilderField } from "../common";

export const blogIndex = defineType({
  name: "blogIndex",
  type: "document",
  groups: GROUPS,
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "description",
      type: "text",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: GROUP.MAIN_CONTENT,
      options: {
        source: "title",
        slugify: createSlug,
      },
    }),
    defineField({
      name: "featured",
      title: "Featured Blogs",
      description:
        "Select up to 3 blogs to feature on this page. These blogs will be displayed prominently on the page.",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [
            {
              type: "blog",
              options: { disableNew: true },
            },
          ],
          validation: (rule) => [rule.required()],
        }),
      ],
      validation: (rule) => [rule.max(3), rule.unique()],
      group: GROUP.MAIN_CONTENT,
    }),
    pageBuilderField,
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title || "Untitled Blog Index",
      subtitle: "Blog Index",
    }),
  },
});
