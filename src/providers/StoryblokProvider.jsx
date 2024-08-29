"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import { StoryblokCMS } from "@/utils/cms";

const components = {
  "page": Page,
  "teaser":Teaser,
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