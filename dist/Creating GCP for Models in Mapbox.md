Creating GCP for Models in Mapbox

1. Use Pearl Buildings Spline file for referencing to the map. The red boxes are already set to behave like a ground control point reference file in a 1 meter pixel grid.
   ![spline](Creating GCP for Models in Mapbox)

1. Export a GLB file as something like `GCP.glb`
1. Open the getCoords.html file.
1. Click anywhere in an open space (not under a building) to return an arbitrary point that will serve as your upper left corner coordinate.
1. Copy this coordinate pair to the variable start in the getCoords.html file (e.g. const start = [-98.48154785679674, 29.44235903399378];)
1. and leave out any scaling.
1.
