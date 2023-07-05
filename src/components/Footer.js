import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4 mt-5 bg-black text-white"
    style={{
      borderTop: "1px solid gray"
    }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-5 mt-md-0 mt-3">
          <h5
            className=" font1"
            style={{
              fontSize: "64px"
            }}
          >
            FABLE
          </h5>
          <p>
            FABLE is a digital art collection and global community of
            creators,developers, entrepreneurs,athletes,artists, experimenters
            and innovators.
          </p>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <div className="row d-flex justify-content-evenly fs-3 mt-5">
            <span>Follow Us</span>
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
                  <a href="https://discord.com/invite/pEBJZxUj" target="_blank">
                    <FaDiscord />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-md-0 mb-3 align-self-center">
          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white text-decoration-none">
                Copyright © 2023. Made with ♥ by Fable’s
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
