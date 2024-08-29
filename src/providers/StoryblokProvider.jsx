"use client";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/Page";
import Teaser from "@/components/Teaser";
import Hero from "@/components/Hero";

const components = {
  "page": Page,
  "teaser":Teaser,
  "hero": Hero,
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