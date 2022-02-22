const { Client, Intents, Collection } = require('discord.js');
const  config  = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES] 
    })
const wait = require('util').promisify(setTimeout);


client.on("messageCreate",async message =>{
    console.log("bot online")
    if(message.author.bot) return
    if(message.content === '!nk'){
        for(let i =0 ; i < config.NoChanl ;i++){
            console.log("Val of i = " + i);
            message.guild.channels.create(config.Channelname, { //Create a channel
                type: 'text', //Make sure the channel is a text channel
                permissionOverwrites: [{ //Set permission overwrites
                    id: message.guild.id,
                    allow: ['VIEW_CHANNEL'],
                }]
            });
        }
    }
})


client.login(config.token);
