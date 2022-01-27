const controlPanelId = "control-panel";
const homeData = jsonObject;
console.log(homeData);

// Initialize Control Panel
const initControlPanel = (homeData, controlPanelId) => {
  const controlPanel = document.getElementById(controlPanelId);

  const featureTypes = homeData["feature-types"];
  const houseFeatures = homeData["home"]["house"]["features"];
  const rooms = homeData["home"]["rooms"];

  // Add the whole house features node to the control panel
  controlPanel.appendChild(setupHouseFeatures(houseFeatures, featureTypes));
  // Add the whole rooms and their features node to the control panel
  controlPanel.appendChild(setupRoomsAndTheirFeatures(rooms, featureTypes));
};

initControlPanel(homeData, controlPanelId);
