import Link from 'next/link';

export default function Header({ blok }) {
  return (
    <header className="bg-white shadow-lg p-4 flex items-center justify-between flex-wrap md:flex-nowrap">
      <div className="flex-shrink-0">
        <img src={blok.Logo} alt="Logo" className="w-32 md:w-20" />
      </div>

      <div className="block md:hidden">
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <nav className="hidden md:flex space-x-6">
        {blok.Links && blok.Links.length > 0 ? (
          blok.Links.map((link) => (
            <Link href={`/${link.LinkURL.cached_url}`} key={link._uid} className="text-lg font-semibold text-gray-700 hover:text-blue-600">
              {link.LinkName}
            </Link>
          ))
        ) : (
          <p className="text-gray-500">Inga länkar tillgängliga</p>
        )}
      </nav>
    </header>
  );
}
