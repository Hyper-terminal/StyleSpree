import classes from "./info.module.css";
import HorizontalLine from "../../components/UI/HorizontalLine";
import Ratings from "../../components/UI/Ratings";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductInfo = ({product}) => {
  return (
    <div className={classes.productInfo}>
      <h1 className={classes.brand}>{product?.brand}</h1>
      <h1 className={classes.product_name}>
        {product.productName.slice(
          product.brand.length,
          product.productName.length
        )}
      </h1>
      <HorizontalLine />
      <div style={{ marginTop: "20px" }} />
      <Ratings />
      <p className={classes.price}>Rs. {product.price}</p>
      <p style={{ fontSize: "14px", color: "#03a685", fontWeight: "700" }}>
        inclusive of all taxes
      </p>

      {/* some action buttons now  */}
      <div style={{ margin: "18px 0 24px" }}>
        <h4
          style={{
            fontSize: "16px",
            margin: "25px 0",
            fontWeight: "700",
          }}
        >
          SELECT SIZE
        </h4>

        {/* circles */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {product.sizes.split(",").map((size) => (
            <div className={classes.sizes} key={size}>
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* add to cart and wishlist button */}
      <div style={{ marginBottom: "20px " }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <AiOutlineMinus
            size={30}
            style={{ border: "1px solid #bfc0c6", borderRadius: "6px" }}
          />
          <div className={classes.quantity}>01</div>
          <AiOutlinePlus
            size={30}
            style={{ border: "1px solid #bfc0c6", borderRadius: "6px" }}
          />
        </div>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <div className={classes.addToBag}>
            <BiShoppingBag size={30} /> <span>ADD TO BAG </span>
          </div>
          <div className={classes.wishList}>
            <AiOutlineHeart size={30} /> WISHLIST
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default ProductInfo;
