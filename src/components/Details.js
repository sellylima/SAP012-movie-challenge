import { detailsFilms } from "../API.js";

const Details = (movie_id) => {
  const sectionConteudo = document.createElement("section");
  sectionConteudo.className = "section__conteudo";

  detailsFilms(movie_id).then((details) => {
    sectionConteudo.innerHTML = `
        <section class= "image">
          <a href="#${
            details.poster_path
          }"><img class="coverFilm" src="${`https://image.tmdb.org/t/p/w342${details.poster_path}`}"></a>
        </section>
        <section class="conteudo">
          <h2 class="resumo__titulo">${details.title}</h2>
          <p class="resumo__texto">${details.overview} </p>
          <a href='/'><button  id="btn-voltar">&#x1F814  Voltar</button></a>
        </section>
        `;
  });
  return sectionConteudo;
};
export default Details;
