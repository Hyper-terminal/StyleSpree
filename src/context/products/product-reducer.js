/* ------------------- reducer function ------------------------- */
const productReducer = (state, action) => {
  const { type } = action;

  if (type === "SET_PRODUCTS") {
    return {
      ...state,
      products: action.products,
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

  if (type === "SORT_PRODUCTS") {
    const { sorting_method } = action;
    const [property, method] = sorting_method.split("-");
    const updatedSorting = [...state.sorting];
    updatedSorting[0] = { property, method };
    
    return { ...state, sorting: updatedSorting };
  }

  return { ...state, products: sortedArr };
};

export default productReducer;
