const { EventEmitter } = require("events");

const stockData = require("./stock-list.json");

module.exports = class OrderProcessor extends EventEmitter {
  /**
   *
   * @param {{
   *  orderNumber: string
   *  lineItems: Array<{
   *  itemId: number;
   *  quantity: number
   *  }
   * >
   * }} order
   */
  placeOrder(order) {
    this.emit("PROCESSING_STARTED", order.orderNumber);

    if (!order.lineItems.length) {
      this.emit("PROCESSING_FAILED", {
        orderNumber: order.orderNumber,
        reason: "LINEITEMS_EMPTY",
      });
    } else {
      for (const item of order.lineItems) {
        const isItemNotAvailable =
          stockData.find((i) => i.id === item.itemId).stock < item.quantity;

        if (isItemNotAvailable) {
          this.emit("PROCESSING_FAILED", {
            orderNumber: order.orderNumber,
            reason: "INSUFFICIENT_STOCK",
            itemId: item.itemId,
          });
        }
      }
    }

    this.emit("PROCESSING_SUCCESS", order.orderNumber);
  }
};
