const i18n = require("../util/i18n");

module.exports = {
  name: "ping",
  cooldown: 10,
  description: i18n.__("ping.description"),
  async execute(message) {
    const msg = await message.channel.send(`🏓 Pinging....`);
    msg.edit(i18n.__mf("ping.result", {number:Math.floor(msg.createdTimestamp - message.createdTimestamp)}));
  }
};


