export function highLightHex(map) {
  // create a setInterval that will run every 1000 milliseconds and console.log a random hexagon feature's id
  setInterval(() => {
    const features = map.querySourceFeatures("hexagons");
    const randomFeature = features[Math.floor(Math.random() * features.length)];
    console.log(randomFeature.id);

    map.setPaintProperty(
      "hexagons-layer",
      "fill-extrusion-color", //
      ["case", ["==", ["id"], randomFeature.id], "#197138", "#e9e90c"]
    );
    map.setPaintProperty(
      "hexagons-layer",
      "fill-extrusion-height", //
      ["case", ["==", ["id"], randomFeature.id], 200000, 100000]
    );
    // if the user clicks the feature that matches the randomFeature.id, console.log the feature's id
    map.on("click", "hexagons-layer", (e) => {
      if (e.features[0].id === randomFeature.id) {
      }
    });
  }, 10000);
}
