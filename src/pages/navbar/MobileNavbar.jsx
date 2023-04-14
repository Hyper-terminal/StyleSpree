import { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { IoFilterSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { navbar_links } from "../../constants/navbar-links";
import { ProductContext } from "../../context/products/product-context";
import classes from "./mobile-navbar.module.css";

const MobileNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { setSearchQuery, searchQuery } = useContext(ProductContext);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <>
      <header className={classes.container}>
        <div onClick={() => navigate("/")} className={classes.logo}>
          <RxHamburgerMenu onClick={() => setIsOpen(true)} />
          StyleSpree
        </div>

        {isOpen && (
          <div className={classes.sidebar}>
            <AiOutlineClose
              className={classes.closeIcon}
              onClick={() => setIsOpen(false)}
            />
            <nav className={classes.link}>
              {navbar_links.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    navigate("/products/" + item);
                    setIsOpen(false);
                  }}
                >
                  {item.toUpperCase()}
                </div>
              ))}
              <div className={classes.wishlist}>
                <AiOutlineHeart /> Wishlist
              </div>
              <div className={classes.addToBag}>
                <BiShoppingBag />
                Bag
              </div>
            </nav>
          </div>
        )}

        <div style={{ display: "flex", gap: "15px" }}>
          <IoFilterSharp onClick={props.onFilterClick} />
          <AiOutlineSearch
            onClick={() => {
              setSearchOpen((prev) => !prev);
            }}
          />
        </div>
      </header>
      {searchOpen && (
        <input
          type="search"
          placeholder="Search for products"
          className={classes.search}
          onChange={handleChange}
          value={searchQuery}
        />
      )}
    </>
  );
};

export default MobileNavbar;
