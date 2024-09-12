import ProductList from "@/components/nestable/ProductList"; 

const Landing = ({ blok }) => {
 
  return (
    <div>
      <h1>{blok.title}</h1> 
      <ProductList products={blok.products} /> 
    </div>
  );
};

export default Landing;
