
// // Import the leaflet package
// var L = require('leaflet');

// Creates a leaflet map binded to an html <div> with id "map"
// setView will set the initial map view to the location at coordinates
// 13 represents the initial zoom level with higher values being more zoomed in
var map = new L.map('map').setView([43.659752, -79.378161], 20);

// Adds the basemap tiles to your web map
// Additional providers are available at: https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 21
}).addTo(map);

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
		L.circleMarker(
				latlng
			).addTo(map)
			.bindPopup(
				text
			)
		.openPopup();
		// console.log(data[i]['loc_id']);

		L.circleMarker([43.659752, -79.378161]).addTo(map)
			.bindPopup(
				'Here is a sample icon'
			)
			.openPopup();
	}

}

window.onload = (event) => {
	GetData();
};

// map.on('click', function(e) {        
// 	var popLocation= e.latlng;
//     // getelementbyclassname('hiddenForm').style('display') = show
//     // set map to 50% left of screen and form to 50% right of screen
// 	console.log(`Clicked`);
//     console.log(popLocation);
//     var marker = L.circleMarker(Object.values(popLocation), {
//         elevation: 260.0,
//         title: "Testing"
//     }).addTo(map);

//     var lat = e.latlng.lat;
//     var lng = e.latlng.lng;

//     fetch('/create', {
//         method: 'POST',
//         headers: {
//             Authorization: 'Bearer abcdxyz',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             lat,
//             lng,
//         }),
//     }).then((res) => {
//             return res.json();
//         }).then((data) => console.log(data)
//     );

//     marker.bindPopup("This is a test").openPopup();     
// });


