/**
 * @param {string[]} dictionary
 * @param {string[]} query
 */
function stringAnagram(dictionary, query) {
  const d = new Map();

  for (const w of dictionary) {
    const sortedWord = w.split("").sort().join("");
    d.set(sortedWord, (d.get(sortedWord) || 0) + 1);
  }

  const ans = [];

  for (const w of query) {
    const sortedQuery = w.split("").sort().join("");
    ans.push(d.has(sortedQuery) ? d.get(sortedQuery) : 0);
  }

  return ans;
}
