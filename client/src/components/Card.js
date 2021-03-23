import React from "react";
import { Card, Button } from "react-bootstrap";

const CardInfo = () => {
  return (
    <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Harry Potter and the Philosophers Stone</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">See More</Button>
          </Card.Body>
        </Card>
    </div>
  );
};

export default CardInfo;