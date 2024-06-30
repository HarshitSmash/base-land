import React from "react";

const About = () => {
  return (
    <section id="tokenomics" style={{ backgroundColor: "black" }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="text-center" style={{ color: "white" }}>
              <h4
                class="animation"
                style={{ color: "white", fontWeight: "bold", padding: "20px" }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#333",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Tokenomics
                </div>
              </h4>
            </div>
            <div>
              <img
                src={`assets/images/baseLand-tokenomics.png`}
                alt="service_icon1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
