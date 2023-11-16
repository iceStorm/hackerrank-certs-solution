const sequelize = require("sequelize");

const Analytics = require("../models/analytics");
const { subtractSecondsFromCurrentTime } = require("../utils");
// Function subtractSecondsFromCurrentTime is a utility function which accepts the seconds to subtract from thee current time and
// returns the javascript date object

module.exports = {
  getAll() {
    return Analytics.findAll();
  },

  async create(payload) {
    let ingestedCount = 0;
    for (const event of payload) {
      const existingEvent = await Analytics.findOne({
        where: {
          user: event.user,
          eventType: event.eventType,
          date: {
            [sequelize.Op.gte]: subtractSecondsFromCurrentTime(
              event.eventType === "click" ? 3 : 5
            ),
          },
        },
      });

      if (!existingEvent) {
        await Analytics.create({
          eventType: event.eventType,
          user: event.user,
          date: new Date(),
        });

        ingestedCount++;
      }
    }

    return ingestedCount;
  },
};
