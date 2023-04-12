import classes from "./card.module.css";
export default function Card({children, ...rest}) {
  return <div {...rest} className={classes.container}>{children}</div>;
}
