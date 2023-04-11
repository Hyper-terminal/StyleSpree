import { createContext, useState } from "react";

const PRODUCTS = {};

const ProductContext = createContext({
  products: [],
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
export { ProductProvider };
