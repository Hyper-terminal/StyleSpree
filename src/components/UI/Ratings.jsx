import classes from "./ratings.module.css";
import { AiFillStar } from "react-icons/ai";

const Ratings = () => {
  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        4.2 <AiFillStar style={{ marginTop: "1px", color: "#ee5f73" }} />
      </div>
      <div className={classes.seperator}>|</div>
      <div className={classes.ratingCount}>34.9k Ratings</div>
    </div>
  );
};

export default Ratings;
