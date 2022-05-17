const hereinspaziertChannelId = "976130777878249522"

const Discord = require('discord.js')
const generateImage = require('./generateImage')

const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ] 
})


client.on('ready', () => {
    console.log('Schmartbot bereit zum denken');
});

client.on('messageCreate', (message) => {
    if (message.content == "hi"){
        message.reply("Hallo")
    }
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(hereinspaziertChannelId).send({
        content: `<@${member.id}> Herein Spaziert!`,
        files: [img]
    })
})

client.login('OTc2MTEwNzQyMTc0NTg4OTc4.GPCp-C.K5dbFGSFmGISiydyDvcKP4cfJ0S-s7Y9VNW2PI')