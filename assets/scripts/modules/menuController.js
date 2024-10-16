import {
  updateAriaAttributes,
  updateAriaHidden,
} from "../util/ariaAttributesUtils.js";

const getElements = () => ({
  modal: document.querySelector("#modalMenu"),
  openButton: document.querySelector("#menuOpenButton"),
  closeButton: document.querySelector("#menuModalCloseButton"),
  elements: document.querySelectorAll(".page-content"),
});

const handleModalToggle = (modal, button, isOpen, elements) => {
  button.classList.toggle("burger__active", isOpen);
  modal.classList.toggle("modal__active", isOpen);
  updateAriaAttributes(button, isOpen);
  updateAriaHidden(modal, isOpen, elements);
};

const attachEventListeners = (button, handler) => {
  ["touchstart", "click"].forEach((eventType) => {
    button.addEventListener(eventType, (event) => {
      if (event?.type === "touchstart") event.preventDefault();
      handler();
    });
  });
};

export const openMenuModal = () => {
  const { modal, openButton, closeButton, elements } = getElements();
  
  if (!modal || !openButton || !closeButton || !elements) {
    console.error("Elements not found.");
    return;
  }

  attachEventListeners(openButton, () =>
    handleModalToggle(modal, openButton, true, elements)
  );
};

export const closeMenuModal = () => {
  const { modal, openButton, closeButton, elements } = getElements();

  if (!modal || !openButton || !closeButton || !elements) {
    console.error("Elements not found.");
    return;
  }

  attachEventListeners(closeButton, () =>
    handleModalToggle(modal, openButton, false, elements)
  );
};
