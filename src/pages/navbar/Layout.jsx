import { useState } from "react";
import MobFilter from "../../components/mobile-filters/MobFilter";
import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Cart from "../../components/cart/Cart";

export default function Layout({ children }) {
  const isMobile = useMediaQuery("(max-width: 770px)");
  const [isShown, setIsShown] = useState(false);

  const handleFilters = () => {
    setIsShown((prev) => !prev);
  };

  return (
    <>
      {isMobile ? (
        <MobileNavbar onFilterClick={handleFilters} />
      ) : (
        <DesktopNavbar />
      )}
      <Cart />
      {isShown && <MobFilter />}
      {children}
    </>
  );
}
