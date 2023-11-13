/**
 * @param {number[][]} sides
 */
function nearlySimilarRectangles(sides) {
  const gcd = (a, b) => (b > 0 ? gcd(b, a % b) : a);
  const d = new Map();

  for (const [w, h] of sides) {
    const z = gcd(w, h);
    const key = `${w / z}-${h / z}`;
    d.set(key, (d.get(key) || 0) + 1);
  }

  return Array.from(d.values()).reduce((sum, x) => sum + (x * (x - 1)) / 2, 0);
}
