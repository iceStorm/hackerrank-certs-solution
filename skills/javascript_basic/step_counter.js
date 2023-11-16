/**
 * @param {number} k
 */
function getFixedCounter(k) {
  const counter = (function counter() {
    let value = 0;

    return {
      getValue() {
        return value;
      },
      changeBy(k) {
        value += k;
      },
    };
  })();

  return {
    increment() {
      counter.changeBy(k);
    },

    decrement() {
      counter.changeBy(-k);
    },

    getValue() {
      return counter.getValue();
    },
  };
}
