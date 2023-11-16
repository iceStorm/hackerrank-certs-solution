const router = require("express").Router();
const controller = require("../controllers/analytics");

module.exports = router;

router.post("/", async (req, res) => {
  const counts = await controller.create(req.body);
  res.status(201).json({ ingested: counts });
});

router.get("/", async (req, res) => {
  const results = await controller.getAll();
  res.json(results);
});

router.all("*", (req, res) => {
  res.status(405).end();
});
