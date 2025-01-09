async function main(event) {
  event.preventDefault();
  const searchTerm = event.srcElement[0].value;
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=88992ddf&s=${searchTerm}`
  );
  const movieData = await movies.json();
  const movieSearchResults = movieData.Search;
  //   console.log(movieData);
  //   console.log(movieSearchResults);

  const searchResultsListEl = document.querySelector(".search__results--list");

  searchResultsListEl.innerHTML = movieSearchResults
    .filter((_movie, index) => index < 6)
    .map(
      (movie, index) =>
        index < 6 &&
        `<li class="search__result">
                <div class="search__result--content">
                    <img src="${movie.Poster}" alt="movie-poster" class="result__img">
                    <h2 class="result__title">${movie.Title}</h2>
                    <p class="result__release-year">${movie.Year}</p>
                </div>
            </li>`
    )
    .join("");
}
