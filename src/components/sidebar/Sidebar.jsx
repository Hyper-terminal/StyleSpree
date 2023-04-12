import { IoFilterSharp } from "react-icons/io5";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./sidebar.module.css";
import PriceFilter from "../filters-sidebar/PriceFilter";
const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 770px)");
  if (isMobile) return <></>;

  return (
    <div className={classes.container}>
      <div
        className={classes.subContainer}
        style={{ marginTop: "25px", marginBottom: "10px" }}
      >
        <h1 className={classes.total}>
          Men T-Shirts <span style={{ color: "#878b94" }}>- 92083 items</span>
        </h1>
        <h3 style={{ marginTop: "10px" }}>
          <IoFilterSharp /> Filters
        </h3>
      </div>

      <PriceFilter/>
    </div>
  );
};
export default Sidebar;
