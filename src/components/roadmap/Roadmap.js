import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal";
import RubberBand from "react-reveal/RubberBand";

const Roadmap = () => {
  return (
    <Container>
      <div className="row p-4">
        <div
          className="fs-1 my-4 fw-bold font1 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center"
          style={{
            color: "#BC4E71",
            textShadow: "5px 3px 5px violet"
          }}
        >
          <Fade top delay={300}>
            Roadmap
          </Fade>
        </div>
        {/* Phase 1 */}
        <Fade top big delay={500}>
          <div className=" my-5 col-12 col-lg-12 col-md-12 col-sm-12 text-black">
            <div className="row">
              <div
                className="fw-bold fs-1 col-12 col-lg-3 col-sm-3 col-md-4 d-flex justify-content-center align-items-center "
                style={{
                  padding: "0px 15px "
                }}
              >
                Phase 1
              </div>
              <div
                className="fw-semibold col-12 fs-4 col-lg-9 col-sm-9 col-md-8 text-black d-flex justify-self-start text-start"
                style={{
                  border: "3px solid #BC4E71",
                  borderRadius: "20px",
                  padding: "7px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <ul className="text-decoration-line-through">
                  <Fade top delay={500} duration={2000}>
                    <li>Launch DIscord and twitter</li>
                  </Fade>
                  <Fade top delay={700} duration={2000}>
                    <li>Chain Announcement</li>
                  </Fade>
                  <Fade top delay={900} duration={2000}>
                    <li>Lunch Phase 1 NFTs(Public mint)</li>
                  </Fade>
                  <Fade top delay={1100} duration={2000}>
                    <li>Collaboration with web3 projects</li>
                  </Fade>
                  <Fade top delay={1400} duration={2000}>
                    <li>Whitelist giveaway</li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
        {/* end Phase 1 */}

        {/* Phase 2 */}
        <Fade bottom big delay={1500}>
          <div className="col-12 text-black col-lg-12 col-md-12 col-sm-12 opacity-25">
            <div className="row">
              <div
                className="fw-bold  fs-1 col-12 col-lg-3 col-sm-3 col-md-4 d-flex justify-content-center align-items-center "
                style={{
                  padding: "0px 15px "
                }}
              >
                Phase 2
              </div>

              <div
                className="fw-semibold col-12 fs-4 col-lg-9 col-sm-9 col-md-8 text-black d-flex justify-self-start text-start"
                style={{
                  border: "3px solid #BC4E71",
                  borderRadius: "20px",
                  padding: "7px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <ul className="text-decoration-none">
                  <Fade top delay={1600}>
                    <li>MERCH STORE</li>
                  </Fade>
                  <Fade top delay={1900}>
                    <li>Plant treess</li>
                  </Fade>
                  <Fade top delay={2100}>
                    <li>Token launcher(fable meme coin)</li>
                  </Fade>
                  <Fade top delay={2300}>
                    <li>Let the world know about FABLE</li>
                  </Fade>
                  <Fade top delay={2500}>
                    <li>Giving back to the community</li>
                  </Fade>
                </ul>
              </div>
            </div>
          </div>
        </Fade>
        {/* end Phase 2 */}
        {/* Phase 3 */}
        <Fade bottom big delay={2500}>
          <div className="my-5 col-12 col-lg-12 col-md-12 col-sm-12 text-black opacity-25">
            <div className="row">
              <div
                className="fw-bold fs-1 col-12 col-lg-3 col-sm-3 col-md-4 d-flex justify-content-center align-items-center "
                style={{
                  padding: "0px 15px "
                }}
              >
                Phase 3
              </div>

              <div
                className="fw-semibold 
              col-12 fs-4 col-lg-9 col-sm-9 col-md-8 
              text-black h-
              d-flex justify-content-center align-items-center"
                style={{
                  border: "3px solid #BC4E71",
                  borderRadius: "20px",
                  padding: "7px",

                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <RubberBand delay={2800}>COMMING SOON</RubberBand>
              </div>
            </div>
          </div>
        </Fade>

        {/*end Phase 3*/}
      </div>
    </Container>
  );
};

export default Roadmap;
