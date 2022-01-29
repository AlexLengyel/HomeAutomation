const temperatureOnClick = (
  direction,
  thermostatId,
  thermostatValues,
  floorPlanClassName
) => {
  // Get light element by ID
  const temperatureValueText = document.getElementById(thermostatId);

  // Get temperature's value by the value attribute
  const temperatureValue = parseFloat(
    temperatureValueText.getAttribute("value")
  );

  const { minValue, maxValue, modifierValue } = thermostatValues;
  let newTemperatureValue = null;

  // Increase the temperature's value
  if (direction === "up" && temperatureValue < maxValue) {
    newTemperatureValue = temperatureValue + modifierValue;
    // Decrease the temperature's value
  } else if (direction === "down" && temperatureValue > minValue) {
    newTemperatureValue = temperatureValue - modifierValue;
  }

  // Set the new temperature's value and text
  if (newTemperatureValue !== null) {
    setAttributes(temperatureValueText, {
      "value": newTemperatureValue,
    });
    temperatureValueText.innerText = newTemperatureValue.toFixed(1);
  }
};
