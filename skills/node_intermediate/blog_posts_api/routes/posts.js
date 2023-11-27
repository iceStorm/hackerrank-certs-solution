const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

router.post("/", async (req, res) => {
  const payload = req.body;

  const createdPost = await postsController.createOne(payload);

  res.status(201).json(createdPost);
});

router.get("/", async (req, res) => {
  const { author, isPublished } = req.query;

  const foundPosts = await postsController.getAll(author, isPublished);

  res.json(foundPosts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const foundPost = await postsController.getById(id);

  if (!foundPost) {
    return res.status(404).end("ID not found");
  }

  res.json(foundPost);
});

router.all("/:id", (req, res) => {
  res.status(405).send();
});

module.exports = router;
