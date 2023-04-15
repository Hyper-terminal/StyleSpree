import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./image-info.module.css";
SwiperCore.use([Pagination]);

const ImageInfo = ({ product }) => {
  const isMobile = useMediaQuery("(max-width: 770px)");
  const { images } = product;
  return (
    <div className={classes.container}>
      {!isMobile &&
        images.map(
          (item) =>
            item.src && <img key={item.view} src={item.src} alt={item.view} />
        )}
      {isMobile && (
        <Swiper pagination>
          {images.map(
            (item) =>
              item.src && (
                <SwiperSlide key={item.view}>
                  <img src={item.src} alt={item.view} />
                </SwiperSlide>
              )
          )}
        </Swiper>
      )}
    </div>
  );
};

export default ImageInfo;
