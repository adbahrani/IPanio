import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./achievement.scss";

const Achievement = () => {
  return (
    <section className="achievement">
      <div className="container">
        <h1>Achievements</h1>
        <div className="divider" />
        <div className=" flex">
          <ProgressBar />
          <span>1/3</span>
        </div>
        <div className="divider" />
        <div className=" flex">
          <ProgressBar />
          <span>1/3</span>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
