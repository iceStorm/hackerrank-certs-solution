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
