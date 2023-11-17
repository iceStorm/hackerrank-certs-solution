const { trimStart } = require("lodash");
var recipes = require("../recipes.json");
var router = require("express").Router();

module.exports = router;

router.get("/", (req, res) => {
  const { page, limit } = req.query;

  const pageQuery = parseInt(page) || 1;
  const limitQuery = parseInt(limit) || 3;

  const startIndex = limitQuery * (pageQuery - 1);
  const paginatedData = [...recipes].splice(startIndex, limitQuery);

  console.log(
    "\npage:",
    pageQuery,
    "limit:",
    limitQuery,
    "startIndex:",
    startIndex,
    "data:",
    paginatedData
  );

  res.status(200).json(paginatedData);
});
