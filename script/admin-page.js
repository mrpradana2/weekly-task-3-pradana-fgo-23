async function getData() {
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
    const tbody = document.querySelector("tbody");
    movies.forEach((movie, index) => {
      const tr = document.createElement("tr");
      tdNo = document.createElement("td");
      tdNo.textContent = index + 1;
      const tdImg = document.createElement("td");
      const imgThumbnail = document.createElement("img");
      imgThumbnail.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      );
      //   imgThumbnail.append(tdImg);
      tdImg.insertAdjacentElement("beforeend", imgThumbnail);
      const tdTitle = document.createElement("td");
      tdTitle.textContent = movie.title;
      const tdGenre = document.createElement("td");
      const genres = movie.genre_ids;
      //   let genreText = "";
      genres.forEach(async (genre) => {
        const responseDetail = await fetch(
          `https://api.themoviedb.org/3/movie/${genre}?language=en-US`,
          options
        );
        const responseGenreMovies = await responseDetail.json();
        const genreMovies = responseGenreMovies.genres;
        genreMovies.forEach((genreMovie) => {
          //   genreText += `${genreMovie.name}, `;
          //   tdGenre.appendChild(genreMovie.name);
          tdGenre.insertAdjacentText("beforeend", `${genreMovie.name}, `);
        });
      });
      //   tdGenre.textContent = genreText;
      console.log(tdGenre);
      const tdRelease = document.createElement("td");
      tdRelease.textContent = movie.release_date;
      const tdRUntime = document.createElement("td");
      tdRUntime.textContent = movie.release_date;
      const tdAction = document.createElement("td");
      tdAction.classList.add("action");

      const btnEye = document.createElement("button");
      btnEye.setAttribute("type", "button");
      const imgEye = document.createElement("img");
      imgEye.setAttribute("src", "./assets/icons/eye-white.svg");
      imgEye.setAttribute("alt", "icon");
      btnEye.insertAdjacentElement("beforeend", imgEye);

      const btnEdit = document.createElement("button");
      btnEdit.setAttribute("type", "button");
      const imgEdit = document.createElement("img");
      imgEdit.setAttribute("src", "./assets/icons/Edit.svg");
      imgEdit.setAttribute("alt", "icon");
      btnEdit.insertAdjacentElement("beforeend", imgEdit);

      const btnDelete = document.createElement("button");
      btnDelete.setAttribute("type", "button");
      const imgDelete = document.createElement("img");
      imgDelete.setAttribute("src", "./assets/icons/Delete.svg");
      imgDelete.setAttribute("alt", "icon");
      btnDelete.insertAdjacentElement("beforeend", imgDelete);

      tdAction.insertAdjacentElement("beforeend", btnEye);
      tdAction.insertAdjacentElement("beforeend", btnEdit);
      tdAction.insertAdjacentElement("beforeend", btnDelete);

      tr.insertAdjacentElement("beforeend", tdNo);
      tr.insertAdjacentElement("beforeend", tdImg);
      tr.insertAdjacentElement("beforeend", tdTitle);
      tr.insertAdjacentElement("beforeend", tdGenre);
      tr.insertAdjacentElement("beforeend", tdRelease);
      tr.insertAdjacentElement("beforeend", tdRUntime);
      tr.insertAdjacentElement("beforeend", tdAction);

      tbody.insertAdjacentElement("beforeend", tr);
    });
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}

getData();
