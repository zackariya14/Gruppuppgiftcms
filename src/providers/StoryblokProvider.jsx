"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import { StoryblokCMS } from "@/utils/cms";
import RichTextDefault from "@/components/RichText";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}