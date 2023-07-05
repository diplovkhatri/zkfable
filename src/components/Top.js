import React from "react";
import logo from "./logo.png";

const Top = () => {
  return (
    <>
      <nav
        class="navbar"
        style={{
          borderTop: "0px",
          borderLeft: "0px",
          borderRight: "0px",
          boxShadow: "0 4px 2px -2px gray"
        }}
      >
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            zkFable
          </a>
        </div>
      </nav>
    </>
  );
};

export default Top;
