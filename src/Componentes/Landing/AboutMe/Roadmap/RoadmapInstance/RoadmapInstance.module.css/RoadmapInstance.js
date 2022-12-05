import { Fragment } from "react";

import classes from "./RoadmapInstance.module.css";

const RoadmapInstance = (props) => {
  return (
    <Fragment>
      <div className={classes.roadmapBox}>
        <h1 className="roadmapDate">{props.date}</h1>
        <h2 className="roadmapTitle">{props.title}</h2>
        <p className={classes.roadmapCopy}>{props.copy}</p>
        <p className={classes.roadmapSkills}>{props.skills}</p>
      </div>
    </Fragment>
  );
};

export default RoadmapInstance;