const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix

module.exports.run = async(client, message, args) => {
 
  let sayfalar = [`
      > **• Ceixsa Yetkili Komutları**
      
      > [${prefix}ban @kullanıcı](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)
      > **• Sunucudan banlamak istediğiniz kişiyi etiketleyip banlarsınız.**
      > [${prefix}kayıt-yardım](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot)
      > **• Kayıt Sistemini gösterir.**
      > [${prefix}unban](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucudaki kişilerin banını geri açarsınız..**
      > [${prefix}oylama](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucuda oylama yaparsınız.**  
      > [${prefix}mute](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucdaki kişileri süreli bir şekilde susturabilirsiniz.**
      > [${prefix}unmute](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Susturulan kişinin mutesini açabilirsiniz.**
      > [${prefix}slowmode](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucuda yavaş modu açarsınız. İnsanların spam yapmasına önler getirmiş olursunuz.**
      > [${prefix}kick @kullanıcı](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucudaki istedğiniz kişileri sunucudan atabilirsiniz.**  
      
      >  •\`\Yetkili Komutların Devamı İçin Emojiye\`\ \`\Tıklayın\`\ `,`
      > **• Ceixsa Yetkili Komutları**
      
      > [${prefix}gç-ayarla](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Resimli giriş çıkış kanalını ayarlarsınız.**
      > [${prefix}giriş-çıkış-kapat](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Resimli giriş çıkış kanalını sıfırlarsınız.**
      > [${prefix}mod-log #kanal](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Mod-Log kanalını ayarlarsınız bu sayede silinen rol, mesaj vb görebilirsiniz.**
      > [${prefix}mod-log-sıfırla](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Mod-Log kanalını sıfırlarsınız.**
      
      > •\`\Yetkili Komutların Devamı İçin Emojiye\`\ \`\Tıklayın\`\ `, `
      > **• Ceixsa Yetkili Komutları**
      
      > [${prefix}ototag-ayarla](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucuya girenlere verilecek ototag ayarlarsınız..**
       > [${prefix}ototag-kanal](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Ototag Kanalını Ayarlarsınız**
      > [${prefix}prefix-ayarla](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Botun prefixi değiştirebilirsiniz.**
      > [${prefix}prefix-sıfırla](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Botun prefixi eski haline getirirsiniz.**
      > [${prefix}capslock-engelle](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucuda büyük harf kullanımını engeller. Kimse büyük harf kullanamaz.**
      >  [${prefix}küfür-engelle](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucuda küfür etmelerini engeller. Kimse küfür edemez.**
      > [${prefix}reklam-engelle](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Sunucuda reklam yapmalarını engeller. Kimse reklam yapamaz.**
      > [${prefix}toplam-komut](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) 
      > **• Botun İçinde Kac Komut Oldugunu Gösterir.**
      
      > •\`\Diğer Sistemlere Gitmek İçin Emojiye\`\ \`\Tıklayın\`\ `];
   let page = 1;
  const embed = new Discord.MessageEmbed()
    .setTitle("Ceixsa Bot Yetkili Menüsü") 
    .setColor("#ffe200")
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
        embed.setTitle("Ceixsa Bot Yetkili Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#ffe200")
        embed.setTimestamp()
        embed.setImage('https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif')
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === sayfalar.length) return; 
        page++; 
        embed.setTitle("Ceixsa Bot Yetkili Menüsü")
        embed.setDescription(sayfalar[page-1]); 
        embed.setFooter(`Sayfa ${page} - ${sayfalar.length}`);
        embed.setColor("#ffe200") 
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
  aliases: ["yetkili listesi","yetkili menüsü","yetkili-listesi","yetkili-menüsü"],
  permLevel: 0
};

module.exports.help = {
  name: 'yetkili',
  description: 'Yetkili komutlarını gösterir.',
  usage: 'yetkili'
};