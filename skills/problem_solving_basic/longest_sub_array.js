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
