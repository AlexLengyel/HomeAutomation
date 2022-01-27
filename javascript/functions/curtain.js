const curtainOnClick = (curtainId, curtainAttributes, roomSvgId) => {
  // Get curtain element by ID
  const curtain = document.getElementById(curtainId);
  // Get curtain's current value
  const currentValue = curtain.getAttribute("value");

  const { trueValue, falseValue, opacityChangeValue, openImg, closedImg } =
    curtainAttributes;
  const roomSvg = document.getElementById(roomSvgId);
  const roomOpacityValue = parseFloat(roomSvg.style.fillOpacity);

  // Switch to curtain's opposite state and change the room's opacity value
  if (currentValue === trueValue) {
    setAttributes(curtain, {
      "src": closedImg,
      "value": falseValue,
    });
    roomSvg.style.fillOpacity = roomOpacityValue + opacityChangeValue;
  } else {
    setAttributes(curtain, {
      "src": openImg,
      "value": trueValue,
    });
    roomSvg.style.fillOpacity = roomOpacityValue - opacityChangeValue;
  }
};
