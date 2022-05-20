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
client.slashcommands = new Discord.Collection()

// import EventHandler
client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
// import SlashcommandHandler
client.loadSlashCommands = (bot, reload) => require("./handlers/slashcommands")(bot, reload)
// import CommandHandler
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)
//not reloading
client.loadEvents(bot, false)
client.loadSlashCommands(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login('OTc2MTEwNzQyMTc0NTg4OTc4.GPCp-C.K5dbFGSFmGISiydyDvcKP4cfJ0S-s7Y9VNW2PI')