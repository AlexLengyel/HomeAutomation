// House Features

// Setup house features (house features: have an impact on to the whole house)
const setupHouseFeatures = (features, featureTypes) => {
  // Create main container for the house's features nodes
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container impact-container",
  });

  // Create title ("House")
  const title = createElementAndSetAttribute("h2", {
    "class": "white-title impact-name",
  });
  title.innerText = "House";

  // Create control cards container for the house's features
  const featuresContainer = createElementAndSetAttribute("div", {
    "class": "control-cards-container",
  });

  // Add title to main container (house container)
  mainContainer.appendChild(title);

  // Add temperature feature to features container
  featuresContainer.appendChild(
    initTemperature(features["temperature"], featureTypes["temperature"])
  );

  // Add features container to main container
  mainContainer.appendChild(featuresContainer);

  // Return the whole house feature node
  return mainContainer;
};

// ----------------------------------------------------------------------------------------

// Initialize temperature feature (return node)
const initTemperature = (feature, temperatureType) => {
  // Create main container (card) for the temperature feature
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container card-container-style control-card-container",
  });

  // Create feature name title ("Temperature")
  const featureName = createElementAndSetAttribute("h3", {
    "class": "black-title card-name",
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
