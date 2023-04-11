import useMediaQuery from "../../hooks/useMediaQuery";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navigation() {
  const isMobile = useMediaQuery("(max-width: 770px)");

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}
