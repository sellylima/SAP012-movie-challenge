import App from "./components/App.js";
import Details from "./components/Details.js";

//Esse trecho de código JavaScript está lidando com a renderização de conteúdo em uma página web 

//  /Troca de páginas/ 
document.getElementById("root").appendChild(App()); 

// O mainRoot armazena uma referência ao elemento HTML com o ID "root"  para manipular o conteúdo da página.
const mainRoot = document.getElementById("root");  

// /função recebe parametro  movieId e executa a lógica para trocar a página com base nesse id
const trocaPagina = (movieId) => {
  mainRoot.appendChild(Details(movieId)); // anexa o resultado da função
  window.addEventListener("load", () => { // Window é uma propriedade do objeto window e o load recarregue  a página após todos os itens tem sido carregado
    // window.location um objeto que representa a url do navegador //troca o conteúdo com base no novo hash. 
    if (window.location.hash === "") {    //verificando se o hash da URL está vazio
      mainRoot.innerHTML = "";  //está limpando todo o conteúdo do ID root
      mainRoot.appendChild(App()); // adiciona o resultado da funçaõ App
    } else {
      //quando a url quando o hash da URL não está vazio, o código limpa o conteúdo atual da página e chama a função trocaPagina()
      mainRoot.innerHTML = "";
      trocaPagina(window.location.hash);
    }
  });
};

const indentificaResumo = () => {
    window.addEventListener("hashchange", () => { // hashchange é um escutador de evento que é disparado quando há uma mudança no componente hash
    if(window.location.hash === "") {
        mainRoot.innerHTML = '';
        mainRoot.appendChild(App());
    }else{
        mainRoot.innerHTML = "";
      trocaPagina(window.location.hash);
    }
   
});
};
indentificaResumo(); 