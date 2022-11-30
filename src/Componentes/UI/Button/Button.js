import { Fragment } from "react";
import "./Button.css";

const Button = (props) => {
  return <Fragment>
    <button className="buttonUI">{props.title}</button>
  </Fragment>;
};

export default Button;
