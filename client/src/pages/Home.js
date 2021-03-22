import React from "react";
import { InputGroup, FormControl, Button, Jumbotron } from "react-bootstrap";

import { searchMovies } from "../utils/API";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../utils/queries";

const SearchMovies = () => {};

const Home = () => {
  const { loading, data, error } = useQuery(GET_MOVIES);
  console.log(data);
  return (
    <div>
      <Jumbotron>
        <h2>Discover millions of movies and TV shows. Explore now.</h2>
        <div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search by movie title"
              aria-label="Search by Movie"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-danger">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
