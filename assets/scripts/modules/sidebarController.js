import {
  updateAriaAttributes,
  updateAriaHidden,
} from "../util/ariaAttributesUtils.js";

const getElements = () => ({
  openButton: document.querySelector("#sidebarOpenButton"),
  sidebar: document.querySelector("#sidebar"),
  closeButton: document.querySelector("#sidebarCloseButton"),
  elements: document.querySelectorAll(".page-content"),
});

const handlerSidebar = (event, button, sidebar, isOpen, elements) => {
  if (event?.type === "touchstart") event.preventDefault();
  sidebar.classList.toggle("sidebar--activated", isOpen);
  updateAriaAttributes(button, isOpen);
  updateAriaHidden(sidebar, isOpen, elements);
};

export const openSideBar = () => {
  const { openButton, sidebar, elements } = getElements();

  if (!openButton || !sidebar || !elements.length) {
    console.error("Elements not found.");
    return;
  }

  ["touchstart", "click"].forEach((eventType) => {
    openButton.addEventListener(eventType, (ev) => {
      handlerSidebar(ev, openButton, sidebar, true, elements);
    });
  });
};

export const closeSidebar = () => {
  const { sidebar, closeButton, elements } = getElements();

  if (!closeButton || !sidebar || !elements.length) {
    console.error("Elements not found.");
    return;
  }

  ["touchstart", "click"].forEach((eventType) => {
    closeButton.addEventListener(eventType, (ev) => {
      handlerSidebar(ev, closeButton, sidebar, false, elements);
    });
  });
};
