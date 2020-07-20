/*eslint-disable*/

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYWthc2g1NCIsImEiOiJjazJ3ZW1pNmIwMTJxM21vbW4xOGtqOXRwIn0.tNpkzST7tf0qFFxMcaKzGA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/akash54/ck2x09jbb0z7h1crtcye00i1h',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>${loc.day}: ${loc.description}`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 200,
      left: 100,
      right: 100
    }
  });
};
