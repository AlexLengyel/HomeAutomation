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

  if (newTemperatureValue !== null) {
    changeThermostatValue(temperatureValueText, newTemperatureValue);
  } else {
    newTemperatureValue = temperatureValue;
  }

  changeFloorPlanBackgroundColor(
    thermostatValues,
    floorPlanClassName,
    newTemperatureValue
  );
};

// ----------------------------------------------------------------------------------------

// Change the thermostat's display value (temperature)
const changeThermostatValue = (temperatureValueText, newTemperatureValue) => {
  // Set the new temperature's value and text
  setAttributes(temperatureValueText, {
    "value": newTemperatureValue,
  });
  temperatureValueText.innerText = newTemperatureValue.toFixed(1);
};

// ----------------------------------------------------------------------------------------

// Change the floor plans background color based on the thermostat's value
const changeFloorPlanBackgroundColor = (
  thermostatValues,
  floorPlanClassName,
  newTemperatureValue
) => {
  // Calculatings
  const { midValue, halfValueRange } = thermostatValues;
  const maxColorValue = 255;
  const minColorValue = 0;
  const colorChangerValue = parseInt(
    (maxColorValue - minColorValue) / halfValueRange
  );
  const absValueDiff = Math.abs(midValue - newTemperatureValue);
  const newColorValue = absValueDiff * colorChangerValue;

  // Calculates the new rgb value
  let rgbValue = null;
  if (newTemperatureValue > midValue) {
    const blueValue = maxColorValue - newColorValue;
    rgbValue = `rgb(255, 255, ${blueValue})`;
  } else if (newTemperatureValue < midValue) {
    const redValue = maxColorValue - newColorValue;
    rgbValue = `rgb(${redValue}, 255, 255)`;
  } else {
    rgbValue = `rgb(255, 255, 255)`;
  }

  const floorPlans = document.getElementsByClassName(floorPlanClassName);

  // Changes each floor plan's background color
  for (const floorPlan of floorPlans) {
    floorPlan.style.backgroundColor = rgbValue;
  }
};
