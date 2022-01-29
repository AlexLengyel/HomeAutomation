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
  // Add temperature feature card to features container
  featuresContainer.appendChild(
    initTemperatureCard(features["temperature"], featureTypes["temperature"])
  );
  // Add features container to main container
  mainContainer.appendChild(featuresContainer);

  // Return the whole house feature node
  return mainContainer;
};

// ----------------------------------------------------------------------------------------

// Initialize temperature feature card
const initTemperatureCard = (temperature, temperatureFeatureType) => {
  // Create main container (card) for the temperature feature
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "column-container card-container-style control-card-container",
  });

  // Create feature name ("Temperature")
  const featureName = createElementAndSetAttribute("h3", {
    "class": "black-title card-name",
  });
  featureName.innerText = temperature["name"];

  // Create wrapper for thermostat container
  const featureContainerWrapper = createElementAndSetAttribute("div", {
    "class": "center-container",
    "id": "thermostat-container-wrapper",
  });

  // Add feature name ("Temperature") to main container (card container)
  mainContainer.appendChild(featureName);

  const thermostatId = temperature["id"];
  const minValue = parseFloat(temperatureFeatureType["values"]["min"]);
  const maxValue = parseFloat(temperatureFeatureType["values"]["max"]);
  const modifierValue = parseFloat(
    temperatureFeatureType["values"]["modifier"]
  );
  const currentValue = parseFloat(temperature["current-value"]).toFixed(1);
  const values = { minValue, maxValue, modifierValue, currentValue };
  const scaleSymbol = temperature["symbol"];

  // Add thermostat to thermostat container wrapper
  featureContainerWrapper.appendChild(
    initThermostat(thermostatId, values, scaleSymbol)
  );

  /* Add thermostat container wrapper and within all the containers and functions
  to main container (card container) */
  mainContainer.appendChild(featureContainerWrapper);

  // Return the whole temperature feature node
  return mainContainer;
};

// ----------------------------------------------------------------------------------------

const initThermostat = (thermostatId, thermostatValues, scaleSymbol) => {
  // Create thermostat container for thermostat (temperature controller)
  const mainContainer = createElementAndSetAttribute("div", {
    "class": "center-container",
    "id": "thermostat-container",
  });

  // Create display container
  const displayContainer = createElementAndSetAttribute("div", {
    "class": "center-container",
    "id": "thermostat-display-container",
  });

  const { currentValue } = thermostatValues;

  // Create paragraph for temperature's value
  const valueText = createElementAndSetAttribute("p", {
    "class": "thermostat-text",
    "id": thermostatId,
    "value": currentValue,
  });
  valueText.innerText = currentValue;

  // Create paragraph for the scale's symbol
  const scaleSymbolText = createElementAndSetAttribute("p", {
    "class": "thermostat-text",
  });
  scaleSymbolText.innerText = scaleSymbol;

  // Create create container for the arrow's icons
  const arrowsContainer = createElementAndSetAttribute("div", {
    "id": "thermostat-arrows-container",
  });

  // Add valueText and scaleSymbolText to display's container
  displayContainer.appendChild(valueText);
  displayContainer.appendChild(scaleSymbolText);

  const arrowUpImg = "assets/arrows/arrow_up.png";
  const arrowDownImg = "assets/arrows/arrow_down.png";
  // Create arrow up icon and set it's attributes
  const arrowUpIcon = createElementAndSetAttribute("img", {
    "src": arrowUpImg,
    "class": "thermostat-arrow-icon",
    "alt": "Arrow Up Icon",
  });
  // Create arrow down icon and set it's attributes
  const arrowDownIcon = createElementAndSetAttribute("img", {
    "src": arrowDownImg,
    "class": "thermostat-arrow-icon",
    "alt": "Arrow Down Icon",
  });

  /* Add on click event listener to arrow's icons
  by using temperatureOnClick callback function to add the logic to it */
  arrowUpIcon.addEventListener("click", () =>
    temperatureOnClick(
      "up",
      thermostatId,
      thermostatValues,
      "floor-plan-card-container"
    )
  );
  arrowDownIcon.addEventListener("click", () =>
    temperatureOnClick(
      "down",
      thermostatId,
      thermostatValues,
      "floor-plan-card-container"
    )
  );

  // Add arrow's icons to arrows container
  arrowsContainer.appendChild(arrowUpIcon);
  arrowsContainer.appendChild(arrowDownIcon);

  // Add display's container and arrows container to main container
  mainContainer.appendChild(displayContainer);
  mainContainer.appendChild(arrowsContainer);

  // Return thermostat node
  return mainContainer;
};
