const lightOnClick = (lightId, lightAttributes, roomSvgId) => {
  // Get light element by ID
  const light = document.getElementById(lightId);
  // Get light's current value
  const currentValue = light.getAttribute("value");

  const { trueValue, falseValue, opacityChangeValue, onImg, offImg } =
    lightAttributes;
  const roomSvg = document.getElementById(roomSvgId);
  const roomOpacityValue = parseFloat(roomSvg.style.fillOpacity);

  // Switch to light's opposite state and change the room's opacity value
  if (currentValue === trueValue) {
    setAttributes(light, {
      "src": offImg,
      "value": falseValue,
    });
    roomSvg.style.fillOpacity = roomOpacityValue + opacityChangeValue;
  } else {
    setAttributes(light, {
      "src": onImg,
      "value": trueValue,
    });
    roomSvg.style.fillOpacity = roomOpacityValue - opacityChangeValue;
  }
};
