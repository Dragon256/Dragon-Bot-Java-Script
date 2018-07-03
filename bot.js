const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`I will be soon !`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





  client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('**هذا الامر فقط في السيرفرات وشكرا**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("الاسم:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('التاج الخاص بحسابك:',"#" +  `**${mentionavatar.discriminator}**`, true)
   .addField("الايدي الخاص بحسابك:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("تم انشاء حسابك في :", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});





var refix = '-';
client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith(prefix + 'clear')) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("اعلى حد للمسح هو 100").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("ااختر كمية المسح من 1-100").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` تم المسح`).then(messages => messages.delete(5000));
  }
  });



client.on('message', message => {
  if (message.content === "-inv") {
      if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
  .setTitle(`:small_orange_diamond:اضغط هنا `)
  .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=463099813114937344&permissions=8&scope=bot`)
  .setThumbnail(message.author.avatarURL)
  .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
message.channel.sendEmbed(embed);
 }
});



client.on('message', message => {
  if (message.content === "-bot") {
      if(!message.channel.guild) return;
  let embed = new Discord.RichEmbed()
  .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
  .addField(`عدد السيرفرات:${client.guilds.size}`,`عدد المستخدمين:${client.users.size}`)
  .setThumbnail(message.author.avatarURL)
  .addField(':small_blue_diamond:By', "<@" + message.author.id + ">")        
message.channel.sendEmbed(embed);
 }
});





client.on('message', message => {
if (message.content.startsWith('-support')){
     let ra3d = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .setDescription(" سيرفر الدعم الفني الخاص ب دراجون بوت :- https://discord.gg/wyMhrNw  ")
     
     
  message.channel.sendEmbed(ra3d);
    }
});




client.on('guildCreate', guild => {
  client.channels.get("463703228052275210").send(`**سيرفر جديد قد اضاف البوت ✅
اسم السيرفر : __${guild.name}__
صاحب السيرفر: __${guild.owner}__**`)
});




client.on('message',async message =>{ 
     var prefix = "-";
    let args = message.content.split(' ').slice(1).join(" ");
    if(message.content.startsWith(prefix + "say")) {
        if(!args) return message.reply('اكتب الكلام اللذي تريد البوت ان يكرره');
        message.channel.send(args);
    }
});



let rebel;
client.on("ready", async  => {
    let guild = client.guilds.get("463104522773069825");
  let users = guild.members.map(member => member.user.id);
  let i;
  rebel=0;
for (i=0 ; i < users.length ; i++) {
 let   check = guild.members.get(users[i]);
if(!check.voiceChannelID){
        continue;
}else{
  rebel++;
}
}
guild.channels.find('id', '463448172291686430').setName(" Voice「"+rebel+"」");
  client.setInterval(() =>{
    let d = Date.now()
  }, 5000);
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let guild = client.guilds.get("463104522773069825");
let newUserChannel = newMember.voiceChannel
let oldUserChannel = oldMember.voiceChannel
 if(oldUserChannel === undefined && newUserChannel !== undefined) {
   rebel++;
guild.channels.find('id', '463448172291686430').setName(" Voice「"+rebel+"」");
} else if(newUserChannel === undefined){
  rebel--;
guild.channels.find('id', '463448172291686430').setName(" Voice「"+rebel+"」");
}
});
client.on('message', Codes => {
  
  if(Codes.content === "-صوت") {
      Codes.channel.send(" Voice「"+rebel+"」");
}
});




client.on('message', message => {
  if (message.content.startsWith("-avatar")) {

      var mentionned = message.mentions.users.first();
  var king66s;
    if(mentionned){
        var king66s = mentionned;
    } else {
        var king66s = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${king66s.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});







client.login(process.env.BOT_TOKEN);
