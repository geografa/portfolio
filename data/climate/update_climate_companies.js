const fs = require("fs");
const path = require("path");

// Path to the climate_companies.geojson file
const filePath = path.join(__dirname, "climate_companies.geojson");

// Read the GeoJSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Parse the GeoJSON data
  let geojson = JSON.parse(data);

  // Initialize a counter for unique IDs
  let idCounter = 1;

  // Iterate through each feature
  geojson.features.forEach((feature) => {
    if (
      feature.properties &&
      typeof feature.properties.description === "string"
    ) {
      // Split the description value at '|'
      const parts = feature.properties.description.split("|");
      if (parts.length > 1) {
        // Set the new 'desc' key with the value before '|'
        feature.properties.desc = parts[0].trim();
      }

      // Find any part of the description that starts with 'http'
      const urlPart = parts.find((part) => part.trim().startsWith("http"));
      if (urlPart) {
        // Set the new 'url' key with the URL value
        feature.properties.url = urlPart.trim();
      }
    }

    // Add a unique ID to each feature
    feature.properties.id = idCounter++;
  });

  // Write the updated GeoJSON back to the file
  fs.writeFile(filePath, JSON.stringify(geojson, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }
    console.log("File has been updated successfully.");
  });
});
