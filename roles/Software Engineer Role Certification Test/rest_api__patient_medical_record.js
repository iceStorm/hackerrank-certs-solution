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
 * Complete the 'getAverageTemperatureForUser' function below.
 *
 * URL for cut and paste
 * https://jsonmock.hackerrank.com/api/medical_records?userId=<userId>&page=<page>
 *
 * The function is expected to return a String value.
 * The function accepts a userId argumnent (Integer).
 *
 * In the case of an empty array result, return value '0'
 */

const axios = require("axios");

async function getAverageTemperatureForUser(userId) {
  const records = await getPatientRecords(userId);

  if (!records.length) {
    return "0";
  }

  const averageTemparature =
    records.reduce(
      (prev, current) => prev + current.vitals.bodyTemperature,
      0
    ) / records.length;

  console.log("total records:", records.length);
  console.log("average temparature:", averageTemparature);

  return averageTemparature.toFixed(1);
}

async function getPatientRecords(userId, records = [], page = 1) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/medical_records?userId=${userId}&page=${page}`
  );

  console.log(data.data.length, records.length, page);

  records.push(...data.data);

  if (data.page < data.total_pages) {
    // recursively call to explore the remaining pages
    return getPatientRecords(userId, records, page + 1);
  }

  return records;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const id = parseInt(readLine());

  const result = await getAverageTemperatureForUser(id);

  ws.write(result);

  ws.end();
}
