import { Fragment } from "react";

import classes from "./MenuHeader.module.css";

const MenuHeader = () => {
  return (
    <Fragment>
      <ul className={classes.headerMenu}>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Proyects">Proyects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default MenuHeader;
