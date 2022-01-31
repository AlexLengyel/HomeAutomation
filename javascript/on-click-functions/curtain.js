const curtainOnClick = (curtainId, curtainAttributes, roomSvgId) => {
  // Get curtain element by ID
  const curtain = document.getElementById(curtainId);
  // Get curtain's current value
  const currentValue = curtain.getAttribute("value");

  const { trueValue, falseValue, opacityChangerValue, openImg, closedImg } =
    curtainAttributes;
  const roomSvg = document.getElementById(roomSvgId);
  const roomOpacityValue = parseFloat(roomSvg.style.fillOpacity);

  // Switch to curtain's opposite state and change the room's opacity value
  if (currentValue === trueValue) {
    roomFeatureStateChanger(
      curtain,
      falseValue,
      closedImg,
      roomSvg,
      roomOpacityValue,
      "+",
      opacityChangerValue
    );
  } else {
    roomFeatureStateChanger(
      curtain,
      trueValue,
      openImg,
      roomSvg,
      roomOpacityValue,
      "-",
      opacityChangerValue
    );
  }
};
