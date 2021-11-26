const apiKey = require("./apiKey");
const got = require("got");

class Weather {
  fetchWeatherData = (city) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    let weatherData = null;

    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      console.log(weatherData);
    });
  };
}

// module.exports = Weather;

a = new Weather();
console.log(a.fetchWeatherData("Kaunas"));
