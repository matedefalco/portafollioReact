import { Fragment } from "react";
import ProfileCard from "../../UI/ProfileCard/ProfileCard";

import classes from "./AboutMe.module.css";

const AboutMe = (props) => {
let texto1 = "Desde 2019 trabajo en el desarrollo web. Me recibí en Digital House como Programador Web Full Stack. Luego de eso, comencé a instruirme en distintos frameworks. Más que nada maquetado de Front End.";
let texto2 = "Hace +3 años que trabajo e investigo las crtiptomonedas y las tecnologías descentralizadas. He operado con múltiples Dapps en el ecosistema DeFi (Descentralized Finances). Cuento también conexperiencia en NFT´s, interactuando con múltiples coleccionesvirtuales. Soy también Co-Founder de la comunidad CryptoMeetUp, un equipo enfocado en la adopción de las criptomonedas en elmundo.";
let texto3 = "Trabajo actualmente como Data Analyst en una compañia de producción digital. Utilizando Adobe, Google Analytics, y otrasherramientas, examino las métricas de interacción de los sitios para los mercados de nuestros clientes.";
let titulo = "Título";
  return (
    <Fragment>
      <div className={classes.cajaAbout}>
        <h2>About Me</h2>
        <div className={classes.cajaAboutCards}>
          <ProfileCard titulo ={titulo} text={texto1}></ProfileCard>
          <ProfileCard titulo ={titulo} text={texto2}></ProfileCard>
          <ProfileCard titulo ={titulo} text={texto3}></ProfileCard>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
