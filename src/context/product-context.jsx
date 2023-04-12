import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import productsData from "../constants/men-products.json";
import productReducer from "./product-reducer";

export const ProductContext = createContext();

const initialState = {
  products: productsData,
  filteredProducts: productsData,
  filters: {
    price: [],
    color: [],
    brand: [],
  },
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const setProducts = useCallback(
    (products) => dispatch({ type: "SET_PRODUCTS", products }),
    []
  );

  const setFilter = useCallback((filter) => {
    dispatch({ type: "FILTER_PRODUCTS", filter });
    dispatch({ type: "UPDATE_PRODUCTS" });
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, setProducts, setFilter }}>
      {children}
    </ProductContext.Provider>
  );
};
