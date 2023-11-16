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
