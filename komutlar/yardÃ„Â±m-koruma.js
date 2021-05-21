const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      >  **💂 • Koruma Komutları**

      > 💂 [${prefix}rol-koruma](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Sunucuda silinen rolleri geri yükler.**
      > 💂 [${prefix}kanal-koruma](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Sunucuda silinen kanalları geri yükler.**
      > 💂 [${prefix}bot-koruma](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Sunucuya giren botları banlar.**
      > 💂 [${prefix}bot-izni](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Sunucuya giren botların banlanmaması için izin verirsiniz.**
      > 💂 [${prefix}güvenlik](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Sunucuya giren kişiler güvenilir mi değil mi kontrol eder.**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Koruma Sistemi") 
    .setColor("#501c67")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('809461990090342430').then( r => { 
      msg.react('809461695717834772') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '791535524610310165' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '791535523080175647' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Ceixsa Bot Koruma Sistemi")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#501c67")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')      
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Ceixsa Bot Koruma Sistemi")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#501c67")
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')              
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["koruma-sistemi","koruma listesi","koruma menüsü","koruma-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'koruma',
  description: 'Koruma sistemi komutlarını gösterir.',
  usage: 'koruma'
};