const createElementAndSetAttribute = (elementTag, attributesObject) => {
  const element = document.createElement(elementTag);

  for (const key in attributesObject) {
    element.setAttribute(key, attributesObject[key]);
  }

  return element;
};

const setAttributes = (element, attributesObject) => {
  for (const key in attributesObject) {
    element.setAttribute(key, attributesObject[key]);
  }
};

const roomFeatureStateChanger = (
  featureElement,
  newValue,
  newImage,
  roomSvgEl,
  roomOpacityValue,
  roomOpacityOperator,
  opacityChangerValue
) => {
  setAttributes(featureElement, {
    "value": newValue,
  });

  featureElement.style.backgroundImage = `url(${newImage})`;

  if (roomOpacityOperator === "+") {
    roomSvgEl.style.fillOpacity = roomOpacityValue + opacityChangerValue;
  } else {
    roomSvgEl.style.fillOpacity = roomOpacityValue - opacityChangerValue;
  }
};
