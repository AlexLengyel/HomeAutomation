console.log(jsonObject);

// Initialize Control Panel
const initControlPanel = (jsonObject, controlPanelId) => {
  const controlPanel = document.getElementById(controlPanelId);

  const featureTypes = jsonObject["feature-types"];
  const houseFeatures = jsonObject["home"]["house"]["features"];
  const rooms = jsonObject["home"]["rooms"];

  // Add the whole house features node to the control panel
  controlPanel.appendChild(setupHouseFeatures(houseFeatures, featureTypes));

  // Add the whole rooms and their features node to the control panel
  controlPanel.appendChild(setupRoomsAndTheirFeatures(rooms, featureTypes));
};

initControlPanel(jsonObject, "control-panel");
