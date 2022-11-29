import { Fragment } from "react";
import ProfileCard from "../../UI/ProfileCard/ProfileCard";

import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <Fragment>
      <ProfileCard></ProfileCard>
      <div className={classes.caja}>
        <h2>About Me</h2>
        <div id="about" className={classes.about}>
          <div className={classes.aboutItem} id="dev">
            <p>
              Desde 2019 trabajo en el desarrollo web. Me recibí en Digital
              House como Programador Web Full Stack. Luego de eso, comencé a
              instruirme en distintos frameworks. Más que nada maquetado de
              Front End.
            </p>
          </div>
          <div className={classes.aboutItem} id="crypto">
            <p>
              Hace +3 años que trabajo e investigo las crtiptomonedas y las
              tecnologías descentralizadas. He operado con múltiples Dapps en el
              ecosistema DeFi (Descentralized Finances). Cuento también con
              experiencia en NFT´s, interactuando con múltiples colecciones
              virtuales. Soy también Co-Founder de la comunidad "CryptoMeetUp",
              un equipo enfocado en la adopción de las criptomonedas en el
              mundo.
            </p>
          </div>
          <div className={classes.aboutItem} id="analyst">
            <p>
              Trabajo actualmente como Data Analyst en una compañia de
              producción digital. Utilizando Adobe, Google Analytics, y otras
              herramientas, examino las métricas de interacción de los sitios
              para los mercados de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
