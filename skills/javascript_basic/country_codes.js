const axios = require("axios");

async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

  const coutry = await getCountry(code);
  console.log("found country:", coutry);

  return coutry.name;
}

async function getCountry(code, pageIndex = 1) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/countries?page=${pageIndex}`
  );

  const theCountry = data.data.find((item) => {
    return item.alpha2Code === code;
  });

  if (theCountry) {
    return theCountry;
  }

  return getCountry(code, pageIndex + 1);
}
