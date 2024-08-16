import React from "react";

const About = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="pb-2 border-bottom text-center">
          <a id="about">About Us</a>
        </h2>
        <div className="row featurette">
          <div className="col-md-7">
            <h3 className="featurette-heading fw-normal lh-1 pt-3">
              Welcom to Interio Techo:
              <span className="text-body-secondary">Owner Talks</span>
            </h3>
            <p className="lead pt-3">
              As the owner of Interio Techo, I’m thrilled to welcome you to a
              space where innovation meets everyday life. Our goal is to provide
              you with the latest and greatest in tech, from state-of-the-art
              smartphones and powerful laptops to smart home devices and
              essential accessories. We understand that technology plays a
              crucial role in your daily life, and we're here to ensure you have
              access to the tools that keep you connected, productive, and
              entertained. In this ever-evolving digital world, we are committed
              to helping you stay ahead of the curve and enhance your lifestyle
              with the best tech solutions available.
            </p>
          </div>
          <div className="col-md-5 pt-3">
            <img
              src="../images/owner.jpg"
              alt=""
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-4 ">
            <div className="text-center py-lg-5 p-4  ">
              <div className="mb-4">
                <i className=" bi bi-people-fill text-primary fs-1 "></i>
              </div>
              <div>
                <h4>Expert Team</h4>
                <p className="mb-0">
                  Vivamus eget neque lacus. Pellentesque egauris ex.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center py-lg-5 p-4">
              <div className="mb-4">
                <i className="bi bi-trophy-fill text-primary fs-1"></i>
              </div>
              <div>
                <h4>Award winning agency</h4>
                <p className="mb-0">
                  Lorem ipsum, dolor sit amet consectetur elitorceat .
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center py-lg-5 p-4">
              <div className="mb-4">
                <i className="bi bi-stars text-primary fs-1 "></i>
              </div>
              <div>
                <h4>10 Year Exp.</h4>
                <p className="mb-0">
                  Pellen tesque eget, mauris lorem iupsum neque lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
