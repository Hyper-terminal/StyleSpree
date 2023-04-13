import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./product-details.module.css";
import { ProductContext } from "../../context/products/product-context";
import ProductInfo from "./ProductInfo";
import ImageInfo from "./ImageInfo";

const ProductDetails = () => {
  const param = useParams();
  const { productID } = param;
  const { products } = useContext(ProductContext);
  const product = products.find(
    (element) => Number(element.productId) === Number(productID)
  );

  return (
    <div className={classes.container}>
      <ImageInfo product={product} />
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetails;
