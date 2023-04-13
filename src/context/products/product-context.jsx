import React, { createContext, useCallback, useMemo, useReducer } from "react";
import productReducer from "./product-reducer";
import {
  filterProductsByBrands,
  filterProductsByColors,
  filterProductsByPrice,
  sortProducts,
} from "./product.utils";

export const ProductContext = createContext();

const initialState = {
  products: [],
  filters: {
    price: [],
    color: [],
    brand: [],
  },
  sorting: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const { products, filters, sorting } = state;

  const setProducts = useCallback(
    (products) => dispatch({ type: "SET_PRODUCTS", products }),
    []
  );

  const setFilter = useCallback((filter) => {
    dispatch({ type: "FILTER_PRODUCTS", filter });
  }, []);

  const setSorting = useCallback((sorting_method) => {
    dispatch({ type: "SORT_PRODUCTS", sorting_method }), [];
  });

  const filteredProducts = useMemo(() => {
    let filteredProducts = [...products];
    // filter by price
    filteredProducts = filterProductsByPrice(filteredProducts, filters.price);
    filteredProducts = filterProductsByColors(filteredProducts, filters.color);
    filteredProducts = filterProductsByBrands(filteredProducts, filters.brand);

    // sorting
    sortProducts(filteredProducts, sorting);
    return filteredProducts;
  }, [filters, filterProductsByPrice, sorting, products]);

  return (
    <ProductContext.Provider
      value={{ ...state, setProducts, setFilter, filteredProducts, setSorting }}
    >
      {children}
    </ProductContext.Provider>
  );
};
