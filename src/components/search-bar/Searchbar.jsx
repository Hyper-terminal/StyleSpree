import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import classes from "./searchbar.module.css";

function Searchbar(props) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className={classes.container}>
      <AiOutlineSearch
        className={`${classes.searchIcon} ${isFocused ? classes.focused : ""}`}
      />
      <input
        placeholder="Search for products"
        type="search"
        className={classes.search}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
}

export default Searchbar;
