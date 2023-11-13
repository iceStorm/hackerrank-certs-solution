"use strict";

// --------------------------------------------------- 12/14 TEST CASES PASSED

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
 * Complete the 'longestSubarray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/**
 * @param {number[]} arr
 */
function longestSubarray(arr) {
  /**
   * @type {number[][]}
   */
  const subArrays = [
    [arr[0]], // default value for the first sub array
  ];

  for (let i = 1; i < arr.length; ++i) {
    const currentElement = arr[i];
    const currentSubArray = subArrays[subArrays.length - 1];
    const currentSubArrayLastElement = currentSubArray.slice(-1)[0];
    const uniqueSubArr = new Set(currentSubArray);

    console.log(currentElement, currentSubArrayLastElement);

    const isCurrentElementValid =
      currentSubArrayLastElement === currentElement ||
      // check distance
      (Math.abs(currentSubArrayLastElement - currentElement) < 2 &&
        //  check uniqueness
        (uniqueSubArr.has(currentElement) || uniqueSubArr.size < 2));

    if (isCurrentElementValid) {
      currentSubArray.push(currentElement);
    } else {
      subArrays.push([currentElement]);
    }
  }

  console.log("sub:", subArrays);
  let longestLength = 0;
  subArrays.forEach((sar) => {
    if (sar.length > longestLength) {
      longestLength = sar.length;
    }
  });

  return longestLength;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  let arr = [];

  for (let i = 0; i < arrCount; i++) {
    const arrItem = parseInt(readLine().trim(), 10);
    arr.push(arrItem);
  }

  const result = longestSubarray(arr);

  ws.write(result + "\n");

  ws.end();
}
