const boxCard = document.querySelector("#list-movies .box-card");

async function getDataMovie() {
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDI4MmIyYjM3NDFiZjdlYzNjNGM0MTgxZWFjODY1NCIsIm5iZiI6MTc0MTM5OTY5Ny4yODQ5OTk4LCJzdWIiOiI2N2NiYTY5MTdjOTY3ZTA0ZDU1Yjk4MGQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M00nqUeo-tWLfy6TC1qq_bjOGAmFMOsgcV1p-0tHfME",
      },
    };
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(response.statusText);
    const dataMovies = await response.json();
    console.log(dataMovies);
    const movies = dataMovies.results;
    movies.forEach((movie, index) => {
      let card = document.createElement("div");
      card.classList.add("card");
      if (index === 0 || index === 1 || index === 2 || index === 3) {
        card.classList.add("recomended");
      }
      let imgCard = document.createElement("div");
      imgCard.classList.add("img-card");
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      );
      img.setAttribute("alt", "img-card");
      let anchor = document.createElement("a");
      anchor.setAttribute("href", "./details.html");
      anchor.setAttribute("data-id", movie.id);
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.textContent = "Details";
      anchor.append(button);
      let anchor2 = document.createElement("a");
      anchor2.setAttribute("href", "./order-page.html");
      anchor2.setAttribute("data-id", movie.id);
      let button2 = document.createElement("button");
      button2.setAttribute("type", "button");
      button2.textContent = "Buy Ticket";
      anchor2.insertAdjacentElement("beforeend", button2);
      imgCard.insertAdjacentElement("beforeend", img);
      imgCard.insertAdjacentElement("beforeend", anchor);
      imgCard.insertAdjacentElement("beforeend", anchor2);
      let h1 = document.createElement("h1");
      h1.textContent = movie.title;
      let genreBox = document.createElement("div");
      genreBox.classList.add("genre-box");
      const genres = movie.genre_ids;
      genres.forEach(async (genre) => {
        const responseDetail = await fetch(
          `https://api.themoviedb.org/3/movie/${genre}?language=en-US`,
          options
        );
        const responseGenreMovies = await responseDetail.json();
        const genreMovies = responseGenreMovies.genres;

        genreMovies.forEach((genreMovie) => {
          let genre = document.createElement("div");
          genre.classList.add("genre");
          genre.textContent = genreMovie.name;
          genreBox.insertAdjacentElement("beforeend", genre);
        });
      });
      card.insertAdjacentElement("beforeend", imgCard);
      card.insertAdjacentElement("beforeend", h1);
      card.insertAdjacentElement("beforeend", genreBox);
      boxCard.insertAdjacentElement("beforeend", card);
    });
  } catch (error) {
    if (!(error instanceof Error)) console.log(error.message);
  }
}

getDataMovie();
