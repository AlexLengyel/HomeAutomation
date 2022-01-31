// Setup all the rooms and their features
const setupRoomsAndTheirFeatures = (rooms, featureTypes) => {
  // Create main container for the whole rooms and their features nodes
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container impact-container",
  });

  // Create title ("Rooms")
  const title = createElementAndSetAttribute("h2", {
    "class": "white-title impact-name",
  });
  title.innerText = "Rooms";

  // Create control cards container for the rooms and their features
  const roomsContainer = createElementAndSetAttribute("div", {
    "class": "control-cards-container",
  });

  // Add title to main container (rooms container)
  mainContainer.appendChild(title);

  /* Add each room and their features to rooms container
   by looping through the rooms array and call the setupRoom function which initializes each room */
  for (const room of rooms) {
    roomsContainer.appendChild(setupRoomCard(room, featureTypes));
  }

  // Add rooms container within the rooms and their feature to main container
  mainContainer.appendChild(roomsContainer);

  // Return the whole rooms and their features node
  return mainContainer;
};

// --------------------------------------------------------------------------------------------------------------------

// Setup a room card and its features
const setupRoomCard = (room, featureTypes) => {
  // Create main container (card) for the rooms and their features
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container card-container-style control-card-container",
  });

  // Create room name (for example "Bedroom")
  const roomName = createElementAndSetAttribute("h3", {
    "class": "black-title card-name",
  });
  roomName.innerText = room["name"];

  // Create automation features container for the features
  const featuresContainer = createElementAndSetAttribute("div", {
    "class": "column-container features-container",
  });

  const numberOfAutomations = room["number-of-automations"];
  // (Default value - Minimum value) / Number of automations in the room
  const opacityChangerValue = (1 - 0.3) / numberOfAutomations;

  // Initialize room's fill opacity value to be able to change it in the on click functions
  const roomSvgId = room["svg-id"];
  const roomSvg = document.getElementById(roomSvgId);
  roomSvg.style.fillOpacity = 1;

  // Add title to main container (room container)
  mainContainer.appendChild(roomName);

  /* Add each light feature to features container
   by looping through the light features array and call the initLight function which initializes each light feature */
  const lights = room["features"]["lights"];
  const lightFeatureType = featureTypes["light"];
  for (const light of lights) {
    featuresContainer.appendChild(
      initLight(light, lightFeatureType, opacityChangerValue, roomSvgId)
    );
  }

  /* Add each curtain feature to features container
   by looping through the curtain features array and call the initCurtain function which initializes each light feature */
  const curtains = room["features"]["curtains"];
  const curtainFeatureType = featureTypes["curtain"];
  for (const curtain of curtains) {
    featuresContainer.appendChild(
      initCurtain(curtain, curtainFeatureType, opacityChangerValue, roomSvgId)
    );
  }

  // Add features container to main container (room container)
  mainContainer.appendChild(featuresContainer);

  // Return the whole room node
  return mainContainer;
};
