"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { StoryblokCMS } from "@/utils/cms";

export default function Header({ blok }) {
  const [products, setProducts] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  let closeTimeout;

  useEffect(() => {
    async function fetchProducts() {
      try {
        const allProducts = await StoryblokCMS.getAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200); 
  };

  return (
    <header className="bg-gray-100 border-b border-gray-300">
      <div className="bg-black text-white py-2 px-6 flex justify-between items-center text-sm">
        <span>USD</span>
        <span>FREE SHIPPING ON ALL ORDERS ABOVE 50$.</span>
        <span>Support</span>
      </div>

      <div className="bg-white py-4 px-6 flex justify-between items-center relative">
        <h1 className="text-xl font-bold">{blok.Title}</h1>

        <nav className="flex space-x-6">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
             <Link href="/products" className="text-gray-700 hover:text-black font-medium">
              Products
            </Link>

            {isDropdownOpen && (
              <div className="absolute bg-white border border-gray-300 mt-2 rounded-lg shadow-lg w-48 z-10">
                <ul className="py-2">
                  {products.length > 0 ? (
                    products
                      .slice(0, 5) 
                      .map((product) => (
                        <li
                          key={product.uuid}
                          className="px-4 py-2 hover:bg-gray-100"
                        >
                          <Link
                            href={`/products/${product.slug}`}
                            className="text-gray-700 hover:text-black"
                          >
                            {product.content.product_name}
                          </Link>
                        </li>
                      ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">Loading...</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <Link href="/home" className="text-gray-700 hover:text-black font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black font-medium">
            About
          </Link>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
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
