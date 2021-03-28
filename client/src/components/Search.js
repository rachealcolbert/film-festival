import React, { useState, useEffect } from "react";
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
import { saveMovieIds, getSavedMovieIds } from "../utils/localStorage";

import { ADD_MOVIE } from "../utils/mutations";
import Auth from "../utils/auth";

import { useMutation } from "@apollo/client";

const Search = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [addMovie] = useMutation(ADD_MOVIE);

  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

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
        movieId: movies.id,
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

  const handleSaveMovie = async (movieId) => {
    const movieToSave = searchedMovies.find(
      (movies) => movies.movieId === movieId
    );


    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addMovie({
        variables: { movieId },
      });

      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <Form onSubmit={handleFormSubmit}>
          <InputGroup className="mb-3" fluid>
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
              <Container fluid>
                <Card style={{ width: "18rem" }} key={movie.title} fluid>
                  <Card.Img variant="top" src={movie.image} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Released in: {movie.year}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedMovieIds?.some(
                          (savedMovieId) => savedMovieId === movie.movieId
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveMovie(movie.movieId)}
                      >
                        {savedMovieIds?.some(
                          (savedMovieId) => savedMovieId === movie.movieId
                        )
                          ? "This movie has already been saved!"
                          : "Save this Movie!"}
                      </Button>
                    )}
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
