import "./style.css";
import { initializeMap } from "./mapModule.js";
import { toggleSidebar } from "./sideBar.js";
import { spinGlobe } from "./spinGlobe.js";
import { highLightHex } from "./highLightHex.js";
//
const map = initializeMap();

map.on("load", async () => {
  const response = await fetch("./data/hexagons.geojson");
  const data = await response.json();
  map.addSource("hexagons", {
    type: "geojson",
    data: data,
  });
  map.addLayer(
    {
      id: "hexagons-layer",
      type: "fill-extrusion",
      source: "hexagons",
      paint: {
        "fill-extrusion-height": 100000,
        "fill-extrusion-color": "#e9e90c",
        "fill-extrusion-opacity": 0.6,
      },
    },
    "waterway-label"
  );
  map.addLayer(
    {
      id: "hexagons-outline",
      type: "line",
      source: "hexagons",
      paint: {
        "line-color": "#ffffff",
        "line-width": 0.6,
        "line-opacity": 0.6,
      },
    },
    "waterway-label"
  );
  toggleSidebar(map);
  spinGlobe(map);
  highLightHex(map);
});
