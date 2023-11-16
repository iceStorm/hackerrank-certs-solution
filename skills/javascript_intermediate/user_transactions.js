const axios = require("axios");

/**
 * @param {string} username
 * @returns {string | number}
 */
async function getNumTransactions(username) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
  // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>

  const userId = await getUserId(username);

  if (!userId) {
    return "Username Not Found";
  }

  const transactions = await getTransactions(userId);
  console.log("final:", transactions);

  return transactions;
}

async function getUserId(username) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/article_users?username=${username}`
  );
  return data.data[0]?.id;
}

async function getTransactions(userId) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`
  );
  return parseInt(data.total);
}
