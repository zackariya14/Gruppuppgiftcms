import { storyblokEditable } from "@storyblok/react";

const About = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)} className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
  
        <h1 className="text-4xl font-bold mb-6">{blok.title}</h1>

        <p className="text-lg text-gray-700 mb-6">{blok.description}</p>
      </div>
    </section>
  );
};

export default About;
