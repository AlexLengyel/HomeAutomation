// Rooms and their Features

// Setup all the rooms and their features
const setupRoomsAndTheirFeatures = (rooms, featureTypes) => {
  // Create main container for the rooms and their features
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container impact",
  });

  // Create title ("Room")
  const title = createElementAndSetAttribute("h2", {
    "class": "title impact-name",
  });
  title.innerText = "Room";

  // Add title to main container (rooms container)
  mainContainer.appendChild(title);

  /* Add each room and their features to main container (rooms container)
   by looping through the rooms array and call the setupRoom function which initializes each room */
  for (const room of rooms) {
    mainContainer.appendChild(setupRoom(room, featureTypes));
  }

  // Return the whole rooms and their features node
  return mainContainer;
};

// ----------------------------------------------------------------------------------------

// Setup a room and it's features
const setupRoom = (room, featureTypes) => {
  // Create main container for the rooms and their features
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container room",
  });

  // Create room name (for example "Bedroom")
  const roomName = createElementAndSetAttribute("h3", {
    "class": "title room-name",
  });
  roomName.innerText = room["name"];

  const numberOfAutomations = room["number-of-automations"];
  // (Default value - Minimum value) / Number of automations in the room
  const opacityChangeValue = (1 - 0.3) / numberOfAutomations;

  // Initialize room's fill opacity value to be able to change it in the on click functions
  const roomSvgId = room["svg-id"];
  const roomSvg = document.getElementById(roomSvgId);
  roomSvg.style.fillOpacity = 1;

  // Add title to main container (room container)
  mainContainer.appendChild(roomName);

  /* Add each light feature to main container (room container)
   by looping through the light features array and call the initLight function which initializes each light feature */
  const lights = room["features"]["lights"];
  const lightFeatureType = featureTypes["light"];
  for (const light of lights) {
    mainContainer.appendChild(
      initLight(light, lightFeatureType, opacityChangeValue, roomSvgId)
    );
  }

  /* Add each curtain feature to main container (room container)
   by looping through the curtain features array and call the initCurtain function which initializes each light feature */
  const curtains = room["features"]["curtains"];
  const curtainFeatureType = featureTypes["curtain"];
  for (const curtain of curtains) {
    mainContainer.appendChild(
      initCurtain(curtain, curtainFeatureType, opacityChangeValue, roomSvgId)
    );
  }

  // Return the whole room node
  return mainContainer;
};

// ----------------------------------------------------------------------------------------

// Feature initializing functions

// ----------------------------------------------------------------------------------------

// Initialize light feature
const initLight = (light, lightFeatureType, opacityChangeValue, roomSvgId) => {
  // Create main container for the light feature
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature",
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
    roomSvg.style.fillOpacity = roomOpacityValue - opacityChangeValue;
  }

  // Create light icon and set it's attributes
  const lightIcon = createElementAndSetAttribute("img", {
    "src": `${currentValue === trueValue ? onImg : offImg}`,
    "class": "feature-icon",
    "id": `${lightId}`,
    "value": `${currentValue}`,
    "alt": "Lightbulb Icon",
  });

  /* Add on click event listener to main container (light feature container)
  by using lightOnClick callback function to add the logic to it */
  const lightAttributes = {
    trueValue,
    falseValue,
    opacityChangeValue,
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

// ----------------------------------------------------------------------------------------

// Initialize curtain feature
const initCurtain = (
  curtain,
  curtainFeatureType,
  opacityChangeValue,
  roomSvgId
) => {
  // Create main container for the curtain feature
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature",
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
    roomSvg.style.fillOpacity = roomOpacityValue - opacityChangeValue;
  }

  // Create curtain icon and set it's attributes
  const curtainIcon = createElementAndSetAttribute("img", {
    "src": `${currentValue === trueValue ? openImg : closedImg}`,
    "class": "feature-icon",
    "id": `${curtainId}`,
    "value": `${currentValue}`,
    "alt": "Curtain Icon",
  });

  /* Add on click event listener to main container (curtain feature container)
  by using curtainOnClick callback function to add the logic to it */
  const curtainAttributes = {
    trueValue,
    falseValue,
    opacityChangeValue,
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
