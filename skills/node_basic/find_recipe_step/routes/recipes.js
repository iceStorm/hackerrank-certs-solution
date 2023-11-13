var recipes = require("../recipes.json");
var router = require("express").Router();

router.get("/step/:id", (req, res) => {
  const { id } = req.params;
  const { elapsedTime } = req.query;

  const parsedId = parseInt(id);
  const parsedTime = parseInt(elapsedTime) || 0;

  console.log("id:", parsedId);
  console.log("elapsedTime:", parsedTime);

  if (!parsedId) {
    return res.status(400).end("NOT_FOUND");
  }

  const theRecipe = recipes.find((r) => r.id === parsedId);

  for (let i = 0, elapsed = 0; i < theRecipe.steps.length; ++i) {
    elapsed += theRecipe.timers[i];

    if (elapsed >= parsedTime) {
      return res.json({ index: i });
    }
  }

  res.json(theRecipe);
});

module.exports = router;
