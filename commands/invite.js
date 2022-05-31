const i18n = require("../util/i18n");

module.exports = {
  name: "invite",
  description: i18n.__("invite.description"),
  execute(message) {
    return message.member
      .send(
        `https://discord.com/api/oauth2/authorize?client_id=890382341690753054&permissions=61992256&scope=bot
    `
      )
      .catch(console.error);
  }
};
