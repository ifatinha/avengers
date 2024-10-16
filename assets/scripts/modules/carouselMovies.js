const showCarousel = (
  carouselCount,
  carouselItems,
  carouselButtons,
  interval = 4000
) => {
  let currentIndex = 0;
  let autoSlide;

  const showSlide = (buttonId) => {
    currentIndex = buttonId === "next" ? currentIndex + 1 : currentIndex - 1;

    if (currentIndex > carouselItems.length - 1) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }

    carouselItems.forEach((item, idx) => {
      item.classList.toggle("movie--activated", idx === currentIndex);
    });

    carouselCount.forEach((item, idx) => {
      item.classList.toggle("dot--activated", idx === currentIndex);
    });
  };

  //Passa o proximo slide para o autoplay
  const nextSlide = () => {
    //const nextSlide = (currentIndex + 1) % carouselItems.length;
    showSlide("next");
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(nextSlide, interval);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  const slider = (event) => {
    if (event?.type === "touchstart") return;
    const buttonId = event.currentTarget.id;
    showSlide(buttonId);
    stopAutoSlide();
    startAutoSlide();
  };

  carouselButtons.forEach((button, index) => {
    ["touchstart", "click"].forEach((eventType) => {
      button.addEventListener(eventType, (event) => {
        slider(event);
      });
    });
  });

  showSlide(currentIndex);
  startAutoSlide();
};

export const initializeCarouselMovies = () => {
  const carouselCount = document.querySelectorAll(".dot");
  const carouselItems = document.querySelectorAll(".movie");
  const carouselButtons = document.querySelectorAll(".carousel__button");

  if (
    !carouselCount.length ||
    !carouselItems.length ||
    !carouselButtons.length
  ) {
    console.error("Elements not found");
    return;
  }

  showCarousel(carouselCount, carouselItems, carouselButtons);
};
