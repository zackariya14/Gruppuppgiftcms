export default function TextSection({ blok }) {
    return (
      <section className="py-8 px-4 bg-gray-100">
        {blok.Titel && (
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {blok.Titel}
          </h2>
        )}
        <div className="max-w-3xl mx-auto text-lg text-gray-700">
          <p>{blok.TextArea}</p>
        </div>
      </section>
    );
  }
  