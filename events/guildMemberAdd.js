const Discord = require("discord.js")
const generateImage = require("../util/generateImage")

module.exports = {
    name: "guildMemberAdd",
    run: async (member) => {
        const img = await generateImage(member)
        member.guild.channels.cache.get(hereinspaziertChannelId).send({
            content: `<@${member.id}> Herein Spaziert!`,
            files: [img]
        })
    }
}