const createElementAndSetAttribute = (elementTag, attributesObject) => {
  const element = document.createElement(elementTag);

  for (const key in attributesObject) {
    element.setAttribute(key, attributesObject[key]);
  }

  return element;
};