const Weather = require("./weather");

const weather = new Weather();

class Thermostat {
  constructor(weather) {
    this.temperature = 20;
    this.minimum = 10;
    this.maximum = 25;
    this.weather = weather;
  }

  setCity = (city) => {
    this.weather.fetchWeatherData(city, (weatherData) => {
      this.temperature = weatherData.main.temp;
    });
  };

  getTemperature = () =>
    this.temperature === this.maximum
      ? `${this.temperature} (maximum reached)`
      : this.temperature;

  setPowerSavingMode = (onOrOff) =>
    onOrOff ? (this.maximum = 25) : (this.maximum = 32);

  up = () => {
    this.temperature === this.maximum
      ? this.temperature
      : (this.temperature += 1);
  };

  down = () => {
    this.temperature === this.minimum
      ? this.temperature
      : (this.temperature -= 1);
  };

  reset = () => (this.temperature = 20);

  energyUsage = () => {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature >= 18 && this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  };
}

module.exports = Thermostat;

const thermostat = new Thermostat(weather);
thermostat.setCity("Barcelona");
// setTimeout(() => {
//   console.log(thermostat.getTemperature());
// }, 1000);

console.log(thermostat.getTemperature());
