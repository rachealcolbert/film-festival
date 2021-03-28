import React, { useState, useEffect } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Jumbotron,
  Card,
  CardColumns,
  Container,
  Form,
  CardGroup,
} from "react-bootstrap";


import { SAVE_MOVIE } from '../utils/mutations'
import { useMutation } from '@apollo/client'

import { searchMovies } from "../utils/API";
import Auth from "../utils/auth";
import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';

const Home = () => {
  //   const { loading, data, error } = useQuery(GET_MOVIES);


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

      setSearchedMovies(movieData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveMovie = async (movieId) => {

    const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {

      const { movieData } = await saveMovie({
        variables: { input: movieToSave }
      });

      if (error) {
        throw new Error('Something went wrong');
      }




      setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);
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
                key={movie.id}
                bg="info"
                text="white"
                className="text-center p-3"
              >

                {movie.image ? (
                  <Card.Img src={movie.image} alt={`The cover for ${movie.title}`} variant='top' />
                ) : null}

                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <p> Year released: {movie.year}</p>
                  {/*<img src={movie.image} style={{ width: "100%" }} alt={movie.title} />*/}

                  {/* {Auth.loggedIn() && ( */}
                  <Button className="btn-block btn-light" disabled={savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)}
                    onClick={() => handleSaveMovie(movie.movieId)}>
                    {savedMovieIds?.some((savedMovieId) => savedMovieId === movie.movieId)
                      ? 'This movie has already been saved!'
                      : 'Save this Movie!'}</Button>
                  {/* )} */}
                </Card.Body>
              </Card>
            );
          })}
          {/* <pre>{JSON.stringify(data || null, null, 2)}</pre> */}
        </CardColumns>
      </Container>
      <Container bg="dark">
        <h3> Top 5 Trending Movies</h3>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.comingsoon.net/assets/uploads/gallery/zack-snyders-justice-league/jl1.jpg"
            />
            <Card.Body>
              <Card.Title>Justice League</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://lumiere-a.akamaihd.net/v1/images/au_movie_disney_rayaandthelastdragon_forest_poster_6fd05ff4.jpeg?region=0%2C0%2C540%2C810"
            />
            <Card.Body>
              <Card.Title>Raya and the Last Dragon</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://miro.medium.com/max/2800/0*-MvxEoc6qoGSPI8V.jpg"
            />
            <Card.Body>
              <Card.Title>The Little Things</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://cps-static.rovicorp.com/2/Open/A24/Program/39618110/_derived_jpg_q90_500x500_m0/Minari_New_PA_27_1610944300713_0.jpg"
            />
            <Card.Body>
              <Card.Title>Minari</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.riponlibrary.org/sites/riponlibrary.org/files/promising%20young%20woman.jpg"
            />
            <Card.Body>
              <Card.Title>Promising Young Woman</Card.Title>
              <Button variant="info">Learn More</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Home;
