import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY20wdTdlcTM3MTRsZDJxcGxmcW85MzQxMCJ9.H-wLHlLXdbtIQ9R1zsDuJg";

export function initializeMap() {
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/grafa/cm16yuubd01us01q1di3e2soy",
    projection: "globe",
    zoom: 2,
    center: [-20, 0],
    bearing: 0,
    // hash: true
  });
}
