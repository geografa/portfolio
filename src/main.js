//  main.js

import _ from 'lodash';
import './style.css';
import { initializeMap } from './mapModule.js';
import { fetchData } from './dataModule.js';
// import { spinGlobe } from './spinModule.js';


const map = initializeMap();

map.on('load', async () => {
  try {
    const data = await fetchData('./data/countries.geojson');
    map.addSource('countries', {
      type: 'geojson',
      data,
    });
    map.addLayer({
      id: 'countries',
      type: 'fill-extrusion',
      source: 'countries',
      paint: {
        'fill-extrusion-color': '#FEB710',
        'fill-extrusion-opacity': 0.6,
        'fill-extrusion-height': [
          'interpolate',
          ['linear'],
          ['get', 'pop_est'], // find the population estimate and create a height based on it with 7 classes
          0, 0,
          1000000, 1000,
          10000000, 2000,
          100000000, 3000,
          500000000, 4000,
          1000000000, 5000,
          2000000000, 6000
        ],
      },
    });
  } catch (error) {
    console.error('Error:', error);
  }
});

window.addEventListener('resize', () => {
  map.resize();
});