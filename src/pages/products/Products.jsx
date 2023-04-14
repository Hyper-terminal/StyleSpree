import { useContext, useEffect } from "react";
import { ProductCard, Sidebar } from "../../components";
import { ProductContext } from "../../context/products/product-context";
import classes from "./products.module.css";
import { useParams } from "react-router-dom";
import {
  menProducts,
  childProducts,
  womenProducts,
} from "../../constants/products/";

const Products = () => {
  const { filteredProducts, setSorting, setProducts } =
    useContext(ProductContext);
  console.log(filteredProducts);

  const params = useParams();

  useEffect(() => {
    if (params.category === "men") setProducts(menProducts);
    else if (params.category === "women") setProducts(womenProducts);
    else if (params.category === "child") setProducts(childProducts);
    else setProducts(womenProducts);
  }, [params, setProducts]);

  const handleSorting = (event) => {
    const { value } = event.target;
    setSorting(value);
  };

  return (
    <div className={classes.productsPage}>
      <Sidebar />
      <main className={classes.main}>
        <select
          className={classes.sorting}
          defaultValue="Sort by: Recommended"
          onChange={handleSorting}
        >
          <option value="">Recommended</option>
          <option value="rating-decrease">Popularity</option>
          <option value="price-decrease">Price: High to Low</option>
          <option value="price-increase">Price: Low to High</option>
        </select>
        <div className={classes.gridContainer}>
          {filteredProducts.length === 0 && <h3>No Products !</h3>}
          {filteredProducts &&
            filteredProducts.map((product) => (
              <ProductCard product={product} key={product.productId} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
