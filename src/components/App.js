import { receiveFilms } from "../API.js";

const App = () => {
  const main = document.createElement("div");

  main.className = "App";
  main.innerHTML = `<main>
  <section class="section__content">
    <section class="banner">
      <h1 class="titulo">ANNE</h1>
      <p class="titulo__texto">
      Garota esperta, ativa, com uma imaginação de botar<br> inveja em qualquer um, além de possuir um imenso <br>desejo de evoluir e aprender.</p>
    </section>
    
    <ul class="list__film"></ul>   
  </section>
  
  </div>
  `;

  receiveFilms().then((filmList) => {
    // console.log(filmList);
    filmList.results.forEach((film) => {
      const { poster_path } = film;
      const posterPath = `https://image.tmdb.org/t/p/w342${poster_path}`;
      const id = film.id;
      const title = film.title;
      const listFilm = main.querySelector(".list__film");

      listFilm.innerHTML += `
    <li class="film">
  <a href="#${id}">
  <img class="coverFilm" src="${posterPath}">
  </a>
  <h2>${title}</h2> 
    </li>
    `;
    });
  });

  // receiveFilms();
  return main;
};

export default App;

