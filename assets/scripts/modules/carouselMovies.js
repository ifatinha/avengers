const showCarousel = (carouselButtons, carouselItems, interval = 4000) => {
  let currentIndex = 0;
  let autoSlide;

  const showSlide = (index) => {
    carouselItems.forEach((item, idx) => {
      item.classList.toggle("movie--activated", idx === index);
    });

    carouselButtons.forEach((button, idx) => {
      button.classList.toggle("dot--activated", idx === index);
    });

    currentIndex = index;
  };

  //Pegar o proximo slide para o autoplay
  const nextSlide = () => {
    const nextSlide = (currentIndex + 1) % carouselItems.length;
    showSlide(nextSlide);
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(nextSlide, interval);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlide);
  };

  const slider = (event, index) => {
    if (event?.type === "touchstart") return;
    showSlide(index);
    stopAutoSlide();
    startAutoSlide();
  };

  carouselButtons.forEach((button, index) => {
    ["touchstart", "click"].forEach((eventType) => {
      button.addEventListener(eventType, (event) => {
        slider(event, index);
      });
    });
  });

  showSlide(currentIndex);
  startAutoSlide();
};

export const initializeCarouselMovies = () => {
  const carouselButtons = document.querySelectorAll(".button-dot");
  const carouselItems = document.querySelectorAll(".movie");

  if (!carouselButtons.length || !carouselItems.length) {
    console.error("Elements not found");
    return;
  }

  showCarousel(carouselButtons, carouselItems);
};
