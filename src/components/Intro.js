import React from "react";
import { Container } from "react-bootstrap";

const Intro = () => {
  return (
    <Container>
      <div className="row">
        <span className="fs-1 col-xm-12 col-sm-12 col-md-12 col-lg-12 font1 pt-4">
          THE zkFABLE
        </span>
        <p
          className="col-xm-12 col-sm-12 col-md-12 col-lg-12 fs-5"
          style={{
            color: "#B1E193"
          }}
        >
          #1 NFT community on the internet
        </p>
      </div>
      {/* <div className="container" style={{ width: "250px" }}>
        <div className="border border-2 border-white rounded-5 d-flex justify-content-evenly mt-4 pt-3">
          <p>Buy</p>
          <p
            style={{
              width: "2px",
              border: "2px solid white",
              height: "30px"
            }}
          ></p>
          <p>9.8</p>
        </div>
      </div> */}
      <div className="container pt-5 row">
        <p className="fs-6 col">
          we are building a decentralized community for the people by the people
          and the people
        </p>
      </div>
    </Container>
  );
};

export default Intro;
