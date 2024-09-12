
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

export default async function sitemap() {
  try {
    // const pages = (await StoryblokCMS.getStaticPaths()).filter(
    //   (path) => path?.slug?.[0] !== "config"
    // );

    const pages = await StoryblokCMS.getStaticPaths()

    console.log(pages)

    const SETTINGS_SITE_URL = "https://gruppuppgiftcms.vercel.app/"
    const sitemap = pages.map((page) => {
      
      //Filter emptpy items and join nested routes 
      const slug = page?.slug.filter((item) => item !== "");
      let finalSlug = slug?.length > 0 ? slug.join("/") : slug;
      

      const url = `${SETTINGS_SITE_URL}${finalSlug ?? ""}`;
      return {
        url: url,
        lastModified: new Date(),
        priority: 1,
      };
    });

    console.log(sitemap)
    return sitemap;
  } catch (error) {
    return [];
  }
}
