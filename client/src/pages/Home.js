import React from "react";
import { Button, Jumbotron, Card, Container, CardGroup } from "react-bootstrap";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid>
        <h2>Discover millions of movies. Search now!</h2>
        <Search />
      </Jumbotron>
      <Container bg="dark">
        <h3> Top 5 Trending Movies</h3>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.comingsoon.net/assets/uploads/gallery/zack-snyders-justice-league/jl1.jpg"
            />
            <Card.Body>
              <Card.Title>Justice League</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://lumiere-a.akamaihd.net/v1/images/au_movie_disney_rayaandthelastdragon_forest_poster_6fd05ff4.jpeg?region=0%2C0%2C540%2C810"
            />
            <Card.Body>
              <Card.Title>Raya and the Last Dragon</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/max/2800/0*-MvxEoc6qoGSPI8V.jpg"
            />
            <Card.Body>
              <Card.Title>The Little Things</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cps-static.rovicorp.com/2/Open/A24/Program/39618110/_derived_jpg_q90_500x500_m0/Minari_New_PA_27_1610944300713_0.jpg"
            />
            <Card.Body>
              <Card.Title>Minari</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.riponlibrary.org/sites/riponlibrary.org/files/promising%20young%20woman.jpg"
            />
            <Card.Body>
              <Card.Title>Promising Young Woman</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Home;
