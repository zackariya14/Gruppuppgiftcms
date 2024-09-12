"use client";

import { useEffect, useState } from "react";
import Link from "next/link"; 
import { StoryblokCMS } from "@/utils/cms";

export default function ProductList({ blok }) {
  const { products: uuids } = blok;
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await StoryblokCMS.getAllProducts();
      const filteredProducts = allProducts.filter(product => uuids.includes(product.uuid));
      setProducts(filteredProducts);
      setFilteredProducts(filteredProducts); 
    }
    fetchProducts();
  }, [uuids]);

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilter(searchTerm);

    const filtered = products.filter(product =>
      product.content.product_name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  if (products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>

      <div className="mb-6 text-center">
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search for products..."
          className="border border-gray-300 p-2 rounded-lg w-64"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts
          .filter(product => product.content.product_name && product.content.price && product.content.image)
          .map((product) => (
            <div key={product.uuid} className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">{product.content.product_name}</h2>

              {product.content.image && (
                <img
                  src={`https:${product.content.image}`}
                  alt={product.content.product_name}
                  className="w-full h-64 object-cover mb-4 rounded-md"
                />
              )}

              <p className="text-lg font-semibold mb-4">Price: {product.content.price} USD</p>

              <Link href={`/products/${product.slug}`} className="block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                View Product
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
