
const ProductPage = ({blok}) => {
 
  console.log("PRODUCT", blok)
  const { product_name, image, price, description } = blok;
  return (
    <div>
      <h1>{product_name}</h1>
      {image && <img src={image} alt={product_name} />} 
      <p>Price: {price ? `${price} USD` : 'N/A'}</p>
      <p>Description: {description || 'No description available'}</p>
    </div>
  );
};

export default ProductPage;
