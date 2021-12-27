const movies = require("./topMovies.json");

const titles = movies.map((movie) => movie.title);
const top10 = movies.filter((movie) => movie.rank <= 10);
const theMovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes("the")
);

console.log(theMovies);

console.log(movies.filter(movie => movie.rank <=10 && movietitle.toLowerCase().includes ("the"))