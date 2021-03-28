export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const searchMovies = (query) => {
  return fetch(`http://www.omdbapi.com/?apikey=b7b6ed72&s=${query}`);
};

export const trendingMovies = async () => {
  return fetch(`http://api.themoviedb.org/3/movie/popular?api_key=3e6ec8398d25afcf36186110b6ac07ba`)
};
