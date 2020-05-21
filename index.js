const Discord = require('discord.js');

const bot = new Discord.Client ();

const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

const ping = require('minecraft-server-util')

const cheerio = require('cheerio');

const request = require('request');

const ytdl = require("ytdl-core");


const PREFIX = '$';

var servers = {};


bot.on('ready',() =>{
   console.log('This bot is online!');
   bot.user.setActivity('JartexNetwork', {type: "PLAYING"});

})


bot.on('messageDelete', message => {
    if(!message.partial) {
        const channel = bot.channels.cache.get('697945726499422358');
        if(channel) {
            const embed = new MessageEmbed()
                .setTitle(`Message Deleted in ${message.channel.name}`)
                .setColor('#FF0000')
                .setThumbnail(message.author.displayAvatarURL())
                .setAuthor('CCBot Chat Logger', 'https://cdn.discordapp.com/attachments/697945726499422358/699401959165395004/447435.png')
                .addField('**Content:**', (message.content))
                .setFooter(`Author: ${message.author.tag} | User ID: ${message.author.id}`)
                .setTimestamp();
                
                    
                        

                channel.send(embed);
        }
    }


})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.id === "697942415574827029")
    if(!channel) return;

    channel.send(`Welcome ${member} to **The Cheaters Clan Server**, enjoy your stay`)

          
});

bot.on('message', message=>{

    let args= message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;


    switch(args[0]){
        case 'clan':
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('<:Soldier:712857325282656348> | Cheaters Clan Members')
            .setDescription('The list of the Cheaters Clan members')
            .setThumbnail('https://cdn.discordapp.com/attachments/697939276759040041/698179816121171968/logo.png')
            .addFields(
                { name: '**<:Leader:712852712349499523> Leaders»**', value: '```NotLoLo1818, LordKacem```' },
		        { name: '**<:CoLeader:712852712106098728> Co-Leaders»**', value: '```Yeah, ItchyDanger49, NotSansy, DrogonMC```' },
                { name: '**<:Member:712852713104343071> Members»**', value: '```_Hey__, dogtickles, Nirahz, JoltTheBolt, Pingging, BlueEnderFury, FireBlqde, SummerBoi, LimitedElimz, _OtherGamer_, SadHacks, Hakuante, SpookyMan06, chocz700, edikaa```', inline: true },
            )
            
            .setImage('https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png')
            .setTimestamp()
            .setFooter('CCBot', 'https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png');
            
            message.channel.send(embed);
        break;

        }

        switch(args[0]){
            case 'invite':
            const embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Cheaters Clan Discord Server')
            .setThumbnail('https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png')
            .addField('**<:Discord:698365363691454556> Invite Link»**', 'https://discord.gg/pCsPVXR')
            .setTimestamp()
            .setFooter('CCBot', 'https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png');
            
            message.channel.send(embed);
        break;
        }

        switch(args[0]){
            case 'jartex':

                
                ping('play.jartexnetwork.com', 25565, (error, response) =>{
                    if(error) throw error
                    const embed = new Discord.MessageEmbed()
                    .setColor('FFBD00')
                    .setTitle('<:Jartex:698559048907489350> JartexNetwork Status')
                    .setThumbnail('https://cdn.discordapp.com/attachments/697939276759040041/698179816121171968/logo.png')
                    .addField('**Server IP»**', response.host)
                    .addField('**Server Version»**', response.version)
                    .addField('**Online Players»**', response.onlinePlayers)
                    .addField('**Max Players»**', response.maxPlayers)
                    .setTimestamp()
                    .setFooter('CCBot', 'https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png');

                    message.channel.send(embed)

                    
                })
            break

        }

        switch(args[0]){
            case 'help':
            const embed = new Discord.MessageEmbed()
            .setColor('#3AFF00')
            .setTitle('<:Help:699062330901790750> A list of all the available commands')
            .setDescription('The prefix for the CCBot is ``$``')
            .setThumbnail('https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png')
            .addField('**<:CCLogo:697981032531755058> $clan »**', "Showcases a list of the Cheaters Clan members")
            .addField('**<:Discord:698365363691454556> $invite »**', "Provides you with a discord invite link", true)
            .addField('**<:Jartex:698559048907489350> $jartex »**', "Displays information about JartexNetwork")
            .setTimestamp()
            .setFooter('CCBot', 'https://cdn.discordapp.com/attachments/697939276759040041/698179449488670740/Cheaters_Clan_Logo_PNG.png');
            
            message.channel.send(embed)
        break;
        
        }



        const attachment = new MessageAttachment(message.author.displayAvatarURL());
        
        switch(args[0]){
            case 'pfp':
               message.channel.send('Your profile picture is:') 
                message.reply(message.author.displayAvatarURL())
            
        break;
        
        }




        
        



    
        if(message.content === "define gayness") {
            message.channel.send('Slash !!')
        }
         
        if(message.content === "ez"){
            message.channel.send('Like your mom last night');
        }

        if(message.content === "why"){
            message.channel.send('Cause I say so');
        }

        if(message.content === "ok"){
            message.channel.send('STFU');
        }

         if(message.content === "L"){
            message.channel.send('STFU');
        
        }

        if(message.content === "hi"){
            message.channel.send('hey');
        
        }

        if(message.content === "Hi"){
            message.channel.send('hey');
        
        }

        if(message.content === "define stupidness"){
            message.channel.send('@foruthstorm#4285');
        
        }

        if(message.mentions === "hoe"){
            message.channel.send('BITCH');
        
        }

        if(message.content === "who's the pedo?"){
            message.channel.send('Rayan of course.')
        
        }
    
        if(message.content === "rayan"){
            message.react('🍆')
                .then(()=> message.react('🍑'))
                .catch(() => console.error('One of the emojis failed to react.'));
        
        }

        if(message.content === "lolo"){
            message.react('🍆')
                .then(()=> message.react('🍑'))
                .catch(() => console.error('One of the emojis failed to react.'));
        
        }

        if(message.content === "xd"){
            message.channel.send('eggsdee')
        
        }

        if(message.content === "xdd"){
            message.channel.send('eggsdee')
        
        }

        if(message.content === "xddd"){
            message.channel.send('eggsdee')
        
        }

        if(message.content === "is this true ?"){
            message.channel.send('False accusations, typical pedo')
        
        }

     
        
       

    })
bot.login(process.env.token);