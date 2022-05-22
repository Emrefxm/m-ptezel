module.exports = {

  "code": "macro","aliases": [], async run (client,message,args){ 
const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")

    const embed = new MessageEmbed()

    .setFooter(Lunes Was Here!);

    let lunes = new MessageButton()

    .setStyle("PRIMARY")

    .setLabel("Lunes")

    .setCustomId("l1")

    let lunes2 = new MessageButton()

    .setStyle("PRIMARY")

    .setLabel("Lunes")

    .setCustomId("l2")

    let lunes3 = new MessageButton()

    .setStyle("PRIMARY")

    .setLabel("Lunes")

    .setCustomId("l3")

    const row = new MessageActionRow() 

    .addComponents([lunes1, lunes2,lunes3]);

    message.channel.send({components: [row], embeds: [embed] });

  }
      }};

}
