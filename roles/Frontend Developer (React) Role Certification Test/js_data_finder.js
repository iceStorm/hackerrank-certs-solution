"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
  inputString += chunk;
});
process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * @param {number[]} data
 */
function dataFinder(data) {
  /**
   * @param {number} minRange
   * @param {number} maxRange
   * @param {number} value
   */
  return function find(minRange, maxRange, value) {
    if (minRange > data.length || maxRange + 1 > data.length) {
      throw new Error("Invalid range");
    }

    console.log("range:", minRange, maxRange, value);
    console.log("data slice:", data, data.slice(minRange, maxRange));

    return data.slice(minRange, maxRange + 1).includes(value);
  };
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const data = readLine().trim().split(" ");
  const finalData = data.map((val) => parseInt(val));
  const join = dataFinder(finalData);
  try {
    const inputs = readLine().trim().split(" ");
    const result = join(
      parseInt(inputs[0]),
      parseInt(inputs[1]),
      parseInt(inputs[2])
    );
    ws.write(result.toString());
  } catch (e) {
    ws.write(`${e}`);
  }
  ws.end();
}
