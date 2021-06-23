async function handleWeatherRequest(e) {
	e.preventDefault();

	const city = $('input[name="city"]').val();

	const apiKey = "870b1b10b58578f725b70b13aff6c357";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

	const response = await fetch(url);
	const data = await response.json();

	// Convert Kelvin to Fahrenheit
	const readableTemp = ((data.main.temp - 273.15) * 9) / 5 + 32;
	const tempFeelsLike = ((data.main.feels_like - 273.15) * 9) / 5 + 32;
	const humidity = data.main.humidity;
	const clouds = data.clouds.all;

	$("#weather-result").text(
		`The weather in ${city} is currently ${readableTemp}`
	);
	$("#weather-feeling").text(
		`But the weather in ${city} feels like ${tempFeelsLike}`
	);
	$("#humidity").text(`Also, the humidity in ${city} is ${humidity}%!`);
	$("#clouds").text(`And the cloud percentage is ${clouds}!`);
}

$("#weather-search").on("submit", handleWeatherRequest);
