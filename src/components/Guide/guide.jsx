import React from "react";
import "./guide.scss";
import notes from "../../assets/images/dayne-topkin-cB10K2ugb-4-unsplash.jpg";

const Guide = () => {
  return (
    <section className="guide">
      <div className="container">
        <div className="content flex">
          <h2>Your personalized learning Journey</h2>
          <p>iPiano gives you the platform and knodwledge to play.</p>
        </div>
        <div className="guide-steps flex">
          <div className="steps">
            <div className="step-1 step">
              <h1>
                1 <span>.</span>
              </h1>
              <h2>Start your account</h2>
              <p>
                You get 2 week free trail.We want you to experirnce the full
                experience.
              </p>
            </div>
            <div className="step-2 step">
              <h1>
                2 <span>.</span>
              </h1>
              <h2>
                Learn to
                <br /> learn
              </h2>
              <p>
                We give you free course that guides you through the process of
                learning
              </p>
            </div>
            <div className="step-3 step">
              <h1>
                3 <span>.</span>
              </h1>
              <h2>Use learning materials</h2>
              <p>
                Use our multimedi intercative videos,lectures. Unlimited
                everything!
              </p>
            </div>
            <div className="step-4 step">
              <h1>
                4 <span>.</span>
              </h1>
              <h2>Create Success Story</h2>
              <p>
                With access to online learning resources anyone can learn to
                play
              </p>
            </div>
          </div>
          <div className="image">
            <img src={notes} alt="Notes" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
