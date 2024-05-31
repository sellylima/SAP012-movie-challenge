import { detailsFilms } from "../API.js";

// Usando a função detailsFilms(movie_id) para obter detalhes de um filme com um ID específico e, em seguida, manipula o DOM para exibir esses detalhes na página. 

const Details = (movie_id) => {
  const sectionConteudo = document.createElement("section");
  sectionConteudo.className = "section__conteudo";

  detailsFilms(movie_id).then((details) => { // chamando a função DetaisFilms -- o uso do THEN como promessa para lidar com os detalhes do filme quando disponíveis
    // manipulação do DOM -- 
    // atualiza o conteúdo da seção com a classe sectionConteudo para conter as informações do filme, como o pôster, título, resumo e um botão de voltar.
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
