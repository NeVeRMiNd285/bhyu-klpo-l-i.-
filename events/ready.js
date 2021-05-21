const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 300);
  var msgArray = [
"ÇEVRİMDIŞI KULLANMA",
"ÇEVRİMDIŞI KULLANMA",
"ÇEVRİMDIŞI KULLANMA",
"ÇEVRİMDIŞI KULLANMA",
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/cumaalisahin'})
}, 115000);
    console.log(`Ceixsa Bot Giriş Yaptı.`);
}