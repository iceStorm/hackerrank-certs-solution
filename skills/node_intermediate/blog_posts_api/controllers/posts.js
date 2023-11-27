const Posts = require("../models/posts");

module.exports = {
  async createOne(payload) {
    const newPost = await Posts.create({
      ...payload,
      publishedDate: payload.isPublished === true ? Date.now() : undefined,
    });

    return newPost.save();
  },

  getAll(author, isPublished) {
    const whereClause = {};

    if (author) {
      whereClause["author"] = author;
    }

    if (isPublished === "true" || isPublished === "false") {
      whereClause["isPublished"] = isPublished === "true" ? 1 : 0;
    }

    return Posts.findAll({
      where: whereClause,
      order: [["id", "asc"]],
    });
  },

  getById(id) {
    return Posts.findOne({
      where: {
        id,
      },
    });
  },
};
