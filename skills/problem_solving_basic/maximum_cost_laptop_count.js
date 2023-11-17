/**
 * @param {number[]} cost
 * @param {string[]} labels
 * @param {number} dailyCount
 */
function maxCost(cost, labels, dailyCount) {
  let maximumCost = 0;

  for (let i = 0, legalCounts = 0, subCost = 0; i < labels.length; ++i) {
    const currentLabel = labels[i];
    const currentCost = cost[i];

    subCost += currentCost;

    if (currentLabel === "legal") {
      legalCounts += 1;
    }

    if (legalCounts === dailyCount) {
      if (subCost >= maximumCost) {
        maximumCost = subCost;
      }

      subCost = 0;
      legalCounts = 0;
    }
  }

  return maximumCost;
}
