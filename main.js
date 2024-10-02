const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
 });
 
client.on("messageCreate", (message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1]
        message.reply({
            content:"Generating short id for " + url
        })
    }
    message.reply({
        content:"Hello How can i help you?"
    })
});

client.on("interactionCreate", (intereaction) =>{
    // console.log(intereaction)
    intereaction.reply("Pong!!")
})


client.login(process.env.DISCORD_TOKEN);