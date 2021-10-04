const i18n = require("../util/i18n");

module.exports = {
    name: "servers",
    description: i18n.__("servers.description"),
    execute(message, args, client) {
        message.reply(client.guilds.cache.size.toLocaleString())
    }
}
