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
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

const axios = require("axios");

async function getTotalGoals(team, year) {
  const asTeam1Goals = await getGoals(team, year, 1);
  const asTeam2Goals = await getGoals(team, year, 2);

  console.log("goals:", asTeam1Goals + asTeam2Goals);

  return asTeam1Goals + asTeam2Goals;
}

async function getGoals(team, year, teamPosition, page = 1, count = 0) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team${teamPosition}=${team}&page=${page}`
  );

  const goals = data.data
    .map((match) => match[`team${teamPosition}goals`])
    .reduce((prev, current) => prev + parseInt(current), 0);

  count += goals;

  if (page < data.total_pages) {
    return getGoals(team, year, teamPosition, page + 1, count);
  }

  return count;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const team = readLine();

  const year = parseInt(readLine().trim(), 10);

  const result = await getTotalGoals(team, year);

  ws.write(result + "\n");

  ws.end();
}
