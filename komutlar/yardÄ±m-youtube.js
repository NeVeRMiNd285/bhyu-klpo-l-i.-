const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > **• Ceixsa Youtube Komutları**
      
      > <a:siyahtik:809469303522721812> [${prefix}abone](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Abone Rolu Verirsiniz.**
      > <a:siyahtik:809469303522721812> [${prefix}abone-mesaj](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Abone Mesajinin Nereye Gitceğini Belirlersiniz.**
      > <a:siyahtik:809469303522721812> [${prefix}abone-sorumlusu @rol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8) 
      > **• Abone Sorumlusunun Rolunu Ayarlayabilirsin.**
      > <a:siyahtik:809469303522721812> [${prefix}abone-rol @rol](https://discord.com/oauth2/authorize?client_id=794482280437514241&scope=bot&permissions=8)
      > **• Abone Rolunu Ayarlarsınız.**`]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Youtube Komutları") 
    .setTitle("Ceixsa Youtube Komutları") 
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
        embed.setTitle("Ceixsa Bot Sunucu Komutları")
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
        embed.setTitle("Ceixsa Bot Sunucu Komutları")
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
  aliases: ["yardım-youtube","youtube",],
  permLevel: 0
};

module.exports.help = {
  name: 'youtube',
  description: 'Sunucu komutlarını gösterir.',
  usage: 'youtube'
};