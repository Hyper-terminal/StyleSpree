import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import classes from "./desktop-navbar.module.css";
import Searchbar from "../../components/search-bar/Searchbar";

const DesktopNavbar = () => {
  return (
    <header className={classes.container}>
      <div className={classes.left_container}>
        <h2>StyleSpree</h2>
        <nav className={classes.link}>
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </nav>
        <Searchbar />
      </div>

      <div className={classes.actions}>
        <div style={{ textAlign: "center" }}>
          <CgProfile size={20} />
          <span style={{ display: "block", fontSize: "14px" }}>Profile</span>
        </div>

        <div style={{ textAlign: "center" }}>
          <AiOutlineHeart size={20} />
          <span style={{ display: "block", fontSize: "14px" }}>Wishlist</span>
        </div>

        <div style={{ textAlign: "center" }}>
          <BiShoppingBag size={20} />
          <span style={{ display: "block", fontSize: "14px" }}>Bag</span>
        </div>
      </div>
    </header>
  );
};

export default DesktopNavbar;
