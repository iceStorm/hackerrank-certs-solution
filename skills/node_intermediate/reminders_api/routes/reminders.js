const router = require("express").Router();
const controller = require("../controllers/reminders");

module.exports = router;

router.get("/", async (req, res) => {
  const { user, after } = req.query;

  const results = await controller.getAll(user, after);

  res.json(results);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const result = await controller.getById(id);

  if (!result) {
    return res.status(404).end("ID not found");
  }

  res.json(result);
});

router.post("/", async (req, res) => {
  const payload = req.body;

  const createdObject = await controller.createOne(payload);

  res.status(201).json(createdObject);
});

router.all("*", (req, res) => {
  res.status(405).end();
});
