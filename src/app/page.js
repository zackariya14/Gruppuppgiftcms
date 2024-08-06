import { CMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";

export default async function StartPage() {
  try {
    const currentStory = await CMS.getStory({ slug: ["home"] });
    if (!currentStory) throw new Error();

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}
