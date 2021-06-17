async function handleWeatherRequest(event) {
	event.preventDefault();

	const city = document.querySelector('input[name="city"]').value;

	const apiKey = "870b1b10b58578f725b70b13aff6c357";

	const urlString =
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		city +
		"&APPID=" +
		apiKey;

	const response = await fetch(urlString);
	const data = await response.json();

	// The temp is in Kelvin: not nice for humans!
	const readableTemp = ((data.main.temp - 273.15) * 9) / 5 + 32;

	const tempFeelsLike = ((data.main.feels_like - 273.15) * 9) / 5 + 32;

	const humidity = data.main.humidity;

	const clouds = data.clouds.all;

	document.querySelector("#weather-result").innerText =
		"The weather in " + city + " is currently " + readableTemp;

	document.querySelector("#weather-feeling").innerText =
		"But the weather in " + city + " feels like " + tempFeelsLike;

	document.querySelector("#humidity").innerText =
		"Also, the humidity in " + city + " is " + humidity + "%!";

	document.querySelector("#clouds").innerText =
		"And the cloud percentage is " + clouds + "!";
}

document
	.querySelector("#weather-search")
	.addEventListener("submit", handleWeatherRequest);
