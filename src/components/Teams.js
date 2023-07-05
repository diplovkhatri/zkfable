import React from "react";
import { Container, Card } from "react-bootstrap";
import team1 from "./team1.png";

const Teams = () => {
  return (
    <Container fluid>
      <div className="row">
        <div
          className="col-sm-12 col-lg-12 col-md-12 col-xm-12 bg-black text-white fw-bold fs-1 p-4"
          style={{
            fontFamily: "Chelsea Market"
          }}
        >
          THE TEAM
        </div>
        <div className="col-sm-12">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-3 col-sm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img
                  src={team1}
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
                >
                  <Card.Text>
                    Alex Pega
                    <br />
                    Project Lead
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img
                  src={team1}
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
                >
                  <Card.Text>
                    Sam Pega
                    <br />
                    Developer
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img
                  src={team1}
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
                >
                  <Card.Text>
                    Sam Pega
                    <br />
                    Developer
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xm-12 bg-black d-flex justify-content-center">
              <Card style={{ width: "18rem", border: "none" }}>
                <Card.Img
                  src={team1}
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
                >
                  <Card.Text>
                    Sam Pega
                    <br />
                    Developer
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Teams;
