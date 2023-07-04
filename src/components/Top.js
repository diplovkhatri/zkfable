import React from "react";

const Top = () => {
  return (
    <>
      <nav
        class="navbar"
        style={{
          borderTop: "0px",
          borderLeft: "0px",
          borderRight: "0px",

          boxShadow: "1px 1px 1px gray"
        }}
      >
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            Navbar
          </a>
        </div>
      </nav>
    </>
  );
};

export default Top;
