const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })


client.on('ready', () => {
    console.log('Schmartbot bereit zum denken');
});

client.login('OTc2MTEwNzQyMTc0NTg4OTc4.GPCp-C.K5dbFGSFmGISiydyDvcKP4cfJ0S-s7Y9VNW2PI');