exports.execute = async (message) => {

  const activities = [

{ name: `${durum}`, type: 'STREAMING' }, 

{ name: `Macro Was There !`, type: 'STREAMING' }

];

const settings = require ("../Json/sunucu.json")

   let durum = "Delevoped By Macro"

   let durum2 =   "Macro ❤️ Hyper"

  var JoinChannel = client.channels.cache.get(settings.BOT.BOTVOİCE);

  

  const { joinVoiceChannel } = require('@discordjs/voice');

  

  if (JoinChannel) {

    const connection = joinVoiceChannel({

      channelId: JoinChannel.id,

      guildId: JoinChannel.guild.id,

      adapterCreator: JoinChannel.guild.voiceAdapterCreator, 

      selfDeaf: true

    });

  } else {

    console.log("Bot failed to login to a voice channel")

  }

let activity = 1;

    setInterval(() => {

       activities[2] = { name: 'Macro 💛 Hyper', type: 'STREAMING' 

           };

        activities[3] = { name: 'Macro ❤️ ', type: 'STREAMING' };

       activities[4] = { name: 'Macro',  type: 'STREAMING' };

       activities[5] = { name: 'Macro',  type: 'STREAMING'

       };

        if (activity > 5) activity = 0;

        client.user.setActivity(activities[activity]);

        activity++;

    }, 5000);

}

exports.conf = {

  event: "ready"

};  

