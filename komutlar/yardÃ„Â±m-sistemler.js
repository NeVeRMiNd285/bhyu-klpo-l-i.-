const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
  > **🎟️ • Ceixsa Bot Bilet Sistemi**
  
  > 🎟️ [${prefix}bilet aç](https://discord.gg/8bjNe3TNnb)
  > **• Bilet kanalı açarsınız.**
  > 🎟️ [${prefix}bilet kapat](https://discord.gg/8bjNe3TNnb)
  > **• Bilet kanalını kapatırsınız.**
  > 🎟️ [${prefix}bilet ekle](https://discord.gg/8bjNe3TNnb)
  > **• Bilet kanalına birini eklersiniz.**
  > 🎟️ [${prefix}bilet gönder](https://discord.gg/8bjNe3TNnb)
  > **• Bilet kanalına bilet gönderir.**
  > 🎟️ [${prefix}bilet-kanal ayarla #kanal](https://discord.gg/8bjNe3TNnb)
  > **• Bilet kanalını ayarlar.**
  
  > •\`\Otocevap Sistemine Gitmek İçin Emojiye\`\ ➡ \`\Tıklayın\`\ `,`
  > **• Ceixsa Bot OtoCevap Sistemi**
  
  > **• OtoCevap Sistemi Bilgi**
  > • **ÖNEMLİ:** İlk olarak [${prefix}otocevap-sistemi](https://discord.gg/8bjNe3TNnb) yazarak bilgileri **OKUYUN** !!!
  
  > [${prefix}otocevap ekle <cevaplanacakmesaj> | <cevap>](https://discord.gg/8bjNe3TNnb) 
  > **• Otocevap eklersiniz. "Örnek: sa | Aleyküm Selam Hoşgeldin" şeklinde ekleyebilirsiniz.**
  > [${prefix}otocevap sil <otocevap> ](https://discord.gg/8bjNe3TNnb) 
  > **• Otocevap silersiniz. "Örnek: otocevap sil sa" şeklinde silebilirsiniz.**
  > [${prefix}otocevap liste](https://discord.gg/8bjNe3TNnb) 
  > **• Otocevapa eklediğiniz mesajları listeler.**
  > [${prefix}otocevap düzenle <otocevap>](https://discord.gg/8bjNe3TNnb) 
  > **• Otocevap düzenlersiniz. "Örnek: otocevap düzenle Sa | Aleyküm Selam Hoşgeldin"**
  
  > •\`\Diğer Sistemlere Gitmek İçin Emojiye\`\ \`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Ayarlanabilir Sistemler") 
    .setColor("#084e0d")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif') 
  message.channel.send(embed).then(msg => { 
   
     msg.react('809461990090342430').then( r => { 
      msg.react('816570802861506590') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '791535524610310165' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '816570802861506590' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Ceixsa Bot Ayarlanabilir Sistemler")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#084e0d")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807336907447992390/standard_1.gif')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Ceixsa Bot Ayarlanabilir Sistemler")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#084e0d")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sistemler","sistem"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım-sistemler',
  description: 'Bütün sistem komutlarını gösterir.',
  usage: 'sistemler'
};