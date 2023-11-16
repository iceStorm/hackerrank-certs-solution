function filledOrders(order, k) {
  order.sort((a, b) => a - b);
  let ans = 0;

  for (let x of order) {
    if (x <= k) {
      ans++;
      k -= x;
    } else {
      break;
    }
  }

  return ans;
}
