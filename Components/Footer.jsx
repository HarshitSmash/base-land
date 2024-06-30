import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Footer = () => {
  const footerList = [
    "Cryptocash ICO",
    "How It Works",
    "Tokens",
    "FAQ",
    "Contact",
  ];
  return (
    <footer>
      <div
        style={{ backgroundColor: "black" }}
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/footer_bg.png"
      >
        <div style={{ backgroundColor: "black" }}>
          <div className="row justify-content-center ">
            {" "}
            {/* Added className="row justify-content-center" */}
            <div className="col-lg-4 col-md-12">
              <div
                style={{ paddingLeft: "3rem" }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <a href="#home_section" className="page-scroll">
                  {" "}
                  {/* Changed class to className */}
                  <h1 style={{ color: "white" }}>$baseLAND</h1>
                </a>
              </div>
              <div className="footer_desc">
                <p
                  style={{ paddingLeft: "3rem" }}
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  $baseLAND is a decentralized autonomous organization (DAO)
                  that aims to channel funding towards the conservation of real
                  land. $baseLAND holders can vote on which land projects will
                  receive funds. $baseLAND price is purely based on market
                  dynamics.
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 res_md_mt_30 res_sm_mt_20 "
              style={{ paddingRight: "20px" }}
            >
              <div className="newsletter_form" style={{ paddingRight: "0rem" }}>
                <h4
                  style={{ color: "white" }}
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Market Cap Potential
                </h4>
                <p
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                  style={{ marginBottom: "2rem", marginRight: "10rem" }}
                >
                  $baseLAND price is purely based on market dynamics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
