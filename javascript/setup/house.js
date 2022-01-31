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
    setupTemperatureCard(features["temperature"], featureTypes["temperature"])
  );
  // Add features container to main container
  mainContainer.appendChild(featuresContainer);

  // Return the whole house feature node
  return mainContainer;
};
