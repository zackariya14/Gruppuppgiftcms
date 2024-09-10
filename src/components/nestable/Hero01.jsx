import { storyblokEditable } from "@storyblok/react";

const Hero01 = ({ blok }) => {
  return (
    <section className="bg-gray-100 py-20" {...storyblokEditable(blok)}>
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>

        <p className="text-lg text-gray-600 mb-6">{blok.text}</p>

        {/* Render button with custom label if available, otherwise fallback to the Story's name */}
        {blok.button?.cached_url && (
          <a
            href={`/${blok.button.cached_url}`} // Use cached_url for the link
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            {blok.button_label || blok.button.story?.name || 'Shop All'} {/* Custom button label */}
          </a>
        )}
      </div>

      <div className="container mx-auto mt-10">
        {blok.image?.filename && (
          <img
            className="w-full h-64 object-cover"
            src={blok.image.filename}
            alt={blok.image.alt || "Hero Image"}
          />
        )}
      </div>
    </section>
  );
};

export default Hero01;
