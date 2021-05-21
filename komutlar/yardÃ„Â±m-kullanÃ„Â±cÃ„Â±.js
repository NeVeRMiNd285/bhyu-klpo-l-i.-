const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      > **👥 • Kullanıcı Komutları**
      
      > 👥 [${prefix}afk](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Sunucunuzda bu komutu kullanarak afk olduğunuzu belirtip etiketlenince size bildirim gelmez.**
      > 👥 [${prefix}bizkimiz](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Botun ekibi hakkında bilgi verir.**
      > 👥 [${prefix}havadurumu](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Yaşadığınız ilin havadurumu hakkında bilgi verir.**
      > 👥 [${prefix}bug-bildir](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Botta herhangi bir bug olduğunu anladığınız kesinleştirdiğiniz zaman bize iletebilirsiniz.**
      > 👥 [${prefix}davet](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Botumuzun davet linki, destek sunucu linkini gösterir.**
      > 👥 [${prefix}profil](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Sizin veya kullanıcı hakkında bilgi verir.**
      > 👥 [${prefix}canlı-destek](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Botta ayarlayamadığınız komutları veya çalışmayan komutları bize canlı destek sayesinde diyebilirsiniz.**
      > 👥 [${prefix}istatistik](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Bot hakkında bilgi verir.**`,`
      
      > **👥 • Kullanıcı Komutları**
      
      > 😷 [${prefix}korona <ülke>](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Covid19 hakkında bilgi verir.**
      > 💌 [${prefix}davetlerim](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Kaç Davet Yaptiğin Hakkında Bilgi Verir.**
      > 🌐 [${prefix}ping](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)   
      > **• Botun pingini gösterir.**
      > 📜 [${prefix}rol-bilgi](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Sunucudaki herhangi bir rolün bilgisini verir.**
      > 👥 [${prefix}sunucu-bilgi](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Sunucu hakkın bilgiler verir.**
      > 👑 [${prefix}sunucu-tanıt](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Kendi sunucunu botun destek sunucusunda tanıtırsın.**
      > 🥳 [${prefix}yılbaşı](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)  
      > **• Yılbaşına kalan zamanı gösterir.**
      > 🎭 [${prefix}öneri](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Bot hakkında önerilerinizi bize iletebilirsiniz.**
      > 😡 [${prefix}sikayet](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Bot hakkında şikayetlerinizi bize iletebilirsiniz.**
      
      > •\`\Geri Dönmek İçin Emojiye\`\ <a:791535524610310165:809461990090342430>\`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Kullanıcı Menüsü") 
    .setColor("#ff4400")
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
 
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
        embed.setTitle("Ceixsa Bot Kullanıcı Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#ff4400")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
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
  aliases: ["kullanıcı listesi","kullanıcı menüsü","kullanıcı-listesi","yardım kullanıcı"],
  permLevel: 0
};

module.exports.help = {
  name: 'kullanıcı',
  description: 'Kullanıcı komutlarını gösterir.',
  usage: 'kullanıcı'
};