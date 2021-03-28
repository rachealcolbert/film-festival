import React from "react";
import {
  Jumbotron,
  Container,
} from "react-bootstrap";
import Search from '../components/Search';
import Trending from "../components/Trending";

const Home = () => {

  return (
    <div>
      <Jumbotron fluid>
        <h2>Discover millions of movies. Search now!</h2>
        <Search />
      </Jumbotron>
      <Container bg="dark">
        <h2> Top 5 Trending Movies</h2>
      <Trending />
      </Container>
    </div>
  );
};

export default Home;
