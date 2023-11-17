function priceCheck(products, productsPrices, productsSold, soldPrice) {
  let hash = {};
  let count = 0;
  // iterate over products and map price
  // {"eggs":2.89, "milk": 2.29, "cheese": 5.79}
  for (let i = 0; i < products.length; i++) {
    // check if hash object has already product key available
    // if it is not present
    // assign a key and it's value from productsPrices
    if (!hash[products[i]]) {
      hash[products[i]] = productsPrices[i];
    }
  }
  // iterate over products/productsSold
  // check for alreday stored price in hash
  // if it is mismatching
  // increase the count to show errors count
  for (let j = 0; j < productsSold.length; j++) {
    if (hash[productsSold[j]] !== soldPrice[j]) {
      count++;
    }
  }
  return count;
}
