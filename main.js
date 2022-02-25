const reply = require('discord-reply');

const Discord = require('discord.js');

const { Intents } = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

const fs = require('fs');

const storage = require('node-persist');

global.talkedRecently = new Set();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

global.items = ['Ron_NFT', 'Burger_in_the_hot_dog_bun'];
global.prices = [0, 5];

//global.boostCooldown = 600000;

['command_handler', 'event_handler'].forEach(handler =>
    {
        require(`./handlers/${handler}`)(client, Discord);
    })

require("dotenv").config();

client.once('ready', async () => 
{
    console.log('Bot on');
    client.user.setActivity('your mom', { type: 'PLAYING' });

});

client.login(process.env.TOKEN);