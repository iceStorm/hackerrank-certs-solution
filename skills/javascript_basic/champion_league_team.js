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
