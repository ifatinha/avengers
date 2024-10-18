export const updateAriaAttributes = (button, isOpen) => {
  const attributes = {
    "aria-expanded": isOpen ? "true" : "false",
    "aria-label": isOpen ? "Fechar menu" : "Abrir menu",
  };

  Object.entries(attributes).forEach(([key, value]) => {
    button.setAttribute(key, value);
  });
};

export const updateAriaHidden = (element, isHidden, elements) => {
  element.setAttribute("aria-hidden", !isHidden);
  elements.forEach((element) => element.setAttribute("aria-hidden", isHidden));
};
