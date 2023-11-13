/**
 * @param {Array<string>} products
 * @param {Array<number>} productPrices
 * @param {Array<string>} productSold
 * @param {Array<number>} soldPrice
 */
function priceCheck(products, productPrices, productSold, soldPrice) {
  let errorsCount = 0;

  productSold.forEach((item, index) => {
    const productNameIndex = products.findIndex((p) => p === item);
    const productPrice = productPrices[productNameIndex];

    if (soldPrice[index] !== productPrice) {
      errorsCount++;
    }
  });

  return errorsCount;
}
