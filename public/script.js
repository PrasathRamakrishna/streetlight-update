// scripts.js

document.addEventListener("DOMContentLoaded", function () {
  // Simulated sensor data for streetlights
  const sensorData = {
    "light-1-1": "on",
    "light-1-2": "off",
    "light-1-3": "on",
    "light-1-4": "on",
    "light-1-5": "off",
    "light-2-1": "off",
    "light-2-2": "on",
    "light-2-3": "off",
    "light-2-4": "on",
    "light-2-5": "on",
    "light-3-1": "on",
    "light-3-2": "on",
    "light-3-3": "off",
    "light-3-4": "on",
    "light-3-5": "on",
    "light-4-1": "off",
    "light-4-2": "on",
    "light-4-3": "on",
    "light-4-4": "off",
    "light-4-5": "on",
    "light-5-1": "off",
    "light-5-2": "on",
    "light-5-3": "off",
    "light-5-4": "on",
    "light-5-5": "off",
    "light-6-1": "on",
    "light-6-2": "on",
    "light-6-3": "on",
    "light-6-4": "off",
    "light-6-5": "on",
  };

  // Function to update lights based on sensor data
  function updateLights(sensorData) {
    for (const [id, status] of Object.entries(sensorData)) {
      const lightElement = document.getElementById(id);
      if (lightElement) {
        if (status === "on") {
          lightElement.classList.add("on");
        } else {
          lightElement.classList.remove("on");
        }
      }
    }
  }

  // Initial update
  updateLights(sensorData);

  // Optionally, you could refresh the sensor data periodically
  // setInterval(() => updateLights(sensorData), 10000); // every 10 seconds
});
