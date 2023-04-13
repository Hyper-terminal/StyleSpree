export const filterProductsByPrice = (products, priceFilter) => {
  if (priceFilter.length === 0) {
    return products;
  }

  const { minPrice, maxPrice } = priceFilter[0];
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
};

export const filterProductsByColors = (products, colorFilter) => {
  if (colorFilter.length === 0) return products;

  return products.filter((product) =>
    colorFilter.some(
      (color) => color.toLowerCase() === product.primaryColour.toLowerCase()
    )
  );
};

export const filterProductsByBrands = (products, brandFilter) => {
  if (brandFilter.length === 0) return products;

  return products.filter((product) =>
    brandFilter.some(
      (brand) => brand.toLowerCase() === product.brand.toLowerCase()
    )
  );
};

export const sortProducts = (products, sorting) => {
  if (sorting.length === 0) return products;
  const { method, property } = sorting[0];

  if (method === "decrease") {
    products.sort((a, b) => b[property] - a[property]);
  } else {
    products.sort((a, b) => a[property] - b[property]);
  }
};
