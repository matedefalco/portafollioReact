import { Fragment } from "react";
import "./Button.css";

const Button = (props) => {
  return <Fragment>
    <a href={props.ref} target="_blank" rel="noreferrer">
        <button>{props.title}</button>
    </a>
  </Fragment>;
};

export default Button;
