
// // Import the leaflet package
// var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = L.map('map').setView([43.659752, -79.378161], 20);

var Icon = L.icon({
    iconUrl: './imgs/truck.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 21
}).addTo(map);

map.on('click', function(e) {
	try {
		let lat = e.latlng.lat;
		let lng = e.latlng.lng;
		window.location.href = `http://localhost:3000/onclickformpage?lat=${lat}&lng=${lng}`;
	} catch (e) {
		console.log(e);
	}
});

function GetData() {
    try {
        fetch('/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
                return res.json();
            }).then((data) => createpopups(data)
        );
    } catch (e) {
        console.log(`No Live Data Could Be fetched ${e}`)
    }
}

function createpopups(data){
	data = JSON.parse(JSON.stringify(data));
	// console.log(data)
	let text = '';
	let lat = ''
	let lng = ''
	for (var i = 0; i < data.length; i++) {
		text = `<h1>${data[i]['type_name']} (${data[i]['food_name']})</h1><br>${data[i]['truck_desc']}<br>Rating : ${data[i]['rating']}/5`;
		// console.log(text)
		// console.log(data[i]['lat'])
		// console.log(data[i]['lng'])
		lat = parseFloat(data[i]['lat']);
		lng = parseFloat(data[i]['lng']);
		/*
			L.circleMarker([43.659752, -79.378161]).addTo(map)
				.bindPopup(
					'Here is a sample icon'
				)
				.openPopup();
		*/
		var latlng = L.latLng(lat, lng);
		L.marker(
				latlng, {icon: Icon}
			).addTo(map)
			.bindPopup(
				text
			)
		.openPopup();
		// console.log(data[i]['loc_id']);

		L.marker([43.659752, -79.378161], {icon: Icon}).addTo(map)
			.bindPopup(
				'Here is a sample icon'
			)
			.openPopup();
	}

}

window.onload = (event) => {
	GetData();
};


