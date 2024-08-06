"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/Page";
import Teaser from "@/components/Teaser";

const components = {
  "page": Page,
  "teaser":Teaser,
}

storyblokInit({
  accessToken: process.env.NEXT_PREVIEW_STORYBLOK_TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}