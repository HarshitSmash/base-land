import React from "react";

const Service = () => {
  const services = [
    {
      title: "Supply and Demand Valuation",
      discription:
        "The cost of $basedLAND is entirely determined by economic forces within the marketplace.",
    },
    {
      title: "Resource Allocation Shift",
      discription:
        "The economic structure of $basedLAND redirects capital into tangible terrestrial preservation initiatives.",
    },
    {
      title: "Collective Decision-Making",
      discription:
        "Individuals possessing $basedLAND tokens have the authority to participate in selecting beneficiary terrain initiatives for financial support.",
    },
    {
      title: "Lodging Incentive Mechanism",
      discription:
        "Owners can allocate their $basedLAND to generate $STAY, a resource utilized for securing temporary living arrangements.",
    },
  ];
  return (
    <section id="about" style={{ backgroundColor: "black" }}>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div class="text-center">
              <h4
                class="animation"
                style={{ color: "white" }}
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <div
                  style={{
                    fontWeight: "bold",
                    textShadow: "0 0 40px rgba(255, 255, 255, 0.75)",
                    fontSize: "2.5rem",
                  }}
                >
                  Features
                </div>
              </h4>
            </div>
          </div>
        </div>
        <div class="row">
          {services.map((service, i) => (
            <div key={i + 1} class="col-lg-4 col-md-6 col-sm-12">
              <div
                class="box_wrap text-center animation"
                data-animation="fadeInUp"
                data-animation-delay={`0.${i + 6}s`}
                style={{
                  rowGap: "1rem",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  src={`assets/images/service_icon${i + 1}.png`}
                  alt="service_icon1"
                />
                <h4>{service.title}</h4>
                <p>{service.discription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
