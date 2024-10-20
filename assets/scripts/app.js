import { openMenuModal, closeMenuModal } from "./modules/menuController.js";
import { initializeCarouselMovies } from "./modules/carouselMovies.js";
import { openSideBar, closeSidebar } from "./modules/sidebarController.js";
import { updateCharacterInfo } from "./modules/carouselCharacter.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openMenuModal", func: openMenuModal },
    { name: "closeMenuModal", func: closeMenuModal },
    { name: "initializeCarouselMovies", func: initializeCarouselMovies },
    { name: "openSideBar", func: openSideBar },
    { name: "closeSidebar", func: closeSidebar },
    { name: "updateCharacterInfo", func: updateCharacterInfo },
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
