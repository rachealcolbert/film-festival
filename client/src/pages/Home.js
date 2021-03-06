/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import {
  Button,
  Jumbotron,
  Card,
  Container,
  CardColumns,
} from "react-bootstrap";
import Search from "../components/Search";

import { SAVE_MOVIE } from "../utils/mutations";
import { useMutation } from "@apollo/client";

import {
  searchMovies,
  trendingMovies as fetchTrendingMovies,
} from "../utils/API";
import Auth from "../utils/auth";
import { saveMovieIds, getSavedMovieIds } from "../utils/localStorage";

const Home = () => {
  //   const { loading, data, error } = useQuery(GET_MOVIES);

  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
  console.log("trendingMovies: ", trendingMovies);
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);

  useEffect(() => {
    return () => saveMovieIds(savedMovieIds);
  });

  useEffect(() => {
    fetchTrendingMovies().then((response) =>
      response.json().then((data) => setTrendingMovies(data.results))
    );
  }, []);

  const handleFormSubmit = async (event) => {
    console.log("handleFormSubmit", searchInput);
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchMovies(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { Search: movies } = await response.json();
      const movieData = movies.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        image: movie.Poster,
    
      }));

      console.log("SearchedMovies", movieData);

      setSearchedMovies(movieData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveMovie = async (movieId) => {
    const movieToSave = searchedMovies.find(
      (movie) => movie.movieId === movieId
    );

    console.log("movieToSave: " + JSON.stringify(movieToSave));

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(JSON.stringify(movieToSave));
      const { movieData } = await saveMovie({
        variables: { input: movieToSave },
      });

      if (error) {
        throw new Error("Something went wrong");
      }

      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <Jumbotron fluid>
        <h2>Discover millions of movies. Search now!</h2>
        <Search />
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
                key={movie.id}
                bg="info"
                text="white"
                className="text-center p-3"
              >
                {movie.image ? (
                  <Card.Img
                    src={movie.image}
                    alt={`The cover for ${movie.title}`}
                    variant="top"
                  />
                ) : null}

                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p> Year released: {movie.year}</p>
                  {/*<img src={movie.image} style={{ width: "100%" }} alt={movie.title} />*/}

                  {/* {Auth.loggedIn() && ( */}
                  <Button
                    className="btn-block btn-light"
                    disabled={savedMovieIds?.some(
                      (savedMovieId) => savedMovieId === movie.movieId
                    )}
                    onClick={() => handleSaveMovie(movie.movieId)}
                  >
                    {savedMovieIds?.some(
                      (savedMovieId) => savedMovieId === movie.movieId
                    )
                      ? "This movie has already been saved!"
                      : "Save this Movie!"}
                    {movie.movieId}
                  </Button>
                  {/* )} */}
                </Card.Body>
              </Card>
            );
          })}
          {/* <pre>{JSON.stringify(data || null, null, 2)}</pre> */}
        </CardColumns>
      </Container>

      <Container bg="dark">
        <h3> Top 3 Trending Movies</h3>
        <CardColumns>
          {trendingMovies.slice(0, 3).map((movie) => {
            return (
              <Card
                key={movie.id}
                bg="info"
                text="white"
                className="text-center p-3"
                style={{}}
              >
                {movie.poster_path ? (
                  <Card.Img
                    src={
                      "https://image.tmdb.org/t/p/original" + movie.poster_path
                    }
                    alt={`The cover for ${movie.title}`}
                    variant="top"
                  />
                ) : null}

                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>

                  {/* {Auth.loggedIn() && ( */}
                  <Button
                    className="btn-block btn-light"
                    disabled={savedMovieIds?.some(
                      (savedMovieId) => savedMovieId === movie.movieId
                    )}
                    onClick={() => handleSaveMovie(movie.movieId)}
                  >
                    {savedMovieIds?.some(
                      (savedMovieId) => savedMovieId === movie.movieId
                    )
                      ? "This movie has already been saved!"
                      : "Save this Movie!"}
                  </Button>
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
