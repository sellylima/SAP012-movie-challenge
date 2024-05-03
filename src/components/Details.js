import { detailsFilms } from "../API.js";

const Details = (movie_id) => {
  const sectionConteudo = document.createElement("section");
  sectionConteudo.className = "section__conteudo";


  detailsFilms(movie_id).then(details => {
    // console.log(details);
        sectionConteudo.innerHTML = `
        <section class= "image">
        <a href="#${movie_id}"></a>
        </section>
        <section class="conteudo">
        <h2>${movie_id.title}</h2>
        <p>${movie_id.overview} </p>
        <p>${movie_id.release_date} </p>
        </section>
        <a href='/'><button id="btn-voltar">&#x1F814  Voltar</button></a>
        
        ` ;
    });
    return sectionConteudo;
  };
  export default Details;

