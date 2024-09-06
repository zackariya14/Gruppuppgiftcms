import { StoryblokComponent } from "@storyblok/react/rsc";

export default function Grid({ blok }) {
    if (!blok || !blok.columns) return null;

    return (
        <section className="bg-gray-100 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {blok.columns.map((nestedBlok) => (
                    <div 
                        key={nestedBlok._uid}
                        className="shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                    >
                        <StoryblokComponent blok={nestedBlok} />
                    </div>
                ))}
            </div>
        </section>
    );
}
