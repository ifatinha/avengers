export const animationCardHover = () => {
  const cardsElements = document.querySelectorAll(".movie__card");
  const movieContainer = document.querySelector(".movies");

  if (!cardsElements.length || !movieContainer) {
    console.error("Cards elements not found!");
    return;
  }

  const handleMouseEnter = (event) => {
    const hoveredCard = event.currentTarget;
    cardsElements.forEach((card) =>
      card.classList.remove("movie__card--hovered")
    );

    hoveredCard.classList.add("movie__card--hovered");
    movieContainer.id = hoveredCard.dataset.movie;
  };

  const handleMouseLeave = () => {
    cardsElements.forEach((card) =>
      card.classList.remove("movie__card--hovered")
    );
    movieContainer.id = "";
    cardsElements[0].classList.add("movie__card--hovered");
    movieContainer.id = cardsElements[0].dataset.movie;
  };

  cardsElements.forEach((card) => {
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  });
};
