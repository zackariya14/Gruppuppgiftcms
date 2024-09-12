"use client"; 

import Link from 'next/link';

export default function Header({ blok }) {
  return (
    <header className="bg-gray-100 border-b border-gray-300"> {/* Lägg till en border-b här */}
      <div className="bg-black text-white py-2 px-6 flex justify-between items-center text-sm">
        <span>USD</span>
        <span>FREE SHIPPING ON ALL ORDERS ABOVE 50$.</span>
        <span>Support</span>
      </div>

      <div className="bg-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">{blok.Title}</h1>

        <nav className="flex space-x-6">
          {blok.Navigation && blok.Navigation.map((navItem) => {
            const linkUrl = navItem.URL?.cached_url || "#";
            const linkType = navItem.URL?.linktype || "url";

            if (linkType === "story") {
              return (
                <Link key={navItem._uid} href={`/${linkUrl}`} className="text-gray-700 hover:text-black font-medium">
                  {navItem.Label}
                </Link>
              );
            } else {
              return (
                <a key={navItem._uid} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black font-medium">
                  {navItem.Label}
                </a>
              );
            }
          })}
        </nav>

        {blok.SearchEnabled && (
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md p-2"
            />
            <div className="flex items-center space-x-2">
              <span className="material-icons">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                  <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                </svg>
              </span>
              <span>{blok.CartItems}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
