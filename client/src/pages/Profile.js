import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";
import Auth from "../utils/auth";

import { removeMovieId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { REMOVE_MOVIE } from "../utils/mutations";

const Profile = () => {
  const { loading, data } = useQuery(GET_ME);
  console.log(data);
  const userData = data?.me || {};
  const [removeMovie] = useMutation(REMOVE_MOVIE);

  const handleDeleteMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeMovieId({
        variables: { movieId },
      });

      removeMovieId(movieId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Viewing Saved Movies!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedMovies.length
            ? `Viewing ${userData.savedMovies.length} saved ${
                userData.savedMovies.length === 1 ? "movie" : "movies"
              }:`
            : "You have no saved Movies!"}
        </h2>
        <CardColumns>
          {userData.savedMovies.map((movie) => {
            return (
              <Container fluid>
                <Card style={{ width: "18rem" }} key={movie.title} fluid>
                  <Card.Img variant="top" src={movie.image} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Released in: {movie.year}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => handleDeleteMovie(movie.movieId)}
                    >
                      Delete movie from list!
                    </Button>
                  </Card.Body>
                </Card>
              </Container>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default Profile;
