import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Card,
  CardColumns,
  Container,
  Form,
} from "react-bootstrap";
import { searchMovies } from "../utils/API";

const Search = () => {
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
        image: movie.Poster,
      }));

      setSearchedMovies(movieData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
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
      <Container>
        <CardColumns>
          {searchedMovies.map((movie) => {
            return (
              <Container>
                <Card style={{ width: "18rem" }} key={movie.title}>
                  <Card.Img variant="top" src={movie.image} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Released in: {movie.year}</Card.Text>
                    <Button variant="dark">Save to My Movies</Button>
                  </Card.Body>
                </Card>
              </Container>
            );
          })}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Search;
