var recipes = require('../recipes.json');
var router = require('express').Router();

module.exports = router;

router.get('/shopping-list', (req, res) => {
  const { ids: idsString } = req.query

  if (!idsString) {
    return res.status(400).end();
  }

  const ids = idsString.split(',').map(id => parseInt(id))
  const foundRecipes = recipes.filter(r => ids.includes(r.id))

  if (!foundRecipes.length) {
    return res.status(404).send('NOT_FOUND')
  }

  return res.status(200).json(foundRecipes.map(r => r.ingredients))
})
