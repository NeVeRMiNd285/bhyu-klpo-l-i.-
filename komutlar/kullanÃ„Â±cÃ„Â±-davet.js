const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor('#ff4400')
  .setThumbnail(client.user.avatarURL({dynamic: true}))
  .setAuthor('Ceixsa Bot Davet Bilgi', client.user.avatarURL({dynamic: true}))
  .setDescription(`
  Botun Davet Link 
  » [Davet Linkim](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
  Botun Destek Sunucusu 
  » [Destek Sunucum](https://discord.gg/eGdrw7FnCg)
  Bota Oy Vermek İçin Tıkla
  » [Oy Ver](Yakında)`)
.setFooter(`Komutu ${message.author.username} kullanıcı istedi .`, message.author.avatarURL({dynamic: true}))
  message.channel.send(davet)
  };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Botun Davet Linkini Gönderir.',
  usage: 'davet'
};