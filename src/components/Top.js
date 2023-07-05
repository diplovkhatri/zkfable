import React from "react";
import logo from "./logo.png";
import { Container } from "react-bootstrap";

const Top = () => {
  return (
    <Container>
      <nav
        class="navbar"
        style={{
          borderTop: "0px",
          borderLeft: "0px",
          borderRight: "0px",
          boxShadow: "0 4px 2px -2px gray"
        }}
      >
        <div
          class="container"
          style={{
            height: "50px"
          }}
        >
          <a class="navbar-brand text-white d-flex" href="#">
            <img
              src={logo}
              alt=""
              width="35"
              height="45"
              class="d-inline-block"
              style={{
                marginBottom: "-45px"
              }}
            />
            <p
              className="fs-3 mt-2"
              style={{
                marginLeft: "5px",
                marginBottom: "-3px"
              }}
            >
              Fable
            </p>
          </a>
        </div>
      </nav>
    </Container>
  );
};

export default Top;
