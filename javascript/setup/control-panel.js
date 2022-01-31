const controlPanelId = "control-panel-container";
const homeData = jsonObject;

// Initialize control panel
const initControlPanel = (homeData, controlPanelId) => {
  const controlPanel = document.getElementById(controlPanelId);

  const featureTypes = homeData["feature-types"];
  const houseFeatures = homeData["home"]["house"]["features"];
  const rooms = homeData["home"]["rooms"];

  // Add the whole rooms and their features node to the control panel
  controlPanel.appendChild(setupRoomsAndTheirFeatures(rooms, featureTypes));
  // Add the whole house features node to the control panel
  controlPanel.appendChild(setupHouseFeatures(houseFeatures, featureTypes));
};

// --------------------------------------------------------------------------------------------------------------------

// Starter function call
initControlPanel(homeData, controlPanelId);

// --------------------------------------------------------------------------------------------------------------------
