/**
 * @param {string[]} weekdays
 */
function weekdayText(weekdays) {
  return function getText(index) {
    console.log("received:", index, weekdays);

    if (index < 0 || index > weekdays.length - 1) {
      throw new Error("Invalid weekday number");
    }

    return weekdays[index];
  };
}
