import { openSideBar, closeSidebar } from "./modules/sidebarController.js";
import { updateCharacterInfo } from "./modules/carouselCharacter.js";
import {
  openTrailerModal,
  closeTrailerModal,
} from "./modules/trailerController.js";

document.addEventListener("DOMContentLoaded", () => {
  const functionsToCall = [
    { name: "openSideBar", func: openSideBar },
    { name: "closeSidebar", func: closeSidebar },
    { name: "updateCharacterInfo", func: updateCharacterInfo },
    { name: "openTrailerModal", func: openTrailerModal },
    { name: "closeTrailerModal", func: closeTrailerModal },
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
