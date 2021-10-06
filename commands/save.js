const { MessageEmbed } = require("discord.js");
const i18n = require("../util/i18n");

module.exports = {
name: "save",
description: i18n.__("save.description"),
execute(message) {
  const queue = message.client.queue.get(message.guild.id);
if (!queue) return message.reply(i18n.__("save.errorNotQueue")).catch(console.error);

  const song = queue.songs[0];
  let save = new MessageEmbed()
  .setTitle(i18n.__("save.embedTitle"))
  .setDescription(`${song.title}\n${song.url}`)
  .setColor("#f1c40f")
  .setAuthor(message.client.user.username);

  return message.author.send(save).catch(() => message.channel.send(i18n.__mf("save.errorDmsGif", { author: message.author })));
}
};
