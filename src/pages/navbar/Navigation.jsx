import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navigation() {
  const isMobile = useMediaQuery("(max-width: 770px)");

  const handleNavbarLinkClick = (item) => {
    if (item === "men") {
      setProduct(jsonFile1);
    } else if (item === "women") {
      setProduct(jsonFile2);
    } else if (item === "child") {
      setProduct(jsonFile3);
    }
  };

  return isMobile ? (
    <MobileNavbar onNavbarClick={handleNavbarLinkClick} />
  ) : (
    <DesktopNavbar onNavbarClick={handleNavbarLinkClick} />
  );
}
