const Discord = require('discord.js')

exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("CeixsaBot Ping Sistemi")
  .setDescription(`[Davet Et](https://discord.com/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)`)
  .addField("API Gecikmesi:", `**${client.ws.ping}** ms!`)
  .addField("Mesaj Gecikmesi:", `**${message.createdTimestamp - message.createdTimestamp}**`)
  .setFooter(`CeixsaBot | Ping Sistemi`)
  message.channel.send(embed)
  }
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "ping",
  description: "botun pingini gösterir.",
  usage: "ping"
}