const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
  > **• Ceixsa Eğlence Komutları**
  
  > [${prefix}öp](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Birini öpersiniz.**
  > [${prefix}tkm]https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Botla Taş,Kağıt,Makas oynarsınız.**
  > [${prefix}döv](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Etiketlediğiniz kişiyi döversiniz.**
  > [${prefix}ara155](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• 155'i Arar.(Ciddiye Alma :))**
  > [${prefix}avatar](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Avatarına veya başkasının avatarına bakarsın.**
  > [${prefix}sor](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bota soru sorarsın.**
  > [${prefix}espri](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bot farklı türden esprililer yapar.**
  > [${prefix}balıktut](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Oltayı atıp balık tutarsınız.**
  > [${prefix}desteaç](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Zula'da deste açarsınız.(Gerçek Değildir.)**
  > [${prefix}kasaaç](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Cs:Go'da kasa açarsınız.(Gerçek Değildir.)**
  > [${prefix}hesapla](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Yaptığınız işlemi hesaplarsınız.**
  > [${prefix}duello](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Arkadaşlarınızla duello atarsınız.**
  > [${prefix}snipe](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Silinen Son Mesajı Atar.**
  
  > •\`\Eğlence Komutların Devamı İçin Emojiye\`\ \`\Tıklayın\`\ `, `
  > **• Ceixsa Eğlence Komutları**
  
  > [${prefix}efkarım](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bot sizin efkarınızı ölçer.**
  > [${prefix}trump](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Trump'a tweet attırırsınız.**
  > [${prefix}kaç-cm](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bot size kaç cm olduğunu söyler.**
  > [${prefix}slots](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255) 
  > **• Slot oyunu oynarsınız.**
  > [${prefix}kral-ol](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Artık kral siz olursunuz.**
  > [${prefix}alevlogo](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bir mesaj yazınca alevli yazıları logo olarak çevirir.**
  > [${prefix}altınlogo](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bir mesaj yazınca altın yazıları logo olarak çevirir.**
  > [${prefix}elmaslogo](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Bir mesaj yazınca elmas yazıları logo olarak çevirir.**
  > [${prefix}soygun-yap](https://discord.com/oauth2/authorize?client_id=816550651131199498&scope=bot&permissions=271920255)
  > **• Soygun Yaparsınız (Gerçek Değildir).**
 
  > •\`\Geri Dönmek İçin Emojiye\`\ \`\Tıklayın\`\ `]; 
  let page = 1; 
 
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Eğlence Menüsü") 
    .setColor("#d81414")
    .setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
    .setFooter(`Sayfa ${page} - ${sayfalar.length}`) 
    .setDescription(sayfalar[page-1])
    .setTimestamp()
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('').then( r => { 
      msg.react('') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setTitle("Ceixsa Bot Eğlence Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#d81414")
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Ceixsa Bot Eğlence Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setTimestamp()
        embed.setColor("#d81414") 
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
        msg.edit(embed) 
      })
   
    })
 
  })
 
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["eğlence menüsü","eğlence listesi","eğlence-menüsü","eğlence-listesi"],
  permLevel: 0
};

module.exports.help = {
  name: 'eğlence',
  description: 'Eğlence komutlarını gösterir.',
  usage: 'eğlence'
};