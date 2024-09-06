import { renderRichText } from "@storyblok/react/rsc";

export default function ContentBlock({ blok }) {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-white">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <img
                    src={blok.Image || "/no-image-available.png"}
                    alt={blok.image?.alt || "No Image Available"}
                    className="w-full h-auto max-h-64 rounded-lg shadow-lg object-cover"
                />
            </div>
            <div className="md:w-1/2 text-center flex flex-col justify-center items-center space-y-4 px-4">
                <h2 className="text-3xl font-bold text-gray-800">{blok.Title}</h2>
                <div
                    className="text-lg text-gray-600"
                    dangerouslySetInnerHTML={{ __html: renderRichText(blok.Description) }}
                />
                {blok.Link && blok.Link[0] && blok.Link[0].LinkURL && (
                    <a
                        href={`/${blok.Link[0].LinkURL.cached_url || "#"}`}
                        className="text-blue-500 hover:text-blue-700 transition duration-300"
                    >
                        {blok.Link[0].LinkName || "Default Link Text"}
                    </a>
                )}
            </div>
        </section>
    );
}
