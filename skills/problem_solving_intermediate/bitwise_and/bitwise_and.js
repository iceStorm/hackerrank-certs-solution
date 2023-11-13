"use strict";

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
 * Complete the 'countPairs' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// https://github.com/kilian-hu/hackerrank-solutions/blob/master/certificates/problem-solving-intermediate/bitwise-and/solution.py

/**
 * @param {number[]} arr
 */
function countPairs(arr) {
  const po2 = (x) => x > 0 && !(x & (x - 1));
  const counts = new Map();

  // Count occurrences of elements in the array
  for (const x of arr) {
    counts.set(x, (counts.get(x) || 0) + 1);
  }

  const d = Array.from(counts.entries());
  let ans = 0;

  // Calculate pairs with bitwise AND as power of 2
  for (let i = 0; i < d.length; i++) {
    const [a, aCnt] = d[i];
    for (let j = i; j < d.length; j++) {
      const [b, bCnt] = d[j];
      if (po2(a & b)) {
        if (a === b) {
          ans += (aCnt * (aCnt - 1)) / 2;
        } else {
          ans += aCnt * bCnt;
        }
      }
    }
  }

  return ans;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  let arr = [];

  for (let i = 0; i < arrCount; i++) {
    const arrItem = parseInt(readLine().trim(), 10);
    arr.push(arrItem);
  }

  const result = countPairs(arr);

  ws.write(result + "\n");

  ws.end();
}
