const axios = require("axios");

async function getAverageTemperatureForUser(userId) {
  const records = await getPatientRecords(userId);

  if (!records.length) {
    return "0";
  }

  const averageTemparature =
    records.reduce(
      (prev, current) => prev + current.vitals.bodyTemperature,
      0
    ) / records.length;

  console.log("total records:", records.length);
  console.log("average temparature:", averageTemparature);

  return averageTemparature.toFixed(1);
}

async function getPatientRecords(userId, records = [], page = 1) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/medical_records?userId=${userId}&page=${page}`
  );

  console.log(data.data.length, records.length, page);

  records.push(...data.data);

  if (data.page < data.total_pages) {
    // recursively call to explore the remaining pages
    return getPatientRecords(userId, records, page + 1);
  }

  return records;
}
