import App from "./components/App.js";
import Details from "./components/Details.js";


//  /Troca de páginas/ 
document.getElementById("root").appendChild(App());

// /onde o conteúdo da página será renderizado/
const mainRoot = document.getElementById("root");  

// /função recebe parametro  movieId e executa a lógica para trocar a página com base nesse id/
const trocaPagina = (movieId) => {
  mainRoot.appendChild(Details(movieId));
  window.addEventListener("load", () => {
    if (window.location.hash === "") {
      mainRoot.innerHTML = "";
      mainRoot.appendChild(App());
    } else {
      mainRoot.innerHTML = "";
      trocaPagina(window.location.hash);
    }
  });
};

const indentificaResumo = () => {
    window.addEventListener("hashchange", () => {
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