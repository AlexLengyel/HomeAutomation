// Create an element and change their attributes
const createElementAndSetAttribute = (elementTag, attributesObject) => {
  const element = document.createElement(elementTag);

  for (const key in attributesObject) {
    element.setAttribute(key, attributesObject[key]);
  }

  return element;
};

// --------------------------------------------------------------------------------------------------------------------

// Change element's attributes
const setAttributes = (element, attributesObject) => {
  for (const key in attributesObject) {
    element.setAttribute(key, attributesObject[key]);
  }
};
