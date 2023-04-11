import { useState } from "react";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import classes from "./mobile-navbar.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Searchbar from "../../components/search-bar/Searchbar";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
              <div>Men</div>
              <div>Women</div>
              <div>Kids</div>
            </nav>
            <div>Wishlist</div>
            <div>Bag</div>
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
