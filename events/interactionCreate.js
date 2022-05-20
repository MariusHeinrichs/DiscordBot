const Discord = require("discord.js")


module.exports = {
    name: "interactionCreate",
    run: async (bot, interaction) => {
        const {client} = bot

        if (!interaction.isCommand()) return
        if (!interaction.inGuild()) return interaction.reply("Dieser Command funktioniert nur auf diesen Server")

        const slashcmd = client.slashcommands.get(interaction.commandName)

        if(!slashcmd) return interaction.reply("Diesen Slash Command gibt es nicht mehr")

        if(slashcmd.perm && !interaction.member.permissions.has(slashcmd.perm))
            return interaction.reply("Du hast keine Rechte für diesen Command")

        slashcmd.run(client, interaction)
    }
}