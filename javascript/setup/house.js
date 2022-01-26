// House Features

// Setup the whole house feature (return node)
const setupHouseFeatures = (features, featureTypes) => {
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container impact",
  });

  const title = createElementAndSetAttribute("h2", {
    "class": "title impact-name",
  });
  title.innerText = "House";

  // Add title to main container (house container)
  mainContainer.appendChild(title);
  // Add temperature feature to main container (house container)
  mainContainer.appendChild(
    initTemperature(features["temperature"], featureTypes["temperature"])
  );

  // Return the whole house feature node
  return mainContainer;
};

// Initialize temperature feature (return node)
const initTemperature = (feature, temperatureType) => {
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "row-container feature",
  });

  const featureName = createElementAndSetAttribute("p", {
    "class": "feature-name",
  });
  featureName.innerText = `${feature["name"]}:`;

  const tempController = createElementAndSetAttribute("input", {
    "type": "number",
    "id": `${feature["id"]}`,
    "min": `${temperatureType["values"]["min"]}`,
    "max": `${temperatureType["values"]["max"]}`,
    "value": `${feature["current-value"]}`,
  });

  // Add feature name (temperature) to main container (temperature container)
  mainContainer.appendChild(featureName);
  // Add temperature controller to main container (temperature container)
  mainContainer.appendChild(tempController);

  // Return the whole temperature feature node
  return mainContainer;
};
