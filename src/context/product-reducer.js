const filterProductsByPrice = (products, priceFilter) => {
  if (priceFilter.length === 0) {
    return products;
  }

  const { minPrice, maxPrice } = priceFilter[0];
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

/* ------------------- reducer function ------------------------- */
const productReducer = (state, action) => {
  const { type } = action;

  if (type === "SET_PRODUCTS") {
    return {
      ...state,
      products: action.products,
      filteredProducts: action.products,
    };
  }

  if (type === "FILTER_PRODUCTS") {
    const updatedFilters = { ...state.filters };

    // update filters
    for (const key in action.filter) {
      updatedFilters[key] = action.filter[key];
    }
    return { ...state, filters: { ...updatedFilters } };
  }

  if (type === "UPDATE_PRODUCTS") {
    const { filters } = state;

    // check if all filters are empty arrays
    const allFiltersEmpty = Object.values(filters).every(
      (filter) => filter.length === 0
    );

    if (allFiltersEmpty) {
      // if all filters are empty, reset the products state to the initial value
      return { ...state, filteredProducts: [...state.products] };
    }

    let filteredProducts = [...state.products];
    // price
    filteredProducts = filterProductsByPrice(filteredProducts, filters.price);

    // update the products state with the filtered products
    return { ...state, filteredProducts: filteredProducts };
  }

  return state;
};

export default productReducer;
