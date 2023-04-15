import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import classes from "./image-info.module.css";

SwiperCore.use([Pagination]);

// Add some styles to center the images within the SwiperSlide components
const swiperSlideStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ImageInfo = ({ product }) => {
  const isMobile = useMediaQuery("(max-width: 770px)");
  const { images } = product;

  return (
    <div className={classes.container}>
      {!isMobile &&
        images.map(
          (item) =>
            item.src && (
              <div className={classes.subcontainer}>
                <InnerImageZoom
                  key={item.view}
                  src={item.src}
                  zoomSrc={item.src}
                  alt={item.view}
                  zoomScale={0.9}
                />
              </div>
            )
        )}
      {isMobile && (
        <Swiper style={{ height: "100%" }} pagination>
          {images.map(
            (item) =>
              item.src && (
                <SwiperSlide key={item.view} style={swiperSlideStyles}>
                  <InnerImageZoom
                    key={item.view}
                    src={item.src}
                    zoomSrc={item.src}
                    alt={item.view}
                    zoomScale={1.1}
                    fullscreenOnMobile
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      )}
    </div>
  );
};

export default ImageInfo;
