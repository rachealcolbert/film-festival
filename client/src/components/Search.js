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
import { SAVE_MOVIE } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

const Search = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

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

    const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);
    console.log(movieToSave);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveMovie({
        variables: {input: movieToSave},
      })

      console.log(data)
      
      if (error) {
        throw new Error('you\'ve made a booboo')
        
      }
      

      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
      console.log(setSavedMovieIds)
    } catch (err) {
      console.error(err)

    }
  }

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
                      disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveMovie(movie.movieId)}>
                      {savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)
                        ? 'This movie has already been saved!'
                        : 'Save this Movie!'}
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
