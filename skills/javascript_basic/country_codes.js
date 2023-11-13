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

const axios = require("axios");

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

  const coutry = await getCountry(code);
  console.log("found country:", coutry);

  return coutry.name;
}

async function getCountry(code, pageIndex = 1) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/countries?page=${pageIndex}`
  );

  const theCountry = data.data.find((item) => {
    return item.alpha2Code === code;
  });

  if (theCountry) {
    return theCountry;
  }

  return getCountry(code, pageIndex + 1);
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const code = readLine().trim();

  const name = await getCountryName(code);

  ws.write(`${name}\n`);
}
