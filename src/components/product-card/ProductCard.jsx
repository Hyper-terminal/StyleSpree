import { useNavigate } from "react-router-dom";
import classes from "./product-card.module.css";
import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const brand_len = product.brand.length;
  const navigate = useNavigate();
  return (
    <div
      className={classes.container}
      onClick={() => navigate(`/products/details/${product.productId}`)}
    >
      <div className={classes.imageContainer}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={product.searchImage}
          alt={product.productName}
        />
        <div className={classes.actions}>
          <button className={classes.wishlist}>
            <AiOutlineHeart />
            WISHLIST
          </button>
          <h4 className={classes.size}>Sizes: {product.sizes}</h4>
        </div>

        <div className={classes.productMetaInfo}>
          <h3 className={classes.brand}>{product.brand}</h3>
          <h4 className={classes.product}>
            {product.product.slice(brand_len, product.product.length)}
          </h4>
          <h5 className={classes.price}>Rs. {product.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
