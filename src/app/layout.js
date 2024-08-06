import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { CMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: process.env.NEXT_PREVIEW_STORYBLOK_TOKEN,
  use: [apiPlugin],
});

export default async function RootLayout({ children }) {
  const currentConfig = await CMS.getConfig();
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <Layout config={currentConfig}>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
