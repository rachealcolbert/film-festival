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
