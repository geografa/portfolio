import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2ptYjNtZWxnMDBrdDNwbnVicGJzOWg2NyJ9.9OulyCe3kEqMAXPbx1mKUA";

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
