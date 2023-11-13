const router = require("express").Router();
const controller = require("../controllers/products");

router.get("", async (req, res) => {
  const allProducts = await controller.getAll();

  allProducts.forEach((p) => {
    p.isPublished = Boolean(p.isPublished);
  });

  res.status(200).json(allProducts);
});

router.post("", async (req, res) => {
  const payload = req.body;

  const createProduct = await controller.createOne(payload);

  res.status(201).json(createProduct);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  /**
   * @type {{
   *  id: number
   *  name: string
   *  price: number
   *  mrp: number
   *  stock: number
   *  isPublished: boolean
   * }}
   */
  const foundProduct = await controller.findById(id);
  console.log("found:", foundProduct);

  const errors = [];

  if (foundProduct.mrp < foundProduct.price) {
    errors.push("MRP should not be less than equal to the Price");
  }

  if (foundProduct.stock < 1) {
    errors.push("Stock count is 0");
  }

  if (errors.length) {
    return res.status(422).json(errors);
  }

  await controller.publish(foundProduct.id);

  res.status(204).end();
});

router.all("*", (req, res) => {
  res.status(405).end();
});

module.exports = router;
