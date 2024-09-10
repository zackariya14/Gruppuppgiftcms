import { storyblokEditable } from "@storyblok/react";

const Hero03 = ({ blok }) => {
  return (
    <section className="bg-gray-100 py-20" {...storyblokEditable(blok)}>
      <div className="container mx-auto text-center">
       
        <h1 className="text-5xl font-bold mb-4">{blok.title}</h1>

      
        <p className="text-lg text-gray-600 mb-6">{blok.text}</p>

        
        {blok.button?.cached_url && (
          <a
            href={`/${blok.button.cached_url}`}
            className="px-6 py-2 bg-white text-black border border-black rounded-full hover:bg-gray-200 transition"
          >
            {blok.button_label || "Shop All"}
          </a>
        )}
      </div>

    
      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      
        {blok.imageBlock?.[0]?.image?.filename && (
          <img
            className="w-full h-64 md:h-120 object-cover"
            src={blok.imageBlock[0].image.filename}
            alt={blok.imageBlock[0].image.alt || "Image 1"}
          />
        )}


        {blok.imageBlock?.[0]?.image2?.filename && (
          <img
            className="w-full h-90 md:h-80 object-cover mb-8" 
            src={blok.imageBlock[0].image2.filename}
            alt={blok.imageBlock[0].image2.alt || "Image 2"}
          />
        )}

     
        {blok.imageBlock?.[0]?.image3?.filename && (
          <img
            className="w-full h-64 md:h-120 object-cover"
            src={blok.imageBlock[0].image3.filename}
            alt={blok.imageBlock[0].image3.alt || "Image 3"}
          />
        )}
      </div>
    </section>
  );
};

export default Hero03;
