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
