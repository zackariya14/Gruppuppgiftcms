import { getStoryblokApi, useStoryblokApi } from "@storyblok/react/rsc";

export class CMS {

  static async sbGet(path, params) {
    return getStoryblokApi().get(path, params);
  }

  static async getStory(params) {
    if (!params) return {};
    const uri = params?.slug?.join("/");
    const storyUrl = "cdn/stories/" + uri;
    const { data } = await useStoryblokApi().get(
     storyUrl,
      this.getDefaultSBParams()
    );
    return data.story;
  }

  static getDefaultSBParams() {
    return {
      version: "draft",
      resolve_links: "url",
      cv: Date.now(),
    };
  }

  static async getConfig() {
    const { data } = await this.sbGet("cdn/stories/config");
    return data.story;
  }

  static async getStaticPaths() {
    try {
      let sbParams = {
        version: "draft",
      };

      let { data } = await this.sbGet("cdn/links/", sbParams);
      let paths = [];

      Object.keys(data.links).forEach((linkKey) => {
        const link = data.links[linkKey];
        if (link.is_folder || link.slug === "home") {
          return;
        }
        let slug = link.slug === "home" ? [] : link.slug;

        if (slug != "") {
          paths.push({
            slug: slug.split("/"),
          });
        }
      });

      return paths;
    } catch (error) {
      console.log("PATHS ERROR", error);
    }
  }
}
