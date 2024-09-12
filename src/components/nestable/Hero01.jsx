import { storyblokEditable } from "@storyblok/react"; 

const Hero01 = ({ blok }) => {
  
  const backgroundColor = blok.background_color || 'bg-gray-100'; 

  return (
    <section 
      className="py-20" 
      {...storyblokEditable(blok)}
      style={{ backgroundColor: backgroundColor }}  
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>

        <p className="text-lg text-gray-600 mb-6">{blok.text}</p>

   
        {blok.button?.cached_url && (
          <a
            href={`/${blok.button.cached_url}`} 
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            {blok.button_label || blok.button.story?.name || 'Shop All'} 
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
