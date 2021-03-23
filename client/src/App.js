import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";


import Home from "./pages/Home";
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Profile from "./pages/Profile";
import Signup from './pages/Signup';


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />

              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;
