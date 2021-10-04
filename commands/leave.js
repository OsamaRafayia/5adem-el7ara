const i18n = require("../util/i18n");
const { canModifyQueue } = require("../util/Util");

module.exports = {
name: "leave",
aliases: ["dc","die"],
description: i18n.__("leave.description"),
execute(message) {
  const { channel } = message.member.voice;
  const serverQueue = message.client.queue.get(message.guild.id);
if (serverQueue && channel !== message.guild.me.voice.channel){
  return message
  .reply(i18n.__mf("leave.errorNotInSameChannel", { user: message.client.user }))
  .catch(console.error);
  
} else if(message.guild.me.voice.channel == null){
      message.reply(i18n.__mf("leave.errorNotInChannel"));
} else if (message.guild.me.voice.channel !== null) {
      message.guild.me.voice.channel.leave();
      message.reply("I have successfully left the voice channel!");
    }
   
    
  }
}
