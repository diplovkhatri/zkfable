import React from "react";
import { Container, Button } from "react-bootstrap";
import "../App.css";
import Top from "./Top";
import intro1 from "../components/introimage/intro1.png";
import intro2 from "../components/introimage/intro2.png";
import intro3 from "../components/introimage/intro3.png";
import intro4 from "../components/introimage/intro4.png";
import intro5 from "../components/introimage/intro5.png";
import { Bounce, Fade } from "react-reveal";

const Intro = () => {
  return (
    <Container
      fluid
      style={{
        top: "15%",
        bottom: "25%",
        background: "rgba(248, 202, 182, 0.20)"
      }}
    >
      <Top />
      <div className="row">
        <span
          className="col-12 col-sm-12 col-md-12 col-lg-12 fs-1 font1 pt-4"
          style={{
            // fontSize: "96px",
            color: "#BC4E71",
            textShadow: "3px 3px 5px violet"
          }}
        >
          The FABLE
        </span>
        <span
          className="col-xm-12 col-sm-12 col-md-12 col-lg-12 fs-5 d-flex flex-column justify-content-center justify-self-center"
          style={{
            color: "#721935"
          }}
        >
          FABLE for loved one, FABLE for everyone
          <div className="d-flex justify-content-center justify-self-center">
            <hr
              className="w-50"
              style={{
                height: "5px",
                background:
                  "linear-gradient(316deg, rgba(255, 255, 255, 1) 30%, #781333 50%)"
              }}
            />
          </div>
        </span>
      </div>

      {/* button */}
      <Bounce right>
        <div className="container">
          <div className="mt-3">
            <span
              className="d-flex justify-content-center justify-self-center"
              style={{
                font: "text-uppercase",
                fontFamily: "Chelsea Market"
              }}
            >
              <Button
                variant="outline-danger"
                className="row w-50 w-sm-25 d-flex text-black"
                href="https://omnisea.xyz/wfNp8eK"
                target="_blank"
              >
                <div
                  className="col-12 text-center fs-3 w-100 h-100 fw-bold"
                  style={{
                    letterSpacing: "0.6rem",
                    padding: "0px"
                  }}
                >
                  <Fade top>MINT</Fade>
                </div>
              </Button>
            </span>
          </div>
        </div>
      </Bounce>
      {/* intro images */}
      <div
        className="d-flex justify-content-between overflow-hidden mt-5 pt-5"
        style={{
          marginLeft: "-12px",
          marginRight: "-12px",
          padding: "0px"
        }}
      >
        <img src={intro1} alt="" />
        <img src={intro2} alt="" />
        <img src={intro3} alt="" />
        <img src={intro4} alt="" />
        <img src={intro5} alt="" />
      </div>
    </Container>
  );
};

export default Intro;
