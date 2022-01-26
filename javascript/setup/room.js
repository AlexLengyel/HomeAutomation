// Rooms and their Features

// Setup all the rooms and their features (return node)
const setupRoomsAndTheirFeatures = (rooms, featureTypes) => {
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container impact",
  });

  const title = createElementAndSetAttribute("h2", {
    "class": "title impact-name",
  });
  title.innerText = "Room";

  // Add title to main container (rooms container)
  mainContainer.appendChild(title);

  // Add each room and their features to the main container (rooms container)
  for (const room of rooms) {
    mainContainer.appendChild(setupRoom(room, featureTypes));
  }

  // Return the whole rooms and their features node
  return mainContainer;
};

// Setup a room and it's features (return node)
const setupRoom = (room, featureTypes) => {
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container room",
  });

  const title = createElementAndSetAttribute("h3", {
    "class": "title room-name",
  });
  title.innerText = `${room["name"]}`;

  // Add title to main container (room container)
  mainContainer.appendChild(title);

  // Add each light feature to main container (room container)
  const lights = room["features"]["lights"];
  for (const light of lights) {
    mainContainer.appendChild(initLight(light, featureTypes));
  }

  // Add each curtain feature to main container (room container)
  const curtains = room["features"]["curtains"];
  for (const curtain of curtains) {
    mainContainer.appendChild(initCurtain(curtain, featureTypes));
  }

  // Return the whole room node
  return mainContainer;
};

// Feature initializing functions

// Initialize light feature (return node)
const initLight = (light, featureTypes) => {
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature",
  });

  const featureName = createElementAndSetAttribute("label", {
    "class": "feature-name",
    "for": `${light["id"]}`,
  });
  featureName.innerText = light["name"];

  const checkbox = createElementAndSetAttribute("input", {
    "type": "checkbox",
    "class": "feature-checkbox",
    "id": `${light["id"]}`,
    "value": `${light["current-value"]}`,
  });

  // Add checkbox to main container (light container)
  mainContainer.appendChild(checkbox);
  // Add light name to main container (light container)
  mainContainer.appendChild(featureName);

  // Return the whole light node
  return mainContainer;
};

// Initialize curtain feature (return node)
const initCurtain = (curtain, featureTypes) => {
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature",
  });

  const featureName = createElementAndSetAttribute("label", {
    "class": "feature-name",
    "for": `${curtain["id"]}`,
  });
  featureName.innerText = curtain["name"];

  const checkbox = createElementAndSetAttribute("input", {
    "type": "checkbox",
    "class": "feature-checkbox",
    "id": `${curtain["id"]}`,
    "value": `${curtain["current-value"]}`,
  });

  // Add checkbox to main container (curtain container)
  mainContainer.appendChild(checkbox);
  // Add curtain name to main container (curtain container)
  mainContainer.appendChild(featureName);

  // Return the whole curtain node
  return mainContainer;
};
