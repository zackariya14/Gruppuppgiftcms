"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";
import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Header from "@/components/nestable/Header"; 
import Hero from "@/components/nestable/Hero";     
import ImageWithText from "@/components/nestable/ImageWithText";
import Grid from "@/components/nestable/Grid";
import Breadcrumbs from "@/components/nestable/Breadcrumbs";
import ContentBlock from "@/components/nestable/ContentBlock";
import TextSection from "@/components/nestable/TextSection";
import Footer from "@/components/nestable/Footer";
import Hero01 from "@/components/nestable/Hero01";
import Hero03 from "@/components/nestable/Hero03";
import FullWidthImage from "@/components/nestable/FullWidthImage";
import About from "@/components/nestable/About";

import Landing from "@/components/content-types/Landing";
import ProductPage from "@/components/content-types/ProductPage";
import ProductList from "@/components/nestable/ProductList";

const components = {
  "page": Page,
  "Landing": Landing,
  "teaser": Teaser,
  "richtext": RichTextDefault,
  "Header": Header,         
  "Hero": Hero,             
  "ImageWithText": ImageWithText,
  "grid": Grid,
  "Breadcrumbs": Breadcrumbs,
  "ContentBlock": ContentBlock,
  "TextSection": TextSection,
  "Footer": Footer,
  "Hero01": Hero01,
  "Hero03": Hero03,
  "FullWidthImage": FullWidthImage,
  "about": About,
  "ProductPage": ProductPage,
  "ProductList": ProductList
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
