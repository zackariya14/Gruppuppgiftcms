import { CMS } from "@/utils/cms";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";
import { unstable_cache } from "next/cache";

export default async function StartPage({params}) {
  try {
    const currentStory = await CMS.getStory({ slug: ["home"] });
    if (!currentStory) throw new Error();

    return <StoryblokStory story={currentStory} />;
  } catch (error) {
    notFound();
  }
}
export const dynamic = CMS.isDevelopment ? "force-dynamic" : "force-static";
