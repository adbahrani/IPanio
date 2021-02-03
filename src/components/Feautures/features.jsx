import React from "react";
import "./features.scss";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiPencilRuler2Line } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>iPiano comes with amazing features</h2>
        <div className="feature-row">
          <div className="feature feature-col-1">
            <ImBooks size="56" className="icons" />
            <div className="content">
              <h4>10,000 online courses</h4>
              <p>Explore a variety of lessons</p>
            </div>
          </div>
          <div className="feature feature-col-2">
            <RiPencilRuler2Line size="56" className="icons" />
            <div className="content">
              <h4>Expert Instructions</h4>
              <p>Find the right Instructor for you</p>
            </div>
          </div>
          <div className="feature feature-col-3">
            <AiOutlineSchedule size="56" className="icons" />
            <div className="content">
              <h4>Lifetime access</h4>
              <p>Learn on your schedule</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
