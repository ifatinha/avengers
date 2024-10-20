import {
  theAvengers,
  ageOfUltron,
  infinityWar,
  endgame,
} from "../data/characters.js";

let characters = [];

const getDomElements = () => ({
  characterDiv: document.querySelector(".character"),
  actorName: document.querySelector(".actor__name"),
  characterName: document.querySelector(".character__name"),
  characterDescription: document.querySelector(".character__description"),
  characterId: document.querySelector(".carousel__dots .dot"),
});

const getPageCharacters = () => {
  const pageId = document.body.id;
  console.log(pageId);
  if (pageId === "theAvengersPage") {
    characters = theAvengers;
  } else if (pageId === "ageOfUltronPage") {
    characters = theAvengers.concat(ageOfUltron);
  } else if (pageId === "infinityWarPage") {
    characters = theAvengers.concat(ageOfUltron).concat(infinityWar);
  } else if (pageId === "endgamePage") {
    characters = theAvengers
      .concat(ageOfUltron)
      .concat(infinityWar)
      .concat(endgame);
  }

};

const updateDom = (character, size) => {
  const {
    characterDiv,
    actorName,
    characterName,
    characterDescription,
    characterId,
  } = getDomElements();

  if (
    !characterDiv ||
    !actorName ||
    !characterName ||
    !characterDescription ||
    !characterId
  ) {
    return;
  }

  characterDiv.style.backgroundImage = `url(${character.bgImage})`;
  actorName.textContent = character.actor;
  characterName.textContent = character.name;
  characterDescription.textContent = character.description;
  characterId.textContent = `${character.id}/${size}`;
};

export const updateCharacterInfo = () => {
  const nextButton = document.querySelector("#nextCharacter");
  const prevButton = document.querySelector("#prevCharacter");
  let currentIndex = 0;

  const updateCharacter = (event) => {
    if (event?.type === "touchstart") event.preventDefault();
    const buttonId = event.currentTarget.id;

    currentIndex =
      buttonId === "nextCharacter" ? currentIndex + 1 : currentIndex - 1;

    if (currentIndex > characters.length - 1) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = characters.length - 1;
    }

    updateDom(characters[currentIndex], characters.length);
  };

  getPageCharacters();
  updateDom(characters[currentIndex], characters.length);
  

  ["touchstart", "click"].forEach((eventType) => {
    nextButton.addEventListener(eventType, (event) => {
      updateCharacter(event);
    });
    prevButton.addEventListener(eventType, (event) => {
      updateCharacter(event);
    });
  });
};
