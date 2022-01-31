// Initialize curtain feature
const initCurtain = (
  curtain,
  curtainFeatureType,
  opacityChangerValue,
  roomSvgId
) => {
  // Create main container for the curtain feature
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature-container",
  });

  // Create curtain name (for example "Blackout Curtains")
  const curtainName = createElementAndSetAttribute("p", {
    "class": "feature-name",
  });
  curtainName.innerText = curtain["name"];

  const curtainId = curtain["id"];
  const currentValue = curtain["current-value"];
  const trueValue = curtainFeatureType["values"]["true"];
  const falseValue = curtainFeatureType["values"]["false"];
  const openImg = "assets/curtains/curtain_open.png";
  const closedImg = "assets/curtains/curtain_closed.png";

  /* If the curtain is open at initialization then it's modifing value should be subtracted 
    from the initial opacity value */
  const roomSvg = document.getElementById(roomSvgId);
  const roomOpacityValue = parseFloat(roomSvg.style.fillOpacity);
  if (currentValue === trueValue) {
    roomSvg.style.fillOpacity = roomOpacityValue - opacityChangerValue;
  }

  // Create curtain icon and set it's attributes
  const curtainIcon = createElementAndSetAttribute("div", {
    "class": "curtain-feature-icon",
    "id": curtainId,
    "value": currentValue,
  });
  curtainIcon.style.backgroundImage = `url(${
    currentValue === trueValue ? openImg : closedImg
  })`;

  /* Add on click event listener to main container (curtain feature container)
    by using curtainOnClick callback function to add the logic to it */
  const curtainAttributes = {
    trueValue,
    falseValue,
    opacityChangerValue,
    openImg,
    closedImg,
  };
  mainContainer.addEventListener("click", () =>
    curtainOnClick(curtainId, curtainAttributes, roomSvgId)
  );

  // Add curtainIcon to main container (curtain container)
  mainContainer.appendChild(curtainIcon);
  // Add curtain name to main container (curtain container)
  mainContainer.appendChild(curtainName);

  // Return the whole curtain node
  return mainContainer;
};
