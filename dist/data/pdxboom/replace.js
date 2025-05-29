import { readFileSync, writeFileSync } from "fs";

// Load the GeoJSON file
const filePath = "./PDXBOOM.geojson";
const geojson = JSON.parse(readFileSync(filePath, "utf8"));

// Define the mapping of icon URLs to text descriptions
const iconMapping = {
  "123-red-dot.png": "very loud",
  "22-blue-dot.png": "loud",
  "157-yellow-dot.png": "noticeable",
  "61-green-dot.png": "did not hear it",
};

// Process each feature in the GeoJSON
geojson.features.forEach((feature) => {
  if (feature.properties && feature.properties.icon) {
    const iconUrl = feature.properties.icon.split("/").pop(); // Extract the file name from the URL
    if (iconMapping[iconUrl]) {
      feature.properties.icon = iconMapping[iconUrl]; // Replace the icon URL with the corresponding text
    }
  }
});

// Save the updated GeoJSON back to the file
writeFileSync(filePath, JSON.stringify(geojson, null, 2), "utf8");

console.log("GeoJSON file updated successfully!");
