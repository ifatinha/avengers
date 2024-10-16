import { updateAriaAttributes } from "../util/ariaAttributesUtils.js";

const getElements = () => ({
  modal: document.querySelector("#modalMenu"),
  openButton: document.querySelector("#menuOpenButton"),
  closeButton: document.querySelector("#menuModalCloseButton"),
});

const handleModalToggle = (modal, button, isOpen) => {
  button.classList.toggle("burger__active", isOpen);
  modal.classList.toggle("modal__active", isOpen);
  updateAriaAttributes(button, isOpen);
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
  const { modal, openButton, closeButton } = getElements();

  if (!modal || !openButton || !closeButton) {
    console.error("Elements not found.");
    return;
  }

  attachEventListeners(openButton, () =>
    handleModalToggle(modal, openButton, true)
  );
};

export const closeMenuModal = () => {
  const { modal, openButton, closeButton } = getElements();

  if (!modal || !openButton || !closeButton) {
    console.error("Elements not found.");
    return;
  }

  attachEventListeners(closeButton, () =>
    handleModalToggle(modal, openButton, false)
  );
};
