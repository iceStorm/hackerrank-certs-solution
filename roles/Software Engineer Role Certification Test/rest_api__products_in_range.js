const axios = require("axios");

async function getProductsInRange(category, minPrice, maxPrice) {
  const counts = await getProducts(category, minPrice, maxPrice);
  return counts;
}

async function getProducts(category, minPrice, maxPrice, page = 1, counts = 0) {
  const { data } = await axios.get(
    `https://jsonmock.hackerrank.com/api/inventory?category=${category}&page=${page}`
  );

  counts += data.data.filter((record) => {
    return (
      record.category === category &&
      record.price >= minPrice &&
      record.price <= maxPrice
    );
  }).length;

  if (page < data.total_pages) {
    return getProducts(category, minPrice, maxPrice, page + 1, counts);
  }

  return counts;
}
