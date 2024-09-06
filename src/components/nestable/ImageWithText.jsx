export default function ImageWithText({ blok }) {
    return (
      <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg">
        {blok.Image ? (
          <img
            className="w-full h-48 object-cover mb-4"
            src={blok.Image}
            alt={blok.title || "Image"}
          />
        ) : (
          <p>No image available</p>
        )}
        <h3 className="text-2xl font-semibold mb-2">{blok.Title}</h3>
        <p className="text-gray-700">
          {blok.Text?.content?.[0]?.content?.[0]?.text || "No text available"}
        </p>
      </div>
    );
  }
  