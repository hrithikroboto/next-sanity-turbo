import { defineField, defineType } from "sanity";
import { GROUP, GROUPS } from "../../utils/constant";
import { ogFields } from "../../utils/og-fields";
import { seoFields } from "../../utils/seo-fields";
import { createSlug } from "../../utils/slug";

export const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  groups: GROUPS,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      group: GROUP.MAIN_CONTENT,
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      group: GROUP.MAIN_CONTENT,
      options: {
        source: "title",
        slugify: createSlug,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: GROUP.MAIN_CONTENT,
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "richText",
      type: "richText",
      group: GROUP.MAIN_CONTENT,
    }),
    ...seoFields,
    ...ogFields,
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      isPrivate: "seoNoIndex",
      slug: "slug.current",
    },
    prepare: ({ title, media, slug, isPrivate }) => ({
      title,
      media,
      subtitle: `${isPrivate ? "Private" : "Public"}:- ${slug}`,
    }),
  },
});