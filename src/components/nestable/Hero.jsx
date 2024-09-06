import { renderRichText } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-10 px-4">
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2 text-center md:text-left mb-6 md:mb-0 space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{blok.Title}</h1>
        <div
          className="text-md text-gray-600"
          dangerouslySetInnerHTML={{ __html: renderRichText(blok.Text) }}
        />
        {blok.Button && (
          <a
            href="#"
            className="bg-blue-500 text-white text-center w-32 px-3 py-1.5 rounded-md hover:bg-blue-600 transition duration-300"
          >
            {blok.Button}
          </a>
        )}
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-3/4 h-auto max-w-sm rounded-lg shadow-lg object-cover"
          src={blok.Image || "/no-image-available.png"}
          alt={blok.image?.alt || "No Image Available"}
        />
      </div>
    </section>
  );
}
