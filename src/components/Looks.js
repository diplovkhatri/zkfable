import React from "react";
import { Container, Card } from "react-bootstrap";
import look1 from "./look1.png";
import look2 from "./look2.png";
import look3 from "./look3.png";
import look4 from "./look4.png";

const Looks = () => {
  return (
    <Container fluid>
      <div className="row">
        <div className="font1 col-sm-12 col-lg-12 col-md-12 col-xm-12 bg-black text-white fw-bold fs-2 p-4">
          HAVE A LOOK AT THE FABLE'S
        </div>
        <div className="col-sm-12">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "13rem", border: "none" }}>
                <Card.Img
                  src={look1}
                  style={{
                    background: "gray",
                    border: "none"
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "black",
                    color: "white"
                  }}
                ></Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "13rem", border: "none" }}>
                <Card.Img
                  src={look2}
                  style={{
                    background: "gray",
                    border: "none"
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "black",
                    color: "white"
                  }}
                ></Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "13rem", border: "none" }}>
                <Card.Img
                  src={look3}
                  style={{
                    background: "gray",
                    border: "none"
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "black",
                    color: "white"
                  }}
                ></Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "13rem", border: "none" }}>
                <Card.Img
                  src={look4}
                  style={{
                    background: "gray",
                    border: "none"
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "black",
                    color: "white"
                  }}
                ></Card.Body>
              </Card>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Looks;
