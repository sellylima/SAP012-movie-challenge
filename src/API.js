export const receiveFilms  = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmMzZmIwYWQ4YmI0MWNiYmEzMzI0ZGIyOWM2N2MwMiIsInN1YiI6IjY2MjFiNzBhODdhZTdiMDE4OGQ4YjRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dkYe19eaBez_mGc-bQkDIoxyqU65y5Z9rZLtu-lwHD8",
    },
  };

  
  const films = fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc",
    options
  )
  .then((response) => response.json())
    .then((response) => {return response})
    .catch((error) => {return error}); 
    return films;
};

export const detailsFilms = (movie_id) => {
  const options = {
    method: "GET",    //O método GET é como um tipo de pedido que seu navegador faz à biblioteca
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmMzZmIwYWQ4YmI0MWNiYmEzMzI0ZGIyOWM2N2MwMiIsInN1YiI6IjY2MjFiNzBhODdhZTdiMDE4OGQ4YjRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dkYe19eaBez_mGc-bQkDIoxyqU65y5Z9rZLtu-lwHD8",
    },
  };

  const details = fetch(`https://api.themoviedb.org/3/movie/${movie_id.slice(1)}?language=pt-BR`, options)
    .then((response) => response.json()) //JSON converte a resposta em um formato que o JavaScript pode entender (Isso trata a resposta da solicitação)
    .then((response) => {response}) // é usado para lidar com o sucesso da solicitação os dados JSON  (POSSO USAR COMO DATA???)
    .catch((error) => {return error});  //é usado para lidar com erros que possam ocorrer durante a solicitação
    return details;
};

// .JSON-  usado em aplicativos da web para enviar e receber dados.
// fetch é usado para fazer solicitações de recursos de rede (como arquivos, APIs etc.) baseado em promessas
// .then - é usado para lidar com o sucesso da solicitação
// .catch - é usado para lidar com erros que possam ocorrer durante a solicitação
// GET - O método GET é como um tipo de pedido que seu navegador faz à biblioteca. Ele diz à biblioteca: "Por favor, me dê o livro com este título (o endereço do site) para que eu possa ler".
// Então, a biblioteca (o servidor) envia de volta o livro (o site) para o seu navegador, e você pode ler a página da web.
