import { useContext } from "react";
import { ProductCard, Sidebar } from "../../components";
import { ProductContext } from "../../context/product-context";
import classes from "./products.module.css";

const Products = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className={classes.productsPage}>
      <Sidebar />
      <main className={classes.main}>
        <label htmlFor="">
          Sort By:
          <select
            className={classes.sorting}
            defaultValue="Sort by: Recommended"
          >
            <option value="recommended">Recommended</option>
            <option value="popularity">Popularity</option>
            <option value="">Price: High to Low</option>
            <option value="">Price: Low to High</option>
          </select>
        </label>
        <div className={classes.gridContainer}>
          {filteredProducts.length === 0 && <h3>No Products !</h3>}
          {filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.productId} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
