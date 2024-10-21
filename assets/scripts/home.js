import { openMenuModal, closeMenuModal } from "./modules/menuController.js";
import { initializeCarouselMovies } from "./modules/carouselMovies.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openMenuModal", func: openMenuModal },
    { name: "closeMenuModal", func: closeMenuModal },
    { name: "initializeCarouselMovies", func: initializeCarouselMovies },
  ];

  functionsToCall.forEach(({ name, func }) => {
    if (typeof func === "function") {
      try {
        func();
      } catch (error) {
        console.log(`Erro ao executar ${name}: `, error);
      }
    } else {
      console.error(`${name} não é uma função válida.`);
    }
  });
});
