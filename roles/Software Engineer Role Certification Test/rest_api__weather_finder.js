const axios = require("axios");

async function getTemperature(name) {
  return getWeather(name);
}

async function getWeather(name) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/weather?name=${name}`
  );

  return data.data[0].weather.split(" ")[0];
}
