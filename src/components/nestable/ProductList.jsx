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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts
          .filter(product => product.content.product_name && product.content.price && product.content.image)
          .map((product) => (
            <div 
              key={product.uuid} 
              className="border p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Link href={`/products/${product.slug}`}>
                <img
                  src={`https:${product.content.image}`}
                  alt={product.content.product_name}
                  className="w-full h-48 object-cover mb-4 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-300"
                />
              </Link>

              <h2 className="text-lg font-semibold mb-2 text-center">{product.content.product_name}</h2>

              <p className="text-sm text-gray-600 mb-2 text-center">
                {product.content.description.length > 100 
                  ? `${product.content.description.slice(0, 100)}...` 
                  : product.content.description}
              </p>

              <p className="text-lg font-semibold mb-4 text-center">{product.content.price} $</p>
            </div>
          ))}
      </div>
    </div>
  );
}
