"use strict";

const fs = require("fs");
const https = require("https");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getTemperature' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/weather?name=<name>
 *
 * The function is expected to return an Integer.
 * The function accepts a singe parameter name.
 */

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

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const name = readLine();

  const result = await getTemperature(name);

  ws.write(result.toString());

  ws.end();
}
