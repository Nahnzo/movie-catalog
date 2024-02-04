import { memo } from "react";
import classes from "./skeleton.module.scss";

const Skeleton = memo((props) => {
  const { height, width, border, margin } = props;
  const styles = {
    width,
    height,
    margin,
    borderRadius: border,
  };
  return <div className={classes.Skeleton} style={styles}></div>;
});

export default Skeleton;
