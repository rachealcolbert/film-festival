import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { searchMovies } from '../utils/API';
import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client'
import { SAVE_MOVIE } from '../utils/mutations'


const SearchMovies = () => {
  //creating state to hold the returned movie api data
  const [searchedMovies, setSearchedMovies] = useState([]);
  //create state for holding our search field data 
  const [searchInput, setSearchInput] = useState('');

  //creating state to hold saved movieID values
  const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());
  const [saveMovie, { error }] = useMutation(SAVE_MOVIE);
}