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

async function getTeams(year, k) {
  // write your code here
  // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>

  console.log("year:", year, "k:", k);

  const results = await getMatches(year, k);
  console.log("results:", results);

  const matchedTeams = [];

  Object.entries(results)
    .filter(([name, matchesCount]) => matchesCount + 1 >= k)
    .forEach(([name]) => matchedTeams.push(name));

  return matchedTeams.sort();
}

async function getMatches(year, k, page = 1, teams = {}) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${page}`
  );

  if (page === 1) {
    console.log("data:", data);
  }

  data.data.forEach((item) => {
    if (item.team1 in teams) {
      teams[item.team1] += 1;
    } else {
      teams[item.team1] = 0;
    }

    if (item.team2 in teams) {
      teams[item.team2] += 1;
    } else {
      teams[item.team2] = 0;
    }
  });

  if (page < data.total_pages) {
    return getMatches(year, k, page + 1, teams);
  }

  return teams;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = parseInt(readLine().trim());
  const k = parseInt(readLine().trim());

  const teams = await getTeams(year, k);

  for (const team of teams) {
    ws.write(`${team}\n`);
  }
}
