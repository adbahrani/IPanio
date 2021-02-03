import React from "react";
import "./lessoncomp.scss";
import { Link, useHistory } from "react-router-dom";
const LessonComp = ({ no }) => {
  const history = useHistory();

  let handleClick = () => {
    history.push("/startLesson");
  };
  return (
    <div className="lesson-comp" onClick={handleClick}>
      <div className="container">
        <div className="heading">
          <h1 className="heading-no">{no}</h1>
        </div>
        <ul>
          <li>Basic 1</li>
          <li>Basic 2</li>
          <li>Intermediate</li>
          <li>Expert</li>
        </ul>
      </div>
    </div>
  );
};

export default LessonComp;
