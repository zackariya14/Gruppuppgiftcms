export default function Header({ blok }) {
  return (
    <header className="bg-gray-100">
      <div className="bg-black text-white py-2 px-6 flex justify-between items-center text-sm">
        <span>USD</span>
        <span>FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.</span>
        <span>Support</span>
      </div>

      <div className="bg-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">{blok.Title}</h1>

        <nav className="flex space-x-6">
          {blok.Navigation && blok.Navigation.map((navItem) => {
            const linkUrl = navItem.URL?.url || "#"; 
            return (
              <a
                key={navItem._uid}
                href={linkUrl}
                className="text-gray-700 hover:text-black font-medium"
              >
                {navItem.Label}
              </a>
            );
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
              <span className="material-icons">shopping_cart</span>
              <span>{blok.CartItems}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
