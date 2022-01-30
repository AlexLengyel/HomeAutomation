const lightOnClick = (lightId, lightAttributes, roomSvgId) => {
  // Get light element by ID
  const light = document.getElementById(lightId);
  // Get light's current value
  const currentValue = light.getAttribute("value");

  const { trueValue, falseValue, opacityChangerValue, onImg, offImg } =
    lightAttributes;
  const roomSvg = document.getElementById(roomSvgId);
  const roomOpacityValue = parseFloat(roomSvg.style.fillOpacity);

  // Switch to light's opposite state and change the room's opacity value
  if (currentValue === trueValue) {
    roomFeatureStateChanger(
      light,
      falseValue,
      offImg,
      roomSvg,
      roomOpacityValue,
      "+",
      opacityChangerValue
    );
  } else {
    roomFeatureStateChanger(
      light,
      trueValue,
      onImg,
      roomSvg,
      roomOpacityValue,
      "-",
      opacityChangerValue
    );
  }
};
