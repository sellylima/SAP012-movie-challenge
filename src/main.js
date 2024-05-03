import App from "./components/App.js";
import Details from "./components/Details.js";

document.getElementById("root").appendChild(App());

const mainRoot = document.getElementById("root");

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