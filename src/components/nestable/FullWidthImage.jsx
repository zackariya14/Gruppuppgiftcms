import { storyblokEditable } from "@storyblok/react";

const FullWidthImage = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className="w-full">
        {blok.image?.filename && (
          <img
            className="w-full h-[20rem] object-cover"
            src={blok.image.filename}
            alt={blok.image.alt || "Full Width Image"}
          />
        )}
      </div>
    </section>
  );
};

export default FullWidthImage;
