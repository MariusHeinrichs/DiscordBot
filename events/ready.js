const guildID = "976112919836241930"

// additionaly, loads in the slashcommands into the guild (server)
module.exports = {
    name: "ready",
    run: async (bot) => {
        const {client} = bot
        const guild = client.guilds.cache.get(guildID)
        console.log("Logged in as " + bot.client.user.tag)

        if (!guild)
            return console.error("Target guild not found")

        await guild.commands.set([...client.slashcommands.values()])
        console.log(`Successfully loaded in ${client.slashcommands.size} slashCommands into the guild`)
    }
}