export function highLightHex(map) {
  // create a setInterval that will run every 1000 milliseconds and console.log a random hexagon feature's id

  // wait for all the features to load before running the setIntervall function below

  setInterval(() => {
    const features = map.querySourceFeatures("hexagons");

    console.log(features.length);
    const randomFeature = features[Math.floor(Math.random() * features.length)];

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
  }, 1000);
}
