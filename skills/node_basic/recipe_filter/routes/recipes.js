var recipes = require("../recipes.json");
var router = require("express").Router();

module.exports = router;

router.get("/shopping-list", (req, res) => {
  const { ids: idsString } = req.query;

  if (!idsString) {
    return res.status(400).end();
  }

  const idList = idsString.split(",").map((id) => parseInt(id));
  console.log("ids:", idList);

  const result = recipes
    .filter((r) => idList.includes(r.id))
    .map((r) => r.ingredients)
    .flat();

  if (!result.length) {
    return res.status(404).end("NOT_FOUND");
  }

  res.json(result);
});
