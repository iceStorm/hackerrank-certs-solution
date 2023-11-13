'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
      inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
      return inputString[currentLine++];
}

const axios = require('axios');

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
        return "Username Not Found"
    }

    const transactions = await getTransactions(userId)
    console.log('final:', transactions)

    return transactions;    
}

async function getUserId(username) {
    const { data } = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
    return data.data[0]?.id
}

async function getTransactions(userId) {
    const { data } = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userId}`);
    return parseInt(data.total)
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const username = readLine().trim();
    const result = await getNumTransactions(username);
    ws.write(result.toString());
}