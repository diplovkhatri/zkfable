import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa6";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 bg-black text-white">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-5 mt-md-0 mt-3">
          <h5 className=" font1">zkFABLE</h5>
          <p>
            zkFABLE is a digital art collection and global community of
            creators,developers, entrepreneurs,athletes,artists, experimenters
            and innovators.
          </p>
        </div>

        <div className="col-md-3 mb-md-0 mb-3 align-self-center">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled row  fs-1 d-flex justify-content-evenly">
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
