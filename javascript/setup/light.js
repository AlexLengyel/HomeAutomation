// Initialize light feature
const initLight = (light, lightFeatureType, opacityChangerValue, roomSvgId) => {
  // Create main container for the light feature
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature-container",
  });

  // Create light name (for example "Overhead Light")
  const lightName = createElementAndSetAttribute("p", {
    "class": "feature-name",
  });
  lightName.innerText = light["name"];

  const lightId = light["id"];
  const currentValue = light["current-value"];
  const trueValue = lightFeatureType["values"]["true"];
  const falseValue = lightFeatureType["values"]["false"];
  const onImg = "assets/lightbulbs/lightbulb_on.png";
  const offImg = "assets/lightbulbs/lightbulb_off.png";

  /* If the light is on at initialization then it's modifing value should be subtracted 
    from the initial opacity value */
  const roomSvg = document.getElementById(roomSvgId);
  const roomOpacityValue = parseFloat(roomSvg.style.fillOpacity);
  if (currentValue === trueValue) {
    roomSvg.style.fillOpacity = roomOpacityValue - opacityChangerValue;
  }

  // Create light icon and set it's attributes
  const lightIcon = createElementAndSetAttribute("div", {
    "class": "light-feature-icon",
    "id": lightId,
    "value": currentValue,
  });
  lightIcon.style.backgroundImage = `url(${
    currentValue === trueValue ? onImg : offImg
  })`;

  /* Add on click event listener to main container (light feature container)
    by using lightOnClick callback function to add the logic to it */
  const lightAttributes = {
    trueValue,
    falseValue,
    opacityChangerValue,
    onImg,
    offImg,
  };
  mainContainer.addEventListener("click", () =>
    lightOnClick(lightId, lightAttributes, roomSvgId)
  );

  // Add lightIcon to main container (light container)
  mainContainer.appendChild(lightIcon);
  // Add light name to main container (light container)
  mainContainer.appendChild(lightName);

  // Return the whole light node
  return mainContainer;
};
