const apiKey = require("./apiKey");
const got = require("got");

class Weather {
  fetchWeatherData = (city, callback) => {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    got(apiUrl).then((response) => {
      const weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  };
}

// module.exports = Weather;

a = new Weather();
a.fetchWeatherData("Nottingham", (a) => {
  console.log(a);
});
