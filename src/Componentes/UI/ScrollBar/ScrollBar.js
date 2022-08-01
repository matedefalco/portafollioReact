import { Fragment } from "react";
import classes from "./ScrollBar.module.css";

const ScrollBar = () => {
  const progress = document.getElementById("progressBar");
  const totalHeight = document.body.scrollHeight - window.innerHeight;

  window.onscroll = function () {
    const progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  };

  return <Fragment>
    <div className={classes.progressBar}></div>
    <div className={classes.scrollPath}></div>
  </Fragment>;
};

export default ScrollBar;
