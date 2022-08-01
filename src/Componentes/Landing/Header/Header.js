import { Fragment } from "react";
import logo from "../../../logo.svg";
import MenuHeader from "./MenuHeader/MenuHeader";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <img src={logo} alt=""></img>
        <MenuHeader />
      </div>
    </Fragment>
  );
};

export default Header;
