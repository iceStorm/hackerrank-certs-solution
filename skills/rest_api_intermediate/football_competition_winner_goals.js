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
 * Complete the 'getWinnerTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING competition
 *  2. INTEGER year
 */

const axios = require("axios");

/**
 * @param {string} competition
 * @param {number} year
 */
async function getWinnerTotalGoals(competition, year) {
  const { winner, runnerup } = await getCompetitionInfo(competition, year);

  console.log(winner, runnerup);

  // const allMatches = await getMatches(competition, year)
  const team1Matches = await getMatches(competition, year, winner, 1);
  const team2Matches = await getMatches(competition, year, winner, 2);

  let totalScores = 0;

  totalScores += team1Matches.reduce(
    (prev, current) => prev + parseInt(current.team1goals),
    0
  );
  totalScores += team2Matches.reduce(
    (prev, current) => prev + parseInt(current.team2goals),
    0
  );

  console.log(team1Matches.length, team2Matches.length, totalScores);

  return totalScores;
}

async function getCompetitionInfo(competition, year) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/football_competitions?name=${competition}&year=${year}`
  );

  console.log("competition:", data);

  return data.data[0];
}

async function getMatches(
  competition,
  year,
  teamName,
  teamPosition,
  page = 1,
  matches = []
) {
  const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=${competition}&year=${year}&team${teamPosition}=${teamName}&page=${page}`;
  console.log("url:", url);

  const { data } = await axios.get(url);

  if (page === 1) {
    console.log("first match:", data);
  }

  matches.push(...data.data);

  if (page < data.total_pages) {
    return getMatches(
      competition,
      year,
      teamName,
      teamPosition,
      page + 1,
      matches
    );
  }

  return matches;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const competition = readLine();

  const year = parseInt(readLine().trim(), 10);

  const result = await getWinnerTotalGoals(competition, year);

  ws.write(result + "\n");

  ws.end();
}
