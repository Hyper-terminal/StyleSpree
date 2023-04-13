import React, { useContext } from "react";
import { IoFilterSharp } from "react-icons/io5";
import { ProductContext } from "../../context/products/product-context";
import useMediaQuery from "../../hooks/useMediaQuery";
import PriceFilter from "../filters-sidebar/PriceFilter";
import classes from "./sidebar.module.css";
import ColorFilter from "../filters-sidebar/ColorFilter";
import BrandFilter from "../filters-sidebar/BrandFilter";

const Sidebar = () => {
  const { filteredProducts } = useContext(ProductContext);


  const isMobile = useMediaQuery("(max-width: 770px)");
  if (isMobile) return <></>;

  return (
    <div className={classes.container}>
      <div
        className={classes.subContainer}
        style={{ marginTop: "25px", marginBottom: "10px" }}
      >
        <h1 className={classes.total}>
          Men T-Shirts{" "}
          <span style={{ color: "#878b94" }}>
            - {filteredProducts.length} items
          </span>
        </h1>
        <h3 style={{ marginTop: "10px" }}>
          <IoFilterSharp /> Filters
        </h3>
      </div>

      <PriceFilter />
      <BrandFilter />
      <ColorFilter />
    </div>
  );
};
export default React.memo(Sidebar);
