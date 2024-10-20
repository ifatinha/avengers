import {
  updateAriaAttributes,
  updateAriaHidden,
} from "../util/ariaAttributesUtils.js";

const getElements = () => ({
  modal: document.querySelector("#modalTrailer"),
  openButton: document.querySelector("#openModalTrailer"),
  closeButton: document.querySelector("#menuModalCloseButton"),
  elements: document.querySelectorAll(".page-content"),
});

const handleModalToggle = (modal, button, isOpen, elements) => {
  modal.classList.toggle("modal__active", isOpen);
  updateAriaAttributes(button, isOpen);
  updateAriaHidden(modal, isOpen, elements);

  if(isOpen == false){
    window.location.reload();
  }
};

const attachEventListeners = (button, handler) => {
  ["touchstart", "click"].forEach((eventType) => {
    button.addEventListener(eventType, (event) => {
      if (event?.type === "touchstart") event.preventDefault();
      handler();
    });
  });
};

export const openTrailerModal = () => {
  const { modal, openButton, closeButton, elements } = getElements();

  if (!modal || !openButton || !closeButton || !elements) {
    console.error("Elements not found.");
    return;
  }

  attachEventListeners(openButton, () =>
    handleModalToggle(modal, openButton, true, elements)
  );
};

export const closeTrailerModal = () => {
  const { modal, openButton, closeButton, elements } = getElements();

  if (!modal || !openButton || !closeButton || !elements) {
    console.error("Elements not found.");
    return;
  }

  attachEventListeners(closeButton, () =>
    handleModalToggle(modal, openButton, false, elements)
  );
};
