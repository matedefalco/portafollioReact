import { Fragment } from "react";
import RoadmapInstance from "./RoadmapInstance/RoadmapInstance.module.css/RoadmapInstance";
import classes from "./Roadmap.module.css";

const Roadmap = (props) => {
  return (
    <Fragment>
      <div className={classes.roadmap}>
        <RoadmapInstance date="Fecha" title="Título" copy="Desde 2019 trabajo en el desarrollo web. Me recibí en Digital House como Programador Web Full Stack. Luego de eso, comencé a instruirme en distintos frameworks. Más que nada maquetado de Front End." skills="mucho lorem mucho lorem mucho lorem mucho laflskngjireagan  awfnoá wegk lnaeokfgnslgmznsk egdnzkjsrgn serkjgn skzrgnbsjkzernfgkzsefn msnf ekajesnf kjmzse fn" />
        <RoadmapInstance date="Fecha" title="Título" copy="Hace +3 años que trabajo e investigo las crtiptomonedas y las tecnologías descentralizadas. He operado con múltiples Dapps en el ecosistema DeFi (Descentralized Finances). Cuento también conexperiencia en NFT´s, interactuando con múltiples coleccionesvirtuales. Soy también Co-Founder de la comunidad CryptoMeetUp, un equipo enfocado en la adopción de las criptomonedas en elmundo." skills="mucho lorem mucho lorem mucho lorem mucho laflskngjireagan  awfnoá wegk lnaeokfgnslgmznsk egdnzkjsrgn serkjgn skzrgnbsjkzernfgkzsefn msnf ekajesnf kjmzse fn" />
        <RoadmapInstance date="Fecha" title="Título" copy="Trabajo actualmente como Data Analyst en una compañia de producción digital. Utilizando Adobe, Google Analytics, y otrasherramientas, examino las métricas de interacción de los sitios para los mercados de nuestros clientes." skills="mucho lorem mucho lorem mucho lorem mucho laflskngjireagan  awfnoá wegk lnaeokfgnslgmznsk egdnzkjsrgn serkjgn skzrgnbsjkzernfgkzsefn msnf ekajesnf kjmzse fn" />
      </div>
    </Fragment>
  );
};

export default Roadmap;
