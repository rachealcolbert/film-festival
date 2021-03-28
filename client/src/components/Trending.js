import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

const styles = { height: 600, width: "20rem" };


const Trending = () => {
  return (
    <Container>
      <RBCarousel className="carousel-fade" version={4}>
        <div style={{ ...styles }}>
          <div className="carousel-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.comingsoon.net/assets/uploads/gallery/zack-snyders-justice-league/jl1.jpg"
              />
              <Card.Body>
                <Card.Title><h3>Justice League</h3></Card.Title>
                <Button variant="info">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ ...styles  }}>
          <div className="carousel-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://lumiere-a.akamaihd.net/v1/images/au_movie_disney_rayaandthelastdragon_forest_poster_6fd05ff4.jpeg?region=0%2C0%2C540%2C810"
            />
            <Card.Body>
              <Card.Title>
                  <h3>Raya and the Last Dragon</h3>
              </Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div style={{ ...styles }}>
          <div className="carousel-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/max/2800/0*-MvxEoc6qoGSPI8V.jpg"
            />
            <Card.Body>
              <Card.Title><h3>The Little Things</h3></Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div style={{ ...styles }}>
          <div className="carousel-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cps-static.rovicorp.com/2/Open/A24/Program/39618110/_derived_jpg_q90_500x500_m0/Minari_New_PA_27_1610944300713_0.jpg"
            />
            <Card.Body>
              <Card.Title><h3>Minari</h3></Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div style={{ ...styles }}>
          <div className="carousel-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.riponlibrary.org/sites/riponlibrary.org/files/promising%20young%20woman.jpg"
            />
            <Card.Body>
              <Card.Title><h3>Promising Young Woman</h3></Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          </div>
        </div>
      </RBCarousel>
    </Container>
  );
};

export default Trending;
