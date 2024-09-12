const ProductPage = ({ blok }) => {
  const { product_name, image, price, description, colors, sizes } = blok;

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-8">
    
        <div className="w-full md:w-1/2">
          {image && (
            <img
              src={image}
              alt={product_name}
              className="w-full h-auto object-cover rounded-lg"
            />
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{product_name}</h1>
            <p className="text-2xl font-semibold text-gray-700 mb-4">
              {price ? `${price} USD` : 'N/A'}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {description || 'No description available'}
            </p>
          </div>

          {colors && colors.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Available Colors</h3>
              <div className="flex space-x-4">
                {colors.map((colorItemValue, index) => (
                  <span
                    key={index}
                    className="w-8 h-8 rounded-full border transition-all duration-200 hover:scale-110 hover:border-gray-500"
                    style={{ backgroundColor: colorItemValue }}
                  />
                ))}
              </div>
            </div>
          )}

       
          {sizes && sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2">Available Sizes</h3>
              <div className="flex space-x-4">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 border rounded-md text-center text-lg font-medium transition-all duration-200 hover:bg-gray-200 hover:border-gray-500"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
