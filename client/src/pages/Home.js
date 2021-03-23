import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Jumbotron,
  Card,
} from "react-bootstrap";

import { searchMovies } from "../utils/API";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../utils/queries";

const SearchMovies = () => {
  const [searchedMovies, getSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
};

const handleFormSubmit = async (event) => {
  event.preventDefualt();

  if (!searchInput) {
    return false;
  }

  try const response = await searchMovies
};

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
      <div>
        <pre>{JSON.stringify(data || null, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Home;
