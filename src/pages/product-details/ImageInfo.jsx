import classes from "./image-info.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useMediaQuery from "../../hooks/useMediaQuery";

const ImageInfo = ({ product }) => {
  const isMobile = useMediaQuery("(max-width: 770px)");
  const { images } = product;
  return (
    <div className={classes.container}>
      {!isMobile &&
        images.map(
          (item) => item.src && <img src={item.src} alt={item.view} />
        )}
      {isMobile && <img src={images[0].src} alt={images[0].view} />}
    </div>
  );
};

export default ImageInfo;
