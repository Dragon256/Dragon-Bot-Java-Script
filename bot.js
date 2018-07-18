const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '%'
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
















client.on('message', message => {
  if (message.content === "%inv") {
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
  if (message.content === "%bot") {
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
if (message.content.startsWith('%support')){
     let ra3d = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("random")
  .setDescription(" سيرفر الدعم الفني الخاص ب دراجون بوت :- https://discord.gg/wyMhrNw  ")
     
     
  message.channel.sendEmbed(ra3d);
    }
});



client.on('message',async message =>{ 
     var prefix = "%";
    let args = message.content.split(' ').slice(1).join(" ");
    if(message.content.startsWith(prefix + "say")) {
        if(!args) return message.reply('اكتب الكلام اللذي تريد البوت ان يكرره');
        message.channel.send(args);
    }
});








client.on('message', message => {
  if (message.content.startsWith("%avatar")) {

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



client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('**بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا**')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});



client.on('message', message => {
    var prefix = "%"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});




client.on("message", message => {
    const prefix = "%"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });




client.on('message', message => {

    if (message.content === "%server") {
var year = message.guild.createdAt.getFullYear()
var month = message.guild.createdAt.getMonth()
var day = message.guild.createdAt.getDate()
    let embed = new Discord.RichEmbed()

.addField('***صاحب السيرفر :crown:  : ***: ' , message.guild.owner)
.addField('***اسم السيرفر :name_badge:  :***: ' , message.guild.name)
.addField('***ايدي السيرفر :id:  :***:' , message.guild.id)
.addField('***قوة الحماية :lock:  :***: ' , message.guild.verificationLevel)
.addField('***نطاق السيرفر :globe_with_meridians: ***: ' , message.guild.region)
.addField('***عدد الرومات  ***: ' , message.guild.channels.size)
.addField('***عدد الرتب : ***: ' , message.guild.roles.size)
.addField('***عدد الاعضاء :family_mmgg:  :***: ' , message.guild.memberCount)
.addField('***تم صنع السيرفر في :date:  :***: ' ,year + "-"+ month +"-"+ day)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
} 

});




client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("463794421809545237").send({embed:iiMo});
    }
});



client.on("message", (message) => {
    if (message.content.startsWith("%tc")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" MANAGE_CHANNELS انت لا تملك برمشن  ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'text');
    message.channel.sendMessage('تم انشاء الروم الكتابي')
    
    }
    });




client.on("message", (message) => {
    if (message.content.startsWith("%vc")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" MANAGE_CHANNELS انت لا تملك برمشن ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('تـم إنـشاء الروم صـوتي')
        
    }
    });
    



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    });




    



client.on('message', message => {
    if (message.content === "%help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`Flame Bot`, 'https://media.discordapp.net/attachments/468763296254918674/468790475072208897/c0b8a39938d7288757c04bbf3a11e814-d4qkrj6.png?width=267&height=161')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3: تم ارسال الرسالة في الخاص :white_check_mark: ")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   client.on("message", message => {
    if (message.content === "%help-info") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`**❓❔❗️❕وش مميزات البوت❗️❕❓❔**
        **__1-__:books:🧐 بوت عربي🧐:books:
         __2-__:white_check_mark: :part_alternation_mark:️ استخدامه جدا سهل:part_alternation_mark:️:white_check_mark: 
         __3-__:gear:️صيانه كل يوم:gear:️
         __4-__:money_with_wings: مجاني :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });
  

  
   
  
  
  
   client.on("message", message => {
      if (message.content === "-help-public") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  ** __%id__->**معلومات عنك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%server__->**معلومات عن السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%Bot__->**معلومات عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%ping__->**سرعة اتصال البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%avatar__->**لعرض صورتك وعرض صور الاخرين , مع المنشن
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   **__%image__->**صورة السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%say__->**ليكرر البوت كلامك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%time__->**الاوقات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__%help-public__->**تظهر لك هذي القائمة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
     message.author.sendEmbed(embed)
     
     }
     });
  
  
  
  
 
  
  
   client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  ** __-kick__->**طرد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-ban__->**باند
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-mute__->**ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-unmute__->**فك ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-clear__->**حذف الشات بعدد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __-tc__->**انشاء شات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-vc__->**انشاء روم
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__-bc__->**برود كاست `)
     message.author.sendEmbed(embed)
     }
     });
  
  
  
  
  
  
  
     client.on("message", message => {
      if (message.content === "-help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By Dragon#6286 ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس ❤️ 💛 💚 💙 💜 🖤__**`)
     message.author.sendEmbed(embed)
     
     }
     });





var refix = "-";
client.on('message', message => {
         if (message.content === prefix + "time") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });






client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "-mute") {
          if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("** 'MANAGE_MESSAGES' لا يوجد لديك برمشن  **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** 'Muted' لا يوجد رتبة الميوت  **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك عمل منشن للشخص اولاَ  **').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', '-mute')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Manage Roles لا يوجد لدي برمشن **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  
  };
  
  });




client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "-unmute") {
          if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("** 'MANAGE_MESSAGES' لا يوجد لديك برمشن  **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** 'Muted' لا يوجد لديك رتبه الميوت  **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** يجب عليك عمل منشن للشخص اولاَ **').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', '-mute')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Manage Roles لا يوجد لدي برمشن  **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });










 client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
                             
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(" ADMINISTRATOR انت لا تملك برمشن  ");
    if (!args[1]) {
message.channel.send("**-bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("** 'ADMINISTRATOR' لا يوجد لديك برمشن  **").catch(console.error);
            var bc = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('** الـسيرفر**', `${message.guild.name}`,true)
            .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **الرسالة** ', args)
            .setThumbnail(message.guild.iconURL)
            .setColor('RANDOM')
            m.send(`${m}`,{embed: bc});
        });
        const AziRo = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)   
        .setTitle('✔️ | جاري ارسال رسالتك ') 
        .addBlankField(true)
        .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
        .addField('📋| الرسالة ', args)
        .setColor('RANDOM')  
        message.channel.sendEmbed(AziRo);          
    }
    } else {
        return;
    }
}); 




var refix = "-"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith('w!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**الوقت الذي تم اخذة:**',msg + " ms :signal_strength: ")
.addField('**سرعة الاتصال:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
}
});





	client.on('message', async msg => {
	var prefix = "-";
	var user = msg.author;
			var a = msg.guild.roles.find("name", 'Agar');
		if(!a){
        a = await msg.guild.createRole({
		  name: "Agar",
          color: "#ffffff",
          permissions:[]
		})
		
        }
	    var m = msg.guild.roles.find("name", 'Minecraft');
	if(!m){
        m =  await msg.guild.createRole({
		  name: "Minecraft",
          color: "#ffffff",
          permissions:[]
		})
        }
        var f = msg.guild.roles.find("name", 'Fortnite');
		if(!f){
        f =  await msg.guild.createRole({
		  name: "Fortnite",
          color: "#ffffff",
          permissions:[]
		})
        }
        var b = msg.guild.roles.find("name", 'Brawlhalla');
		if(!b){
        b =  await msg.guild.createRole({
		  name: "Brawlhalla",
          color: "#ffffff",
          permissions:[]
		})
        }
        var black = msg.guild.roles.find("name", 'Blacksquad');
	if(!black){
        black =  await msg.guild.createRole({
		  name: "Blacksquad",
          color: "#ffffff",
          permissions:[]
		})
        }

		if (msg.content.startsWith(prefix +'addmerole')) {

		if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
msg.channel.send(`يرحي اختيار رتبة اللعبة الذي تريدها \n1- لعبة اقاريو ⚽ \n2- لعبة ماين كرافت 👶 \n3- لعبة فورت نايت 👊 \n4- لعبة براوهلا  👌 \n5- لعبة بلاك سكواد 🍸\n6- الغاء ❌ \n7- **لديك60 ثانية للاختيار **\n<@${msg.author.id}>`).then(res => {     
     res.react('⚽').then(r=>{     
     res.react('👶').then(r=>{
     res.react('👊').then(r=>{
     res.react('👌').then(r=>{
     res.react('🍸').then(r=>{
     res.react('❌').then(r=>{

    let aaa = (reaction, user) => reaction.emoji.name === '⚽' && user.id === msg.author.id;    
    let mmm = (reaction, user) => reaction.emoji.name === '👶' && user.id === msg.author.id;
    let fff = (reaction, user) => reaction.emoji.name === '👊' && user.id === msg.author.id;
    let bbb = (reaction, user) => reaction.emoji.name === '👌' && user.id === msg.author.id;
    let bbbb = (reaction, user) => reaction.emoji.name === '🍸' && user.id === msg.author.id;
    let ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

    let aa = res.createReactionCollector(aaa, { maxMatches:1 , time: 20000 , });
    let mm = res.createReactionCollector(mmm, { maxMatches:1 , time: 20000 , });
    let ff = res.createReactionCollector(fff, { maxMatches:1 , time: 20000 , });
    let bb = res.createReactionCollector(bbb, { maxMatches:1 , time: 20000 , });
    let bl = res.createReactionCollector(bbbb,{ maxMatches:1 , time: 20000 , });
    let cc = res.createReactionCollector(ccc, { maxMatches:1 , time: 20000 , });

aa.on("collect", r => {
    msg.guild.member(user.id).addRole(a);
	msg.channel.send('`تم اعطائك رتبة للعبة Agar`');
	msg.delete();
	})
mm.on("collect", r => {
    msg.guild.member(user.id).addRole(m);
	msg.channel.send('`تم اعطائك رتبة للعبة Mincraft `');
	msg.delete();
})
ff.on("collect", r => {
    msg.guild.member(user.id).addRole(f);
	msg.channel.send('`تم اعطائك رتبة للعبة Fortnite `');
	msg.delete();
})
bb.on("collect", r => {
    msg.guild.member(user.id).addRole(b);
	msg.channel.send('`تم اعطائك رتبة للعبة Brawlhalla `');
	msg.delete();
})
bl.on("collect", r => {
    msg.guild.member(user.id).addRole(black);
	msg.channel.send('`تم اعطائك رتبة للعبة Blacksquad `');
	msg.delete();
})
cc.on("collect", r => {
	msg.delete();
})
	 })
	 })
	 })
	 })
	 })
	 })
	 })
	 }
	 });




  client.on('guildCreate', guild => {
  client.channels.get("463703228052275210").send(`**تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
});





  const lol =
[
'**__W__elcome To GM Store**',
'**W__e__lcome To GM Store**',
'**We__l__come To GM Store**',
'**Wel__c__ome To GM Store**',
'**Welc__o__me To GM Store**',
'**Welco__m__e To GM Store**',
'**Welcom__e__ To GM Store**',
'**Welcome __T__o GM Store**',
'**Welcome T__o__ GM Store**',
'**Welcome To __G__M Store**',
'**Welcome To G__M__Store**',
'**Welcome To GM__S__tore**',
'**Welcome To GM __S__tore**',
'**Welcome To GM S__t__ore**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("464555487124258816");//ايدي الشات
if(!codes) return;
if(codes) {
codes.send(  `${lol[Math.floor(Math.random() * lol.length)]}`);          
}
});







client.on('message', message => {
if(message.content.startsWith(prefix + 'v2min')) {
    let args = message.content.split(" ").slice(1);
      var nam = args.join(' ');
     if(!message.member.hasPermission('MANAGE_CHANNELS')) return    message.channel.send('**⚠ | `[MANAGE CHANNELS]` لا يوجد لديك صلاحية**').then(msg => msg.delete(6000))
     if (!nam) return message.reply(`** -v2min <أسم الروم>**`).then(msg => msg.delete(10000))
     message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوق�� لي تبيه 
     message.channel.send(`☑ TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ⏱  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
   
    }
});






client.on("message", message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "clear")) {
        if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});




const developers = ["418064523157700609"]
const admin = "%";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(admin + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (admin + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(admin + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(admin + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(admin + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});






let points = JSON.parse(fs.readFileSync('./points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == '%نقاطي'){
        var embed = new RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,'By : ElBrazily',   true)
        .setColor('RANDOM')
        .setFooter('Flame Bot', client.user.avatarURL);
        message.channel.sendEmbed(embed)
    };
    if (message.content == "%فكك") {    
        var x = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'البرازيلي' , 'مكوه' , 'هكونا مطاطا' , 'البرازيلي ذا بيست'];
        var x2 = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ل ب ر ا ز ي ل ي', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ل ب ر ا ز ي ل ي ذ ا ب ي س ت'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`فكك الكلمة الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	    if (message.content == "%ركب") {    
        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ل ب ر ا ز ي ل ي', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ل ب ر ا ز ي ل ي ذ ا ب ي س ت'];
		var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'البرازيلي' , 'مكوه' , 'هكونا مطاطا' , 'البرازيلي ذا بيست'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	    if (message.content == "%رياضيات") {    
        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44,5+44,5'];
		var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	
  if (message.content == "%عواصم") {
        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];
        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`ماهي عاصمة :${x[x3]}, لديك 15 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1, 
                time : 15000, 
                errors : ['time'] 
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == "%لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];
        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`حل اللغز الأتي :${x[x3]}, لديك 20 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "%تحدي") {    
        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];
        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`عدل الكلمة  الآتية :${x[x3]}, لديك 25 ثانية`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب
 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('./points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    });







client.login(process.env.BOT_TOKEN);
