import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/product-context";

const FilterByPrice = () => {
  const { setFilter } = useContext(ProductContext);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const handlePriceChange = (event) => {
    const { value, checked } = event.target;
    const [minPrice, maxPrice] = value.split("-").map(Number);

    if (checked) {
      setSelectedPrices((prev) => [...prev, { minPrice, maxPrice }]);
    } else {
      setSelectedPrices((prev) =>
        prev.filter(
          (price) => price.minPrice !== minPrice && price.maxPrice !== maxPrice
        )
      );
    }
  };

  useEffect(() => {
    if (selectedPrices.length > 0) {
      const minPrice = Math.min(
        ...selectedPrices.map((price) => price.minPrice)
      );
      const maxPrice = Math.max(
        ...selectedPrices.map((price) => price.maxPrice)
      );
      setFilter({ price: [{ minPrice, maxPrice }] });
    } else {
      setFilter({ price: [] });
    }
  }, [setFilter, selectedPrices]);

  return (
    <div>
      <h3>Filter by Price</h3>
      <div>
        <input
          type="checkbox"
          id="124-4043"
          value="124-4043"
          onChange={handlePriceChange}
        />
        <label htmlFor="124-4043">Rs. 124 to Rs. 4043</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="4043-7962"
          value="4043-7962"
          onChange={handlePriceChange}
        />
        <label htmlFor="4043-7962">Rs. 4043 to Rs. 7962</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="7962-11881"
          value="7962-11881"
          onChange={handlePriceChange}
        />
        <label htmlFor="7962-11881">Rs. 7962 to Rs. 11881</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="11881-15800"
          value="11881-15800"
          onChange={handlePriceChange}
        />
        <label htmlFor="11881-15800">Rs. 11881 to Rs. 15800</label>
      </div>
    </div>
  );
};

export default FilterByPrice;
