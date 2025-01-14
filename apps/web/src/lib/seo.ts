import { getBaseUrl } from "@/config";
import type { Maybe } from "@/types";
import type { Metadata } from "next";

interface OgImageOptions {
  type?: string;
  id?: string;
}

function getOgImage({ type, id }: OgImageOptions = {}): string {
  const params = new URLSearchParams();
  if (id) params.set("id", id);
  if (type) params.set("type", type);
  return `api/og?${params.toString()}`;
}

interface MetaDataInput {
  _type?: Maybe<string>;
  seoDescription?: Maybe<string>;
  seoTitle?: Maybe<string>;
  slug?: Maybe<{ current: Maybe<string> }> | Maybe<string>;
  title?: Maybe<string>;
  description?: Maybe<string>;
  _id?: Maybe<string>;
}

export function getMetaData(data: MetaDataInput): Metadata {
  const {
    _type,
    seoDescription,
    seoTitle,
    slug,
    title,
    description,
    _id,
  } = data;

  const baseUrl = getBaseUrl();
  const pageSlug =
    typeof slug === "string" ? slug : (slug?.current ?? "");
  const pageUrl = `${baseUrl}${pageSlug}`;

  const meta = {
    title: seoTitle ?? title ?? "",
    description: seoDescription ?? description ?? "",
  };

  const ogImage = getOgImage({
    type: _type ?? undefined,
    id: _id ?? undefined,
  });

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(baseUrl),
    creator: "Roboto Studio Demo",
    authors: [{ name: "Roboto" }],
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
      creator: "@studioroboto",
      title: meta.title,
      description: meta.description,
    },
    openGraph: {
      type: "website",
      countryName: "UK",
      description: meta.description,
      title: meta.title,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
          secureUrl: ogImage,
        },
      ],
      url: pageUrl,
    },
  };
}
