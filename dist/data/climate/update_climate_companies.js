const fs = require("fs");
const path = require("path");
const togeojson = require("@tmcw/togeojson");
const { DOMParser } = require("xmldom");

// Path to the KML file
const kmlFilePath = path.join(__dirname, "Climate Solutions Companies.kml");

// Path to the output GeoJSON file
const geojsonFilePath = path.join(__dirname, "climate_companies.geojson");

// Read the KML file
fs.readFile(kmlFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the KML file:", err);
    return;
  }

  // Parse the KML data
  const kml = new DOMParser().parseFromString(data, "text/xml");

  // Convert KML to GeoJSON
  const geojson = togeojson.kml(kml);

  // Initialize a counter for unique IDs
  let idCounter = 1;

  // Iterate through each feature
  geojson.features.forEach((feature) => {
    // Filter properties to only include name, description, and styleUrl
    const { name, description, styleUrl } = feature.properties;
    feature.properties = { name, description, styleUrl };

    if (typeof feature.properties.description === "string") {
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

  // Write the updated GeoJSON to the file
  fs.writeFile(
    geojsonFilePath,
    JSON.stringify(geojson, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing the GeoJSON file:", err);
        return;
      }
      console.log("GeoJSON file has been created and updated successfully.");
    }
  );
});
