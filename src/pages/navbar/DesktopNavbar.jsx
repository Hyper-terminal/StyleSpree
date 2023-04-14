import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Searchbar from "../../components/search-bar/Searchbar";
import { navbar_links } from "../../constants/navbar-links";
import classes from "./desktop-navbar.module.css";
import { useNavigate } from "react-router-dom";

const DesktopNavbar = () => {
  const navigate = useNavigate();
  return (
    <header className={classes.container}>
      <div className={classes.left_container}>
        <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          StyleSpree
        </h2>
        <nav className={classes.link}>
          {navbar_links.map((item) => (
            <div key={item} onClick={() => navigate("/products/" + item)}>
              {item.toUpperCase()}
            </div>
          ))}
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

export default React.memo(DesktopNavbar);
