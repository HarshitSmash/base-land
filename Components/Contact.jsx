import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="roadmap" class="" style={{ backgroundColor: "black" }}>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 offset-lg-2">
            <div class="title_default_light title_border text-center">
              <h4
                class="animation"
                style={{ fontSize: "40px" }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Roadmap
              </h4>
            </div>
            <div
              style={{
                margin: "0 auto",
                display: "flex",
              }}
            >
              <img src={`assets/images/mobile_app3.png`} alt="service_icon1" />
              <div
                style={{
                  paddingLeft: "100px",
                  fontWeight: "bolder",
                  fontSize: "30px",
                  color: "yellow",
                  flex: 1,
                }}
              >
                <>Phase 1: Concept and Planning</>
                <br />
                <div style={{ paddingTop: "10px" }}>
                  Phase 2: Initial Development
                </div>
                <br />
                <div style={{ paddingTop: "10px" }}>
                  Phase 3: Pre-Launch Activities
                </div>
                <br />
                <div style={{ paddingTop: "10px" }}>Phase 4: Token Launch</div>
                <br />
                <div style={{ paddingTop: "10px" }}>
                  Phase 5: Post-Launch Development
                </div>
                <br />
                <div style={{ paddingTop: "10px" }}>
                  Phase 6: Community and Governance/Research
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
