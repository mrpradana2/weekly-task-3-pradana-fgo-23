const boxCard = document.querySelector("#list-movies .box-card");

async function getDataMovies() {
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
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    // const urlDetails =
    //   "https://api.themoviedb.org/3/movie/950396?language=en-US";
    const response = await fetch(url, options);
    const dataMovies = await response.json();
    // const responseDetail = await fetch(urlDetails, options);
    // const detailMovies = await responseDetail.json();

    console.log(dataMovies);
    const movies = dataMovies.results;
    for (let i = 0; i < 4; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      if (i === 0 || i === 1) {
        card.classList.add("recomended");
      }
      let imgCard = document.createElement("div");
      imgCard.classList.add("img-card");
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/` + movies[i].poster_path
      );
      img.setAttribute("alt", "img-card");
      let anchor = document.createElement("a");
      anchor.setAttribute("href", "./details.html");
      anchor.setAttribute("data-id", movies[i].id);
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.textContent = "Details";
      anchor.append(button);
      let anchor2 = document.createElement("a");
      anchor2.setAttribute("href", "./modal-order-page.html");
      anchor2.setAttribute("data-id", movies[i].id);
      let button2 = document.createElement("button");
      button2.setAttribute("type", "button");
      button2.textContent = "Buy Ticket";
      anchor2.insertAdjacentElement("beforeend", button2);
      imgCard.insertAdjacentElement("beforeend", img);
      imgCard.insertAdjacentElement("beforeend", anchor);
      imgCard.insertAdjacentElement("beforeend", anchor2);
      let h1 = document.createElement("h1");
      h1.textContent = movies[i].title;
      let genreBox = document.createElement("div");
      genreBox.classList.add("genre-box");

      const genres = movies[i].genre_ids;
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
    }
  } catch (error) {
    if (error instanceof Error) console.log(error);
  }
}

getDataMovies();

const boxCardUpcoming = document.querySelector("#upcoming-movies .box-card");

async function getDataMoviesUpcoming() {
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
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    const response = await fetch(url, options);
    const dataMovies = await response.json();

    console.log("ok");
    console.log(dataMovies);
    console.log("ok");
    const movies = dataMovies.results;
    for (let i = 0; i < 4; i++) {
      let card = document.createElement("div");
      card.classList.add("card");
      if (i === 0 || i === 1) {
        card.classList.add("recomended");
      }
      let imgCard = document.createElement("div");
      imgCard.classList.add("img-card");
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/` + movies[i].poster_path
      );
      img.setAttribute("alt", "img-card");
      let anchor = document.createElement("a");
      anchor.setAttribute("href", "./details.html");
      anchor.setAttribute("data-id", movies[i].id);
      let button = document.createElement("button");
      button.setAttribute("type", "button");
      button.textContent = "Details";
      anchor.append(button);
      let anchor2 = document.createElement("a");
      anchor2.setAttribute("href", "./modal-order-page.html");
      anchor2.setAttribute("data-id", movies[i].id);
      let button2 = document.createElement("button");
      button2.setAttribute("type", "button");
      button2.textContent = "Buy Ticket";
      anchor2.insertAdjacentElement("beforeend", button2);
      imgCard.insertAdjacentElement("beforeend", img);
      imgCard.insertAdjacentElement("beforeend", anchor);
      imgCard.insertAdjacentElement("beforeend", anchor2);
      let h1 = document.createElement("h1");
      h1.textContent = movies[i].title;
      let h2 = document.createElement("h2");
      h2.textContent = movies[i].release_date;
      let genreBox = document.createElement("div");
      genreBox.classList.add("genre-box");

      const genres = movies[i].genre_ids;
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
      card.insertAdjacentElement("beforeend", h2);
      card.insertAdjacentElement("beforeend", genreBox);
      boxCardUpcoming.insertAdjacentElement("beforeend", card);
    }
  } catch (error) {
    if (error instanceof Error) console.log(error);
  }
}

getDataMoviesUpcoming();
