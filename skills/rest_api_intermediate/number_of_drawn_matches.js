"use strict";

const fs = require("fs");

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
 * Complete the 'getNumDraws' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER year as parameter.
 */

const axios = require("axios");

/**
 * @param {number} year
 */
async function getNumDraws(year) {
  const allDrawMatches = await Promise.all(
    new Array(10).fill(0).map((value, index) => {
      return getMatchesWithDrawScores(year, index);
    })
  );

  return allDrawMatches.reduce((prev, current) => prev + current, 0);
}

async function getMatchesWithDrawScores(year, drawsCount) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1goals=${drawsCount}&team2goals=${drawsCount}`
  );

  console.log("draws try:", drawsCount, data.total);

  return data.total;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim(), 10);

  const result = await getNumDraws(year);

  ws.write(result + "\n");

  ws.end();
}
