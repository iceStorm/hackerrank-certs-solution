// in app.js
// app.use('*', middleware);

module.exports = (req, res, next) => {
  console.log("query:", req.query);
  console.log("params:", req.params);

  let { page, limit, q } = req.query;

  page = parseInt(page) || 1;
  limit = parseInt(limit) || 3;
  const skip = (page - 1) * limit;

  req.context = {
    page,
    limit,
    skip,
    searchTerm: q,
    search: new RegExp(q, "gi"),
  };

  console.log("context:", req.context);

  next();
};
