const axios = require("axios");

async function ipTracker(ip) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/ip?ip=${ip}`
  );

  const country = data.data[0]?.country;

  if (!country) {
    return "No Result Found";
  }

  return country;
}
