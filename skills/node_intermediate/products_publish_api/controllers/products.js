const Products = require("../models/products");

module.exports = {
  getAll() {
    return Products.findAll({
      raw: true,
      order: [["id", "ASC"]],
    });
  },

  async createOne(payload) {
    const newProduct = await Products.create({
      ...payload,
      isPublished: false,
    });

    return newProduct.save();
  },

  findById(id) {
    return Products.findOne({
      raw: true,
      where: {
        id,
      },
    });
  },

  publish(id) {
    return Products.update(
      { isPublished: true },
      {
        where: { id },
      }
    );
  },
};
