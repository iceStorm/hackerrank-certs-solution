function mostActive(customers) {
  const customerCounts = customers.reduce((counts, customer) => {
    counts[customer] = (counts[customer] || 0) + 1;
    return counts;
  }, {});

  const activeCustomers = Object.entries(customerCounts)
    .filter(([customer, count]) => count / customers.length >= 0.05)
    .map(([customer]) => customer);

  return activeCustomers.sort();
}
