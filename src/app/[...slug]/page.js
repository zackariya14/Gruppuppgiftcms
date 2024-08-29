import StoryblokStory from "@storyblok/react/story";
import { notFound } from "next/navigation";

import { CMS } from "@/utils/cms";

export async function generateStaticParams() {
  try {
    const paths = await CMS.getStaticPaths();
    return paths;
  } catch (error) {
    console.log(error);
  }
}

export default async function CMSPage({ params }) {
  try {
    const currentStory = await CMS.getStory(params);
    if (!currentStory) throw new Error();

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}

export const dynamic = CMS.isDevelopment ? "force-dynamic" : "force-static";
