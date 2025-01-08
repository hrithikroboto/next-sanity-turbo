import type { QueryHomePageDataResult } from "./lib/sanity/sanity.types";

type PageBuilderBlockTypes = NonNullable<
  NonNullable<QueryHomePageDataResult>["pageBuilder"]
>[number]["_type"];

export type PagebuilderType<T extends PageBuilderBlockTypes> =
  Extract<
    NonNullable<
      NonNullable<QueryHomePageDataResult>["pageBuilder"]
    >[number],
    { _type: T }
  >;

export type SanityButtonProps = NonNullable<
  NonNullable<PagebuilderType<"hero">>["buttons"]
>[number];