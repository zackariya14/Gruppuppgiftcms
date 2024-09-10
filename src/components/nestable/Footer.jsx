export default function Footer({ blok }) {
    return (
      <footer className="bg-gray-100 py-10 px-6">
        {blok.newsletter && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{blok.newsletter_title}</h2>
            <p className="text-gray-600 mb-4">{blok.newsletter_description}</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
              >
                {blok.newsletter_button_text}
              </button>
            </form>
          </div>
        )}
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blok.footer_links &&
            blok.footer_links.map((category) => (
              <div key={category._uid}>
                <h3 className="font-bold mb-4">{category.category_title}</h3>
                <ul>
                  {category.links.map((link) => (
                    <li key={link._uid} className="mb-2">
                      <a
                        href={link.url.url}
                        className="text-gray-600 hover:text-blue-500"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </footer>
    );
  }
  