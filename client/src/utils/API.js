export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const searchMovies = (token) => {
  return fetch("http://api.trakt.tv/movies/trending", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "trakt-api-key":
        "aabb088e28dc563cb354152b1b4b2bc20055c9aa64c159720e32c7274692e560",
      "trakt-api-version": 2,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json.map((o) => o.movie));
      return json.map((o) => o.movie);
    });
};

// export const searchMovies = (query) => {
//   return fetch("https://api.trakt.tv");
// };
