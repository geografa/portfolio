import mapboxgl from "mapbox-gl";
export function popup(map) {
  // Create a popup object for the selected feature
  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  // When the feature is clicked, open a popup at the location of the feature
  map.on("click", "hexagons-layer", function (e) {
    // Change the cursor style as a UI indicator
    map.getCanvas().style.cursor = "pointer";

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].id;

    // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });
}
