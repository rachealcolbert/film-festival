import React from "react";
import { Jumbotron } from "react-bootstrap";
import Search from "../components/Search"

const Home = () => {

  return (
    <div>
      <Jumbotron>
        <h2>Discover millions of movies. Search now!</h2>
        <Search />
      </Jumbotron>
    </div>
  );
};

export default Home;
