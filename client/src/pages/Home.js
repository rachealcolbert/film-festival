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
import CardInfo from "../components/Card";

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

      const { Search: movies } = await response.json();
      console.log(movies);
      const movieData = movies.map((movie) => ({
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster
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
              <Card style={{ width: "18rem" }} key={movie.title} border="dark">
                <Card.Img variant="top" src="" />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
<<<<<<< HEAD
                  <Card.Text>
                    <p> Year released: {movie.year}</p>
                  </Card.Text>
                  <Button variant="primary">See More</Button>
=======

                  <img src={movie.image} style={{ width: '100%' }} />
                  <p> Year released: {movie.year}</p>
>>>>>>> 1d4b5d1f65fdb6f77c787f7f98c6abba7642ca97
                </Card.Body>
              </Card>
            );
          })}
          <pre>{JSON.stringify(data || null, null, 2)}</pre>
        </CardColumns>
      </Container>
    </div>
  );
};

export default Home;
