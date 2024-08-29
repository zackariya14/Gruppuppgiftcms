import { StoryblokComponent } from "@storyblok/react/rsc";
export default function Page({ blok }) {
    return (
        <main>
            {blok?.body?.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    )
}