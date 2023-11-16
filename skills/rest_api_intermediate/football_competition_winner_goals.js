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
