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
import Auth from "../utils/auth";

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
      <Jumbotron>
        <h2>Discover millions of movies.</h2>
        <h4> Search now and save the ones you like!</h4>
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
                <Button variant="outline-info" type="submit">
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
            ? `Viewing ${searchedMovies.length} movies:`
            : ""}
        </h2>
        <CardColumns>
          {searchedMovies.map((movie) => {
            return (
              <Card
                key={movie.title}
                bg="info"
                text="white"
                className="text-center p-3"
              >
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p> Year released: {movie.year}</p>
                  <img src={movie.image} style={{ width: "100%" }} />

                  {/* {Auth.loggedIn() && ( */}
                  <Button className="btn-block btn-light">Save Movie</Button>
                  {/* )} */}
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
