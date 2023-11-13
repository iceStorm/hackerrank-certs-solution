"use strict";

// 6/13 TEST CASES PASSED (TIME LIMIT EXCEEDED)

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
 * Complete the 'findSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

/**
 * Grouping an array of objects by a shared key.
 * @param {string} key
 */
Array.prototype.groupBy = function (key) {
  const entries = {};

  this.forEach((obj) => {
    if (!(obj[key] in entries)) {
      entries[obj[key]] = [obj];
      return;
    }

    entries[obj[key]].push(obj);
  });

  return entries;
};

/**
 * @param {string} s
 * @param {number} k
 */
function findSubstring(s, k) {
  /**
   * @type {string[]}
   */
  const subStrings = [];

  for (let i = 0; i < s.length - k; ++i) {
    subStrings.push(s.slice(i, i + k));
  }

  const vowelsCount = [];
  subStrings.forEach((str, index) => {
    vowelsCount.push({
      index,
      vowels: countVowels(str),
      value: str,
    });
  });

  const groupedSubStrings = vowelsCount.groupBy("vowels");
  let maxVowelCount = 0;
  let maxVowelArr = [];

  Object.entries(groupedSubStrings).forEach(([key, value]) => {
    if (parseInt(key) > maxVowelCount) {
      maxVowelCount = parseInt(key);
      maxVowelArr = value;
    }
  });

  console.log(
    subStrings,
    vowelsCount,
    groupedSubStrings,
    maxVowelCount,
    maxVowelArr
  );

  return !maxVowelArr.length ? "Not found!" : maxVowelArr[0].value;
}

/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const splittedLength = str.split("").length;
  let count = 0;

  for (let i = 0; i < splittedLength; ++i) {
    if (vowels.some((v) => v === str[i])) {
      count++;
    }
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const k = parseInt(readLine().trim(), 10);

  const result = findSubstring(s, k);

  ws.write(result + "\n");

  ws.end();
}
