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
