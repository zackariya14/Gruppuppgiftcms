import { getStoryblokApi } from "@storyblok/react/rsc";

export class StoryblokCMS {
  static IS_PROD = process.env.NODE_ENV === "production";
  static IS_DEV = process.env.NODE_ENV === "development";
  static VERSION = this.IS_PROD ? "published" : "draft";
  static TOKEN = process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN;

  static async sbGet(path, params) {
    return getStoryblokApi().get(path, params);
  }

  static async getStory(params) {
    if (!params || !params.slug) return {};
  
    const uri = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  
    console.log("Fetching Storyblok story for slug:", uri);
  
    try {
      const { data } = await this.sbGet("cdn/stories/" + uri, this.getDefaultSBParams());
      console.log("Fetched story data:", data);
      return data.story;
    } catch (error) {
      console.error("Error fetching story from Storyblok:", error.response);
      throw error;
    }
  }
  
  

  static async getAllProducts() {
    try {
      const { data } = await this.sbGet("cdn/stories", {
        ...this.getDefaultSBParams(),
        starts_with: "products/",
      });
      return data.stories; 
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  }

  static getDefaultSBParams() {
    return {
      version: this.VERSION,
      resolve_links: "url",
      cv: Date.now(),
    };
  }

  static async getConfig() {
    try {
      const { data } = await this.sbGet(
        "cdn/stories/global-config",
        this.getDefaultSBParams()
      );
      return data?.story;
    } catch (error) {
      console.log("CONFIG ERROR", error);
      return {};
    }
  }

  static async generateMetaFromStory(slug) {
    try {
      const story = await this.getStory({ slug });
      return {
        title: story.content?.seo_title || "Title",
        description: story.content?.seo_description || "Description",
      };
    } catch (error) {
      console.log("METADATA ERROR", error);
      return {
        title: "Title",
        description: "Description",
      };
    }
  }

  static async getStaticPaths() {
    try {
      let sbParams = {
        version: this.VERSION,
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
