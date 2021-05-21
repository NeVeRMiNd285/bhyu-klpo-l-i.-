const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      > **👥 • Kayıt Sistemi Komutları**
      
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-alınacak-rol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Eğer Kayıt Alınacak Rolü Ayarlanmazsa Kayıt Asla Çalışmaz.**
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-destek](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Destek ekibini ayarlasınız.**
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-ek-rol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Ek rolü ayarlarsınız.**
      > <:808283667537330196:809459853989773322> [${prefix}erkek](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
      > **• Erkek kayıt**
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-erkek-rol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Erkek rolünü ayarlasınız.**
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-isim-düzen](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Adamı İsimsiz Kayıt Ediyorsun.**
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-isimzorun](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Açmaz isen isim yaş zorunlu olmaz.**
      > <:808283667537330196:809459853989773322> [${prefix}kayıt-kadın-rol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Kadın rolünü ayarlarsın.**`,`
      
      > **👥 • Kayıt Sistemi Komutları**
      
      > 👥 [${prefix}kadın](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Eğer Kayıt Kadın Rolü Ayarlanmazsa Kayıt Asla Çalışmaz.**
      > 👥 [${prefix}kayıt-yetkili-rol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Eğer Kayıt Yetkili Rolü Ayarlanmazsa Kayıt Asla Çalışmaz.**
      > 👥 [${prefix}kayıt-log](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)   
      > **• Eğer Kayıt Logu Ayarlanmazsa Kayıt Asla Çalışmaz.**
      > 👥 [${prefix}kayıt-mesaj-embed](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Bu Seçeneği Kullanarak Kayıt Mesajı Embedli Yapabilirsiniz.**
      > 👥 [${prefix}kayıt-mesaj](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Eğer Kayıt Mesajı Ayarlanmazsa Kayıt Asla Çalışmaz.**
      > 👥 [${prefix}kayıt-otoisim-kapat](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Ayarlanabilir,Zorun değil.**
      > 👥[${prefix}kayıt-oto-rol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)  
      > **• Ayarlanabilir,Zorunlu değil.**
      > 👥 [${prefix}k-mesaj renk #renkkodu](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)  
      > **• Bu Seçeneği Kullanarak Kayıt Mesajı Renkli Yapabilirsiniz. Zorunlu değil!.**
      > 👥 [${prefix}k-mesaj gif giflink](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)  
      > **• Bu Seçeneği Kullanarak Kayıt Mesajı Gifli Yapabilirsiniz. Zorunlu değil!.**
      > 👥 [${prefix}kprofil](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
      > **• Kayıt profiline bakarsınız.**
      
      > •\`\Geri Dönmek İçin Emojiye\`\ <a:791535524610310165:809461990090342430>\`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Kayıt Menüsü") 
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
        embed.setTitle("Ceixsa Kayıt Menüsü")
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
        embed.setTitle("Ceixsa Bot Kayıt Sistemi")
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
  aliases: ["kayıty"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıt-yardım',
  description: 'Kullanıcı komutlarını gösterir.',
  usage: 'kayıt-yardım'
};