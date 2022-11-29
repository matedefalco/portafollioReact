import { Fragment } from "react";

import classes from "./MenuHeader.module.css";

const MenuHeader = () => {
  return (
    <Fragment>
      <ul className={classes.headerMenu}>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#proyects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Fragment>
  );
};

export default MenuHeader;
