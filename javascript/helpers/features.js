// Change the element's value, background image and the room's opacity,
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
