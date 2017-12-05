

document.getElementById('btn').addEventListener('click', fetchWeather);

document.getElementById('locationBtn').addEventListener('click', geoLocation);

//location popup
function geoLocation() {
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(takeGeo);
    } 
}

//taking the long and lat
function takeGeo (position) {
	var lat = position.coords.latitude;
    var lon = position.coords.longitude;
}


//Weather api call
function fetchWeather(){
	var xhr = new XMLHttpRequest();

	var path = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var city = document.getElementById('city').value;
	var apiKey = '&appid=31b7dd9c9f48307dfb4cc32731d1427f';
	var units = '&units=metric';

	var url = path + city + apiKey + units;



	xhr.open('GET', url, true)

	xhr.onload = function(){
		if(this.status == 200){
			var data = JSON.parse(this.responseText);
				
			var output = '';
			output += 
				'<h4>'+data.main.temp+' &#8451</h4>';
				

			document.getElementById('weather').innerHTML = output;
		}
		else{
			var output = '';
			output += 
				'<h5>Please enter a correct city name.</h5>';
				

			document.getElementById('weather').innerHTML = output;
		}
	}

	xhr.send();
}