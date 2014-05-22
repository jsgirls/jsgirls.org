jsgirls.Map = function (selector) {
  this.map = null;

  // get map div
  var mapCanvas = document.querySelector(selector);
  if (!mapCanvas) {
    throw new Error('Map canvas does not exist.');
  }
  
  // get latitude and longitude
  var lat = mapCanvas.getAttribute('data-lat') || 35.6604239;
  var lng = mapCanvas.getAttribute('data-lng') || 139.7292429;
  var zoom = mapCanvas.getAttribute('data-zoom') || 15;
  var title = mapCanvas.getAttribute('data-title') || '';
  var latlng = new google.maps.LatLng(lat - 0, lng - 0);

  // initialize map
  this.map = new google.maps.Map(mapCanvas, {
    center: latlng,
    zoom: (zoom - 0) || 12,
    mapTypeControl: false,
    overviewMapControl: true,
    panControl: true,
    rotateControl: false,
    scaleControl: true,
    zoomControl: true
  });
  
  // put pin and set it
  var marker = new google.maps.Marker({
    position: latlng,
    title: title
  });
  marker.setMap(this.map);
};