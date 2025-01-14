import { defineField, defineType } from "sanity";
import { pageBuilderField } from "../common";
import { GROUP, GROUPS } from "../../utils/constant";
import { createSlug } from "../../utils/slug";

export const homePage = defineType({
  name: "homePage",
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
      title: "Description",
      description:
        "Page descriptions shouldn't be too long or too short. Long page descriptions will only be partially shown in search results and short descriptions are unlikely to to be helpful to users. We recommend page descriptions are between 100 and 320 characters.",
      type: "text",
      rows: 3,
      group: GROUP.MAIN_CONTENT,

      validation: (rule) => [
        rule.required(),
        rule
          .min(100)
          .warning(
            "We advise writing a description above 100 characters"
          ),
        rule.max(320).warning("Any more and it will get truncated"),
      ],
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
    pageBuilderField,
  ],
});
