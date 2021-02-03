import React from "react";
import "./hero.scss";
import heroImage from "../../assets/images/soundtrap-bIS1Kn6ajuQ-unsplash.jpg";
import { useHistory } from "react-router-dom";

const Hero = () => {
  const history = useHistory();
  let handleClick = () => {
    history.push("/login");
  };

  return (
    <section className="hero-main">
      <div className="hero ">
        <div className="row ">
          <div className="col-6 p-4 text-cente">
            <div className="content">
              <h1 className="heading">Learning at your ease</h1>
              <p className="body">
                iPiano is a leading online platform for learning piano lessons
                step by step at the comfort form your home.
              </p>
            </div>
          </div>
          <div className="col-6 p-2 pb-4 text-center">
            <div className="image-content">
              <img src={heroImage} alt="piano" />
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <button className="btn-custom pr-4 pl-4" onClick={handleClick}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
