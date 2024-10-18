export const handleToggle = (element, className, isOpen) => {
  element.classList.toggle(className, isOpen);
};

export const attachEventListeners = (button, handler) => {
  ["touchstart", "click"].forEach((eventType) => {
    button.addEventListener(eventType, (event) => {
      if (event?.type === "touchstart") event.preventDefault();
      handler();
    });
  });
};
