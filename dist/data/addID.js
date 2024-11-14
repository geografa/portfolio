const fs = require("fs");

// Read the GeoJSON file
const geojson = JSON.parse(fs.readFileSync("./tcp/RI-Paths.geojson"));

// Add a unique ID to each feature
geojson.features.forEach((feature, index) => {
  feature.id = index++;
  console.log(feature.properties.id);
});

// Write the updated GeoJSON back to the file
fs.writeFileSync("./tcp/RI-Paths.geojson", JSON.stringify(geojson, null, 2));

console.log("Unique IDs added to each feature.");
