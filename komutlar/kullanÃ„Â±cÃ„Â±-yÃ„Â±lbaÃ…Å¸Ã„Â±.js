const Discord = require("discord.js");
const ms = require("parse-ms");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {

  let yilbasi = new Date("2021-01-01 00:00:00");
  let zaman = ms(yilbasi - Date.now());//Fwhy Code

return message.channel.send(
   new Discord.MessageEmbed()
   .setColor("#ff4400") 
   .setDescription(`**Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n 
🥳 **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı!**`)
)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "yılbaşı",

  description:
    "Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: "yılbaşı"
};
