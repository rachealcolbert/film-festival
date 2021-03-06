export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const addMovie = (movieData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movieData),
  });
};

export const searchMovies = (query) => {
  return fetch(`http://www.omdbapi.com/?apikey=b7b6ed72&s=${query}`);
};

export const trendingMovies = async () => {
  return fetch(`http://api.themoviedb.org/3/movie/popular?api_key=3e6ec8398d25afcf36186110b6ac07ba`)
};
