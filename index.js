const hereinspaziertChannelId = "976130777878249522"

const Discord = require('discord.js')
// const generateImage = require('./generateImage')

const client = new Discord.Client({ 
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ] 
})

let bot = {
    client,
    prefix: "n.",
    owners: ["196961889496858624, 195609270383935490, 293002499369992193"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

// import EventHandler
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
// import CommandHandler
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
//not reloading
client.loadEvents(bot, false)
client.loadCommands(bot, false)

//client.on('ready', () => {
//    console.log('Schmartbot bereit zum denken');
//});
//
//client.on('messageCreate', (message) => {
//    if (message.content == "hi"){
//        message.reply("Hallo")
//    }
//})
//
//client.on("guildMemberAdd", async (member) => {
//    const img = await generateImage(member)
//    member.guild.channels.cache.get(hereinspaziertChannelId).send({
//        content: `<@${member.id}> Herein Spaziert!`,
//        files: [img]
//    })
//})

module.exports = bot

client.login('OTc2MTEwNzQyMTc0NTg4OTc4.GPCp-C.K5dbFGSFmGISiydyDvcKP4cfJ0S-s7Y9VNW2PI')