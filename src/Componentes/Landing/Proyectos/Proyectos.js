import { Fragment } from "react";
import logo from "../../../logo.svg";
import Tecnologias from "./Tecnologias/Tecnologias";
import classes from "./Proyectos.module.css";

const Proyectos = (props) => {
  const arrayProyectos = [
    { id: "c1", nombre: "Abc", imagen: logo, url: "", tecnologias: "" },
    { id: "c2", nombre: "Def", imagen: logo, url: "", tecnologias: "" },
    { id: "c3", nombre: "Ghi", imagen: logo, url: "", tecnologias: "" },
  ];

  const proyectos = (
    <ul className={classes.proyectos}>
      {arrayProyectos.map((item) => (
        <li>
          <h2 className={classes.tituloProyecto}>{item.nombre}</h2>
          <img className={classes.imagenProyecto} src={item.imagen} alt="" />
          <ul className={classes.tecnologiasProyecto}>
            <Tecnologias />
          </ul>
        </li>
      ))}
    </ul>
  );

  return <Fragment>{proyectos}</Fragment>;
};
export default Proyectos;
