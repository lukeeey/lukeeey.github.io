$(document).ready(function() {
//var body = document.getElementById('body');
var nav = navigator;
var lol = "";

$.ajaxSetup({
	async: false
});

function sub(text) {
	document.getElementById('lol').innerHTML += '<h3>' + text + '</h3><hr>';
}

function add(title, text) {
    document.getElementById('lol').innerHTML += '<b>' + title + ':</b> ' + text + '<br>';
}
sub('General');
add('User Agent', nav.userAgent);

sub('<br>IP');
$.getJSON('http://ip-api.com/json', function(data) {
    add('Address', data.query);
	add('ISP', data.isp);
	add('Company', data.as);
	add('Organization', data.org);
	add('Country', data.country);
	add('City', data.city);
	add('Timezone', data.timezone);
	add('Latitude', data.lat);
	add('Longitude', data.lon);
});

sub('<br>Location');
navigator.geolocation.getCurrentPosition(function (pos) {
	var crd = pos.coords;
	add("Latitude: " + crd.latitude);
	add("Longitude: " + crd.longitude);
	add("More or less: " + crd.accuracy + " meters");
}, function (error) {
	document.write("Error getting location: " + error.message + " (code: " + error.code + ")");
}, {
	enableHighAccuracy: true
});


sub('<br>Battery');
navigator.getBattery().then(function (battery) {
    add("Battery", (battery.charging ? "charging" : "not charging"));
    add("Battery Level", battery.level * 100 + "%");
    add("Charging Time", battery.chargingTime + " seconds");
   
});

});




//document.write(lol);
