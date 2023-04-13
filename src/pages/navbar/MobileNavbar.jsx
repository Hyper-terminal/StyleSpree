import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { navbar_links } from "../../constants/navbar-links";
import classes from "./mobile-navbar.module.css";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <header className={classes.container}>
        <div className={classes.logo}>
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
              <div style={{ marginTop: "20px" }}>
                <AiOutlineHeart /> Wishlist
              </div>
              <div>
                <BiShoppingBag />
                Bag
              </div>
            </nav>
          </div>
        )}

        <AiOutlineSearch
          onClick={() => {
            setSearchOpen((prev) => !prev);
          }}
        />
      </header>
      {searchOpen && (
        <input
          type="search"
          placeholder="Search for products"
          className={classes.search}
        />
      )}
    </>
  );
};

export default MobileNavbar;
