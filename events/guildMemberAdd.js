const Discord = require("discord.js")
const generateImage = require("../util/generateImage")
const hereinspaziertChannelId = "976130777878249522"

module.exports = {
    name: "guildMemberAdd",
    run: async (bot, member) => {
        const img = await generateImage(member)
        member.guild.channels.cache.get(hereinspaziertChannelId).send({
            content: `<@${member.id}> Herein Spaziert!`,
            files: [img]
        })
    }
}