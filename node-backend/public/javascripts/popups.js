
// // Import the leaflet package
// var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([43.659752, -79.378161], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 21
}).addTo(map);

// Adds a popup marker to the webmap for GGL address
L.circleMarker([43.659752, -79.378161]).addTo(map)
	.bindPopup(
		'MON 304<br>' + 
		'Monetary Times Building<br>' +
		'341 Victoria Street<br>' + 
		'Toronto, Ontario, Canada<br>' +
		'M5B 2K3<br><br>' + 
		'Tel: 416-9795000 Ext. 5192'
	)
	.openPopup();

map.on

map.on('click', function(e) {        
	var popLocation= e.latlng;
	console.log(`Clicked`);
    console.log(popLocation);
    var marker = L.circleMarker(Object.values(popLocation), {
        elevation: 260.0,
        title: "Testing"
    }).addTo(map);

    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    fetch('/create', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer abcdxyz',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lat,
            lng,
        }),
    }).then((res) => {
            return res.json();
        }).then((data) => console.log(data)
    );

    marker.bindPopup("This is a test").openPopup();     
});


