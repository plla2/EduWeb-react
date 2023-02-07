import React from "react";
import "./Hero.css";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <div>
      <>
        <section className="hero">
          <div className="container">
            <div className="row">
              <Title
                subtitle="WELCOME TO Plla2 EDU"
                title="Best Online Education Expertise"
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, ducimus quo fuga eligendi, laboriosam quasi
                quisquam corporis expedita quaerat facilis animi alias. Aliquid
                impedit cumque omnis nam vitae fugit corporis!
              </p>
              <div className="button">
                <button className="primary-btn">
                  GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                </button>
                <button className="btn">
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="margin"></div>
      </>
    </div>
  );
};

export default Hero;
