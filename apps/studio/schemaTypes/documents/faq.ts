import { MessageCircleQuestion } from "lucide-react";
import { defineField, defineType } from "sanity";
import { richTextField } from "../common";
import { parseRichTextToString } from "../../utils/helper";

export const faq = defineType({
  name: "faq",
  type: "document",
  icon: MessageCircleQuestion,
  fields: [
    defineField({
      name: "title",
      title: "Question",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ ...richTextField, title: "Answer" }),
  ],
  preview: {
    select: {
      title: "title",
      richText: "richText",
    },
    prepare: ({ title, richText }) => ({
      title: title ?? "Untitled",
      subtitle: parseRichTextToString(richText, 20),
    }),
  },
});