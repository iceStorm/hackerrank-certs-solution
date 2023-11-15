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
 * Complete the 'maxPresentations' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY scheduleStart
 *  2. INTEGER_ARRAY scheduleEnd
 */

/**
 * @param {number[]} scheduleStart
 * @param {number[]} scheduleEnd
 */
function maxPresentations(scheduleStart, scheduleEnd) {
  const presentations = [];

  for (let i = 0; i < scheduleStart.length; i++) {
    presentations.push({ start: scheduleStart[i], end: scheduleEnd[i] });
  }

  presentations.sort((a, b) => a.end - b.end || a.start - b.start);

  let maxPresentations = 0;
  let lastEndTime = -1;

  for (const presentation of presentations) {
    if (presentation.start > lastEndTime) {
      maxPresentations++;
      lastEndTime = presentation.end;
    }
  }

  return maxPresentations;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const scheduleStartCount = parseInt(readLine().trim(), 10);

  let scheduleStart = [];

  for (let i = 0; i < scheduleStartCount; i++) {
    const scheduleStartItem = parseInt(readLine().trim(), 10);
    scheduleStart.push(scheduleStartItem);
  }

  const scheduleEndCount = parseInt(readLine().trim(), 10);

  let scheduleEnd = [];

  for (let i = 0; i < scheduleEndCount; i++) {
    const scheduleEndItem = parseInt(readLine().trim(), 10);
    scheduleEnd.push(scheduleEndItem);
  }

  const result = maxPresentations(scheduleStart, scheduleEnd);

  ws.write(result + "\n");

  ws.end();
}
