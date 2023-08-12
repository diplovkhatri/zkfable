import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa6";
import { Fade } from "react-reveal";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4 mt-5 text-black"
    style={{
      borderTop: "1px solid gray"
    }}
  >
    <div className="container-fluid text-center text-md-left">
      <Fade left delay={500}>
        <div className="row">
          <Fade left big delay={900}>
            <div
              className="col-md-4 mt-md-0 mt-3"
              style={{
                color: "#BC4E71"
              }}
            >
              <h5
                className=" font1"
                style={{
                  fontSize: "64px",
                  color: "#BC4E71"
                }}
              >
                FABLE
              </h5>
              <p>FABLE FOR LOVED ONE FABLE FOR EVERYONE~</p>
            </div>
          </Fade>
          <Fade left big delay={600}>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="row d-flex justify-content-evenly fs-3 fw-bold ">
                <span
                  className="font1"
                  style={{ color: "#BC4E71", fontSize: "36px" }}
                >
                  Follow Us
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
                      fontSize: "42px",
                      marginTop: "-10px",
                      padding: "5px"
                    }}
                  >
                    <li className="col">
                      <a href="https://twitter.com/fablenft_" target="_blank">
                        <FaTwitter />
                      </a>
                    </li>
                    <li className="col">
                      <a href="https://discord.gg/VNs69yBQ" target="_blank">
                        <FaDiscord />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
          <Fade left big delay={300}>
            <div className="col-md-4 mb-md-0 mb-3 align-self-center">
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-black text-decoration-none">
                    Copyright © 2023. Made with ♥ by Fable’s
                  </a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  </footer>
);

export default Footer;
