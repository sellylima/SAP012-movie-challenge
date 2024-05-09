import { receiveFilms, detailsFilms } from "../API.js";
import { mockdata1, mockdata2, mockdata3 } from "./test/mockdata.js";


// LISTA DE FILMES //
// simula o fetch da API usando o jest.fn()
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockdata1) })
);

// Descreva o teste usando describe
describe("receiveFilms", () => {
  // Use it para descrever um caso de teste específico
  it("Deve buscar filmes na API ", async () => {
    await receiveFilms();

    // Verifique se a função fetch foi chamada com a URL correta
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc",
      expect.any(Object)
    );
  });
});

// DETALHES DO FILME //
const idFilm = "#123"; // ID fictício de um filme

// Simula a função fetch usando jest.fn()
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mockdata2) })
);

describe("detailsFilms", () => {
  it("deve chamar o fetch com a url correta", async () => {
    // Chama a função buscarFilmes
    await detailsFilms(idFilm);

    // Verifica se a função fetch foi chamada com a URL correta
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/movie/123?language=pt-BR`,
      expect.any(Object)
    );
  });
});

// VERIFICAÇÃO DE ERRO //
describe("receiveFilms", () => {
  it("should return a 404 error message", async () => {
    // Mockando a função fetch para retornar uma resposta de erro 404
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 404,
        json: () => Promise.resolve(mockdata3.status),
      })
    );

    // Chama a função receiveFilms
    const error = await receiveFilms();

    // Verifique se a função fetch foi chamada com a URL correta
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc", expect.any(Object)
    );

    // Verifique se a função receiveFilms retornou a mensagem de erro 404
    expect(error).toEqual(mockdata3.status);
  });
});

