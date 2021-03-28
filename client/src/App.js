import React from "react";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./pages/Home";
import { ApolloProvider } from "@apollo/react-hooks";

import Profile from "./pages/Profile";
// import { setContext } from "@apollo/client/link/context";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/Search" component={Search} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
