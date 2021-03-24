import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Jumbotron,
  Card,
  CardColumns,
  Container,
  Form,
} from "react-bootstrap";

import { searchMovies } from "../utils/API";
import { useQuery } from "@apollo/client";
import { GET_MOVIES } from "../utils/queries";

const Home = () => {
  //   const { loading, data, error } = useQuery(GET_MOVIES);
  //   console.log(data);

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchMovies(searchInput);
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const movieData = items.map((movie) => ({
        title: movie.title,
        year: movie.year,
      }));

      setSearchedMovies(movieData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Jumbotron>
        <h2>Discover millions of movies and TV shows. Search now.</h2>
        <div>
          <Form onSubmit={handleFormSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search by movie title"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                aria-label="Search by Movie"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-danger" type="submit">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </Jumbotron>
      <Container>
        <h2>
          {searchedMovies.length
            ? `Viewing ${searchedMovies.length} results:`
            : ""}
        </h2>
        <CardColumns>
          {searchedMovies.map((movie) => {
            return (
              <Card key={movie.title} border="dark">
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p> Year released: {movie.year}</p>
                </Card.Body>
              </Card>
            );
          })}
          {/* <pre>{JSON.stringify(data || null, null, 2)}</pre> */}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Home;
