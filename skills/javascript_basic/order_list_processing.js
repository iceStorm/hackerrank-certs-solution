/**
 * @param {{ id: number, state: string }[]} orderList
 * @param {number} orderId
 * @param {'Processing' | 'Delivered' } state
 */
function processOrderList(orderList, orderId, state) {
  switch (state) {
    case "Processing": {
      orderList.find((o) => o.id === orderId).state = state;
      break;
    }

    case "Delivered": {
      orderList = orderList.filter((o) => o.id !== orderId);
      break;
    }
  }

  return orderList;
}
