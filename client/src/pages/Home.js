import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h2>Discover millions of movies and TV shows. Explore now.</h2>
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search by movie title"
            aria-label="Search by Movie"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
};

export default Home;
