import React from "react";
import { Container } from "react-bootstrap";
import { FaTwitter, FaDiscord } from "react-icons/fa6";

const Intro = () => {
  return (
    <Container>
      <div className="row">
        <span className="col-xm-12 col-sm-12 col-md-12 col-lg-12 font1 pt-4">
          FABLE
        </span>
        <span
          className="col-xm-12 col-sm-12 col-md-12 col-lg-12 fs-4"
          style={{
            color: "#B4B4B4"
          }}
        >
          FABLE for loved one, FABLE for everyone
        </span>
        <p
          className="col-xm-12 col-sm-12 col-md-12 col-lg-12 fs-1 mt-5"
          style={{
            color: "#B1E193"
          }}
        >
          #1 NFT community on the internet
        </p>
      </div>

      <div className="container row">
        <p className="fs-3 col" style={{ marginTop: "-25px" }}>
          we are building a decentralized community for the people.
        </p>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-evenly fs-1 mt-5">
          <span
            style={{
              color: "#B1E193"
            }}
          >
            Join Our Community
          </span>
          <div
            className="d-flex justify-content-center"
            style={{
              marginTop: "-10px"
            }}
          >
            <ul
              className="list-unstyled row d-flex justify-content-between"
              style={{
                fontSize: "48px",
                marginTop: "-10px",
                padding: "5px"
              }}
            >
              <li className="col">
                <a href="#!">
                  <FaTwitter />
                </a>
              </li>
              <li className="col">
                <a href="#!">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
