const Reminders = require("../models/reminders");
const { Op } = require("sequelize");

module.exports = {
  async getAll(user, after) {
    const whereClause = {};

    if (user) {
      whereClause["user"] = user;
    }

    if (after) {
      whereClause["date"] = {
        [Op.gte]: parseInt(after, 10),
      };
    }

    return Reminders.findAll({
      where: whereClause,
    });
  },

  getById(id) {
    return Reminders.findOne({
      where: {
        id,
      },
    });
  },

  async createOne(payload) {
    const newItem = await Reminders.create(payload);
    return newItem.save();
  },
};
