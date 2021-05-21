const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
 let sayfalar = [`
      > **• Sunucu Komutları**
      
      > [${prefix}açıklama](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)
      > **• Sunucuda kanalların açıklamasını emojili, sembollü yapabilirsiniz.**
      > [${prefix}çek](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sesli kanala istediğiniz kişiyi kolay bir şekilde çekebilirsiniz.**
      > [${prefix}git](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sesli kanalinda İstediğiniz Kişinin Yanına Gidebilirsiniz.**
      > [${prefix}emoji-ekle](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)
      > **• Sunucuya hızlı bir şekilde emoji yükleyebilirsiniz.**
      > [${prefix}kategori-oluştur](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)
      > **• Sunucuda kategori oluşturabilirsiniz.**
      > [${prefix}sunucu-panel](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucunun istatistiklerini gösteren panel kurarsınız.**
      > [${prefix}sunucu-kur](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Gelişmiş bir sunucu kurarsınız.**
      > [${prefix}sayaç](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sayaç Kurarsınız.**
      > [${prefix}emoji-info](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)
      > **• Emojinin Linkini Ve İd Sini Gorebilirsiniz.**`];
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Sunucu Komutları") 
    .setTitle("Ceixsa Sunucu Komutları") 
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
  aliases: ["sunucu-menüsü","sunucu listesi","sunucu menüsü","sunucu-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'sunucu',
  description: 'Sunucu komutlarını gösterir.',
  usage: 'sunucu'
};