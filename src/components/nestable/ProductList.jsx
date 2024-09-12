import { useEffect, useState } from "react";
import Link from "next/link"; 
import { StoryblokCMS } from "@/utils/cms";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await StoryblokCMS.getAllProducts();
      setProducts(allProducts);
    }

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div>Loading products...</div>;
  }

  return (
    <div>
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.uuid} className="product-item">
            <h2>{product.content.product_name}</h2>
            {product.content.image && (
              <img
                src={`https:${product.content.image}`}
                alt={product.content.product_name}
                width={300}
                height={300}
              />
            )}
            <p>{product.content.description}</p>
            <p>Price: {product.content.price} USD</p>
            
            <Link href={`/products/${product.slug}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
