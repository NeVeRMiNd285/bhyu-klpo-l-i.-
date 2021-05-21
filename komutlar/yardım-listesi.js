const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, member, args) => {
  let gold = await db.fetch(`gold_${message.member.id}`);
  let user = message.mentions.users.first() || message.author;
  const yardimlistesi2 = new Discord.MessageEmbed()
    .setColor("#066bc3")
    .setThumbnail("", client.user.avatarURL({ dynamic: true }))
    .setAuthor("Ceixsa Bot Yardım Menüsü")
    .setDescription(
      `
  > **Merhaba <@${message.author.id}> kullanıcım.
  > Benim Prefixim: ${prefix}
  > Benim Dilim: Türkçe
  > Gold Üye Durumu: ${gold ? "``Gold Üye``" : " ``Normal Üye``"}**

  > **Bot Komutları:**
  > <:Panda:808663430546456598> [${prefix}eğlence](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Eğlence komutlarını gösterir.**
  > 👥 [${prefix}kullanıcı](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Kullanıcı komutlarını gösterir.**
  > 💼 [${prefix}yetkili](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Yetkili komutlarını gösterir.**
  > 🔒 [${prefix}koruma](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Koruma sistemi komutlarını gösterir.**
  > ▶️ [${prefix}youtube](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Youtube sistemi komutlarını gösterir.**
  > 🤙🏼 [${prefix}sunucu](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Sunucu komutlarını gösterir.**
  > <:791535608446451734:809461956585979904> [${prefix}botlist-yardım](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Botlist komutlarını gösterir.**
  > 📋 [${prefix}tema-yardım](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Sunucu temaları atar.**
  > 🤖 [${prefix}sistemler](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) > • **Otocevap sistemi, bilet sistemi vb. komutları gösterir.**

  > **Bilgilendirme**
  > • **Tr:** Bot Şuan Aktiftir. Komutları Kullanabilirsiniz!
  > • Kayıt Sistemi eklendi.
  > • **Aylık 3₺ Gold üye olabilirsin.**
  

  > **:link: ⁝ Linkler -->**
  > • [Beni Ekle](https://discord.com/api/oauth2/authorize?client_id=798593736208154674&permissions=0&scope=bot) • [Destek Sunucum](https://discord.gg/8bjNe3TNnb) • [Site](http://ceixsashop.cf/) •
  
  `
    )
    .setFooter(`Ceixsa Bot Yardım Menüsü`)
    .setTimestamp()
    .setImage(
      "https://cdn.discordapp.com/attachments/802200599117955144/807340719471460372/gifimmy.gif");
  message.channel.send(yardimlistesi2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yardım-menüsü", "yardım-listesi"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım listesini gösterir.",
  usage: "yardım"
};
