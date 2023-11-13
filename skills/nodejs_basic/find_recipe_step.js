var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/step/:id', (req, res) => {
  const { id: reqId } = req.params
  const { elapsedTime: reqElapsedTime } = req.query

  const id = parseInt(reqId)
  elapsedTime = parseInt(reqElapsedTime) || 0;

  if (isNaN(id)) {
    return res.status(400).send('NOT_FOUND')
  }

  const theRecipe = recipes.find(r => r.id === id)
  // console.log('id:', id, 'elapsedTime:', elapsedTime, 'recipe:', theRecipe)

  for (let i = 0, sumElapsed = 0; i < theRecipe.steps.length; ++i) {
    const { steps, timers } = theRecipe

    sumElapsed += timers[i]

    if (sumElapsed >= elapsedTime) {
      return res.status(200).json({ index: i })
    }
  }
})

module.exports = router;

